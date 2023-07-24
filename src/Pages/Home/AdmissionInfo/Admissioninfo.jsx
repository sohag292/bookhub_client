import React from 'react'
import './admissioninfo.css'
import { Link } from 'react-router-dom';
export default function Admissioninfo({ profile }) {
    const {id, collegeimage, collegeName, admissionDate, events, sports, researchHistory } = profile;
    return (
        <div>
            <div ><figure><img className='h-56 w-full' src={collegeimage} alt="college" /></figure></div>
            <div className="p-4">
                <h2 className="card-title text-2xl">{collegeName}</h2>
                <h2 className="card-title text-sm">Admission Date : {admissionDate}</h2>
                <div className="flex justify-between my-3">
                   
                        <div >
                            <h1 className='text-lg font-bold'>Event</h1>
                            <ul>
                                {events.map((event, index) => (
                                    <div className='flex'>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"></path></svg>
                                    <li  key={index}>{event}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>

                        <div className='mx-8'>
                            <h1 className='text-lg font-bold'>Sports</h1>
                            <ul>
                                {sports.map((sport, index) => (
                                     <div className='flex'>
                                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"></path></svg>
                                     <li  key={index}>{sport}</li>
                                     </div>
                                ))}
                            </ul>
                        </div>
                  
                </div>
                <p><span className='font-bold'>Research History:</span> {researchHistory}</p>
                <div className="card-actions justify-end">
                    <Link to={`/admissonDetail/${id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    )
}
