import React from 'react'
import logo from '../assets/logo.svg';
import HeaderInfo from './HeaderInfo';
import { Link } from 'react-scroll';
import { scroller } from 'react-scroll';

const Header = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 1400,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };
  return (
    <header className='max-w-7xl flex mx-auto py-4 px-4 items-center justify-between'>
      <div className='flex space-x-2 sm:space-x-4 md:space-x-6 items-center'>
      <img className='h-[30px] md:h-10 ' src={logo} alt="логотип" />
      <HeaderInfo className='flex-grow'/>
      </div>
      <section>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:hidden">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <ul className='hidden md:flex space-x-3 font-medium'>
        <li><Link href="#" onClick={()=> scrollToSection('service') }>Услуги</Link></li>
        <li><Link href="#" onClick={()=> scrollToSection('razbor') }>Разборка</Link></li>
        <li><Link href="#" onClick={()=> scrollToSection('customers') }>Отзывы</Link></li>
        <li><Link href="#" onClick={()=> scrollToSection('contact') }>Контакты</Link></li>
      </ul>
      </section>

    </header>
  )
}

export default Header