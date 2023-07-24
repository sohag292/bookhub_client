import React from 'react'
import Banner from '../Banner/Banner'
import AddmissionCard from '../AdmissionCard/AddmissionCard'
import ConvocationPhoto from '../convocatonGalleryPhoto/ConvocationPhoto'


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AddmissionCard></AddmissionCard>
      <ConvocationPhoto></ConvocationPhoto>
    </div>
  )
}
