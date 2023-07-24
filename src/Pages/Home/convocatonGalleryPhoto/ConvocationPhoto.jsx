import React from 'react';
import './convocationPhoto.css'
import normal1 from '../../../assets/normal1.jpg'
import vertical1 from '../../../assets/vertical1.jpg'
import horizontal1 from '../../../assets/horizontal1.jpg'
import normal2 from '../../../assets/normal2.jpg'
import normal3 from '../../../assets/normal3.jpg'
import big1 from '../../../assets/big1.jpg'
import normal4 from '../../../assets/normal4.jpg'
import vertical2 from '../../../assets/vertical2.jpg'
import normal5 from '../../../assets/normal5.jpg'
import horizontal2 from '../../../assets/horizontal2.jpg'
import normal6 from '../../../assets/normal6.jpg'
import big2  from '../../../assets/big2.jpg'
import normal7  from '../../../assets/normal7.jpg'
import horizontal3  from '../../../assets/horizontal3.jpg'
import normal8  from '../../../assets/normal8.jpg'
import big3  from '../../../assets/big3.jpg'
import normal9  from '../../../assets/normal9.jpg'
import vertical3  from '../../../assets/vertical3.jpg'
import coro  from '../../../assets/coro.jpg'

export default function ConvocationPhoto() {

  return (
    <div className='mb-10'>
    <h1 className='text-center font-bold text-4xl mb-4'>Gallery</h1>
    <div className="border-t-2 border-black mb-10 w-48 mx-auto"></div>
   <marquee > <h1 className='text-center text-xl font-bold'>All students Convocation Gallery 2022 Unversity collected</h1></marquee >
    <div class="container1  w-[900px] mx-auto mt-10">
      
      <div><img src={normal1} /></div>
      <div class="vertical"><img src={vertical1} /></div>
      <div class="horizontal"><img src={horizontal1} /></div>
      <div><img src={normal2} /></div>
      <div><img src={normal3} /></div>
      <div class="big"><img src={big1} /></div>
     <div><img src={normal4} /></div>
      <div class="vertical"><img src={vertical2} /></div>
      <div><img src={normal5}/></div>
     <div class="horizontal"><img src={horizontal2}  /></div>
      <div><img  src={normal6} /></div>
      <div class="big"><img src={big2} /></div>
     <div><img src={normal7} /></div>
      <div class="horizontal"><img src={horizontal3} /></div>
       <div><img src={normal8} /></div>
      <div class="big"><img src={big3} /></div>
      <div><img src={normal9} /></div>
      <div class="vertical"><img src={vertical3} /></div> 
      <div class="horizontal"><img src={coro} /></div> 
    </div>
    </div>
    
  );
}
