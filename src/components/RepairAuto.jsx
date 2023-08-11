import React from 'react'
import autoLogoSvg from '../assets/autoLogo.svg'
import H2 from './UI/H2'
const RepairAuto = () => {
  return (
    <section className=' bg-main-red'>
      <div className="max-w-7xl mx-auto  text-white p-4">
        <H2 className="max-w-md text-center mx-auto text-xl md:text-3xl font-bold mb-2">РЕМОНТ АВТОМОБИЛЕЙ</H2>
        <p className=" max-w-xl text-sm md:text-base lg:text-lg text-center mx-auto mb-2">Наш сервис болеее 15 лет занимается ремонтом различных поломок на самых разных  марках и моделей автомобилей. Вот не полный список  автомобилей, которые получили качественый ремонт у нас :</p>
        <img src={autoLogoSvg} alt="Логотипы авто" className='mx-auto w-full max-w-3xl'/>
      </div>
      
    </section>
  )
}

export default RepairAuto