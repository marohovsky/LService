import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import photo from '../assets/customers/photo.jpg'
import photo1 from '../assets/customers/photo1.jpg'
/* import photo2 from '../assets/customers/photo2.jpg' */
import photo3 from '../assets/customers/photo3.jpg'
import photo4 from '../assets/customers/photo4.jpg'
import photo5 from '../assets/customers/photo5.jpg'
import photo6 from '../assets/customers/photo6.jpg'
import photo7 from '../assets/customers/photo7.jpg'
import photo8 from '../assets/customers/photo8.jpg'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../swiperCustomStyle.css'
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import H2 from './UI/H2';


const Customers = () => {
  return (
    <section id='customers' className='max-w-7xl mx-auto mt-10 pt-10'>
        <H2>НАШИ КЛИЕНТЫ</H2>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper flex items-center"
        id='customerSwiper'
      >
        <SwiperSlide><img src={photo} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo1} alt="" /></SwiperSlide>
{/*         <SwiperSlide><img src={photo2} alt="" /></SwiperSlide> */}
        <SwiperSlide><img src={photo3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo8} alt="" /></SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Customers