import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image1 from '../../../assets/image1.jpg'
import image2 from '../../../assets/image2.jpg'
import image3 from '../../../assets/image3.jpg'
import image4 from '../../../assets/image4.jpg'
import './Banner.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide className='relative flex items-center h-full bg-cover bg-center bg-no-repeat'>
                    <img src={image1} alt="" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(212,21,221,0)]">
                        <div className="text-white space-y-6 text-center  mb-8 md:mt-16 md:w-1/2 pl-8">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold pt-6">Greenfield College </h2>
                            <p className="text-sm md:text-base hidden lg:flex">At Greenfield College of Arts, we nurture creativity and critical thinking. Our diverse arts programs and collaborative environment help students explore their passion for arts and unleash their artistic potential.</p>
                            <div>
                                <button className="btn btn-primary mt-4 md:mt-6 mr-4 md:mr-8">Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <img src={image3} alt="" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(212,21,221,0)]">
                        <div className="text-white space-y-6 text-center  mb-8 md:mt-16 md:w-1/2 pl-8">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Liberal Arts Academy </h2>
                            <p className="text-sm md:text-base"> Liberal Arts Academy fosters intellectual curiosity and critical thinking. Our interdisciplinary approach empowers students to explore various subjects and become well-rounded thinkers.</p>
                            <div>
                                <button className="btn btn-primary mt-4 md:mt-6 mr-4 md:mr-8">Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} alt="" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(212,21,221,0)]">
                        <div className="text-white space-y-6 text-center  mb-8 md:mt-16 md:w-1/2 pl-8">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Culinary Arts College </h2>
                            <p className="text-sm md:text-base">Culinary Arts College ignites culinary passion and culinary entrepreneurship. Students master the art of cooking, baking, and food management in our well-equipped kitchens.</p>
                            <div>
                                <button className="btn btn-primary mt-4 md:mt-6 mr-4 md:mr-8">Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <img src={image2} alt="" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(212,21,221,0)]">
                        <div className="text-white space-y-6 text-center  mb-8 md:mt-16 md:w-1/2 pl-8">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Digital Arts Academy </h2>
                            <p className="text-sm md:text-base"> Digital Arts Academy is a hub for digital creatives. From animation to game design, our curriculum empowers students to transform ideas into visually stunning digital experiences.</p>
                            <div>
                                <button className="btn btn-primary mt-4 md:mt-6 mr-4 md:mr-8">Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
               
             
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>

                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
