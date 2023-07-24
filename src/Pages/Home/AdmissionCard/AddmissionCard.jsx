import React, { useEffect, useState } from 'react'
import Admissioninfo from '../AdmissionInfo/Admissioninfo';

export default function AddmissionCard() {
    const [admissionProfile, setAdmissionProfile] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch('http://localhost:2000/admissioninfo')
        .then(res => res.json())
        .then(data => {
            setAdmissionProfile(data);
          setLoading(false);
        })
        .catch(error => console.log(error))
    }, [])
    
  return (
    <div className='container mx-auto px-6 mb-10 '>
        <h1 className='text-center mt-10 mb-2 text-4xl font-bold '>Addmission Info </h1>
        <div className="border-t-2 border-black mb-10 w-80 mx-auto"></div>

        {loading ? (
        <div style={{ textAlign: 'center' }}>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {admissionProfile.map((profile) => (
          <div key={profile.id} className="card  bg-base-100 shadow-xl">
            <Admissioninfo profile={profile} />
          </div>
        ))}
      </div>
      )}
    </div>
  )
}
