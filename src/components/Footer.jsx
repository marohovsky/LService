import React from 'react'
import H2 from './UI/H2'
import instaLogo from '../assets/insta.png';

const Footer = () => {
  return (
    <footer id='contact' className='mt-7 py-10 bg-zinc-800 text-white'>
        
        <div className='flex flex-wrap justify-center '>
        <div  className='w-1/2 min-w-[320px] flex flex-col items-center'>
        <H2>Мы на карте:</H2>
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10145.904486319814!2d36.145425046005485!3d49.97482882909428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a131843d5eed%3A0xfcbd5b42daee4ed4!2z0KHQotCeLdCQ0LLRgtC-0YDQsNC30LHQvtGA0LrQsCBMU2VydmljZQ!5e0!3m2!1suk!2sua!4v1691752534626!5m2!1suk!2sua" width="600" className=' w-full md:w-5/6' height="300" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='w-1/2 p-3 flex flex-col items-start '>
          <H2>Контакты:</H2>
          <section>
      <ul className=' font-bold text-md space-y-4'>
        <li className='flex space-x-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-main-red">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <h2 className=' font-bold'>м. Харків. Залютинська, 19/2</h2>
        </li>
        <li className='flex space-x-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  text-main-red">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className=' font-bold'>ПН-ПТ  09:00 - 18:00 </h2>
        </li>
        <li className='flex space-x-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-main-red">
           <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
          <h2 className=' font-bold'>050-938-53-73</h2>
        </li>
      </ul>
    </section>
      <H2>Mы в соц. сетях</H2>
      <a href="https://www.instagram.com/lservice.kh/"  rel="noreferrer"  target='_blank'><img className=' w-14 h-14' src={instaLogo} alt="" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer