import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Admissionviewinfo() {
    const admissioninformation = useLoaderData()
    console.log(admissioninformation);
    const { collegeimage, collegeName, admissionProcess, events, researchHistory, sportsCategories } = admissioninformation;
    return (
        <div>
            <div>
                <marquee className="text-xl mt-2 text-indigo-600">{researchHistory}</marquee>
                <h1 className='text-center text-3xl font-bold my-4 '>Institute of {collegeName}</h1>
                <img className='h-80  w-full' src={collegeimage} alt="" />
                <div className=' w-[700px]  mx-auto text-center my-10'>
                    <h1 className='text-2xl font-bold'>Admisson Process</h1>
                    <p className='text-justify'>{admissionProcess}</p>
                </div>
                <div className='container mx-auto  my-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div>
                        <h1 className='font-bold text-2xl'>Event :</h1>
                        <ul>
                            {events.map((event, index) => (
                                <li key={index}>
                                    <h2 className='text-center'>{event.eventName}</h2>
                                    <p>Date: {event.eventDate}</p>
                                    <p>Location: {event.location}</p>
                                    <p>Description: {event.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h1>Sports</h1>
                        <ul>
                            {sportsCategories.map((sport, index) => (
                                <li key={index}>
                                    <h2>{sport.categoryName}</h2>
                                    <p>{sport.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}
