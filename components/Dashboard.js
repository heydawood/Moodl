import { Fugaz_One } from 'next/font/google';
import React from 'react'



const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });


export default function Dashboard() {


  const statuses = {
    num_days: 14,
    time_remaining: '13:14:26',
    date: (new Date()).toDateString()
  }

  const moods = {
    '#&%*%' : '🤬',
    'Sad' : '😢',
    'Existing' : '😐',
    'Good' : '😄',
    'Elated' : '😍',
  }


  return (
    <div className='flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16 '>

      <div className='grid grid-cols-3 bg-indigo-50 text-indigo-500 rounded-lg p-4 gap-4'>
        {Object.keys(statuses).map((status, statusIndex) => {

          return (
            <div key={statusIndex} className=' flex flex-col gap-1 sm:gap-2'>
              <p className='font-medium uppercase text-sm sm:text-sm truncate'>{status.replaceAll('_',' ')}</p>
              <p className={'text-base sm:text-lg truncate ' + fugaz.className}>{statuses[status]}</p>
            </div>
          )

        })}
      </div>

      <h4 className={'text-5xl sm:text-6xl md:text-7xl text-center ' + fugaz.className}>
        How do you <span className='textGradient'>feel</span> today?
      </h4>

      <div className='grid grid-cols-2 md:grid-col-5 gap-4'>

        {Object.keys(moods).map((mood, moodIndex) =>{

          return(
            <button key={moodIndex}
             className={' ' + (moodIndex === 4 ? ' col-span-2' : ' ')}>

              <p>{mood}</p>
              <p>{moods[mood]}</p>

            </button>
          )

        })}

      </div>

    </div>
  )
}
