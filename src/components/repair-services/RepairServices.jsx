import React from 'react'
import H2 from '../UI/H2'
import repairList from './repairList'
import RepairServiceCard from './RepairServiceCard'
const RepairServices = () => {
  return (
    <section id='service' className=' max-w-7xl mx-auto p-4 space-y-6'>
      <H2>УСЛУГИ АВТОСЕРВИСА</H2>
      <ul className='flex items-stretch justify-center flex-wrap gap-4 mb-6'>
        {repairList.map((card,i) => <RepairServiceCard key={i} card={card}/>)}
      </ul>
      <div className='w-3/5 min-w-[320px] mx-auto flex bg-main-red border-4 border-main-red p-1 rounded-xl'>
        <div className='bg-white p-4 rounded-l-xl flex justify-center items-center w-1/3 '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className=" w-20 h-20 text-main-red my-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
</svg>
</div>
        <div className='text-white w-full text-sm lg:text-xl my-auto'>
          <h3 className='w-3/5 min-w-[170px]  mx-auto text-center '>Не нашли нужную услугу или хотите записаться на ремонт:</h3>
          <div className='flex flex-col md:flex-row flex-wrap justify-around items-center'>
          <button className='bg-white p-2 text-main-red rounded-md min-w-[150px]'>Запись на сто</button>
          <p>или</p>
          <a href="tel:+380509385373">(050)-938-53-73</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RepairServices