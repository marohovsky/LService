import React from 'react'
import H2 from './UI/H2'
import razborImg from '../assets/razbor.jpg'
const Razbor = () => {
  return (
    <section id='razbor' className=' max-w-7xl mx-auto px-4'>
      <H2>АВТО РАЗБОРКА</H2>
      <div className='flex flex-wrap justify-center '>
        <img src={razborImg} alt=""  className='w-1/2 min-w-[320px]'/>
        <div className='w-1/2 p-3'>
          <h2 className='font-bold text-xl'>lorsdsd fff</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore reprehenderit facilis perferendis temporibus natus blanditiis, eveniet quidem eum quibusdam vel molestiae eaque sit adipisci! Laboriosam temporibus accusamus repellendus quod quo.</p>
        </div>
      </div>
    </section>
  )
}

export default Razbor