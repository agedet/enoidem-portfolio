'use client'

import React from 'react'
import CountUp from 'react-countup'

const stats = [
    {
        num: 23,
        text: 'Courses taught'
    },
    {
        num: 51,
        text: 'Publications'
    },
    {
        num: 20,
        text: 'Major conferences'
    },
    {
        num: 25,
        text: 'Committees Chaired'
    },
]

function Stats() {
  return (
    <section id='stats' className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8'>
            {stats.map((item, index) => {
                return (
                    <div key={index} className='border-l-4 pl-2 border-primary bg-primary/5 py-[10px] flex flex-col text-center'>
                        <div className='flex justify-start items-end'>
                            <CountUp 
                                end={item.num}
                                duration={10}
                                delay={2}
                                className="text-4xl font-bold"
                            />
                        </div>
                        <div>
                            <p className='text-[14px] text-start font-400 leading-[22px]'>
                                {item.text}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Stats