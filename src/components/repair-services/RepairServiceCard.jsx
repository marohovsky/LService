import React from 'react'

const RepairServiceCard = ({card}) => {
  return (
    <li className='w-[300px] border border-gray-400 p-2 rounded-md'>
        <div className=' flex items-center  space-x-4'>
          <img className=' w-16 h-16' src={card.img} alt="" />
          <h3 className=' font-bold text-lg'>{card.name}</h3>
        </div>
        <ul>
          {card.repairList.map((item, i) => {
            return (
              <li key={i} className= {i === card.repairList.length-1 ? 'flex justify-between p-2' : 'flex justify-between p-2 border-b'}>
                <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>

                  <h4 className=' text-sm'>{item.name}</h4>
                </div>
                <h4 className=' text-sm font-bold'>от {item.min}</h4>
              </li>
            )
          })}
        </ul>
    </li>
  )
}

export default RepairServiceCard