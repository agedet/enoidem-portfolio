import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer id='footer' className='bg-text text-white'>
        <div className='mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:pt-16 md:pb-10 flex flex-col gap-12'>
            <div className='flex flex-col gap-10 md:flex-row md:gap-8 lg:gap-12 w-full'>
                <div className='flex-[2] flex flex-col gap-4'>
                    <h2 className='text-xl font-bold text-white'>Professor Enoidem Usoro</h2>

                    <div className='grid gap-2'>
                        <p className='text-sm text-white/95 font-semibold w-[80%]'>
                            Prof. Enoidem Usoro is a Professor of Business Education from Department of Business Education, Faculty of Education, University of Uyo, Nigeria.
                        </p>

                        <h2 className='text-lg font-bold mt-4'>Contact</h2>

                        <div className='flex flex-col gap-4 text-sm'>
                            <span>
                                <Link href='/privacy' className='font-semibold'>Email</Link>:  enoidemusoro@gmail.com
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex-[1] flex flex-col gap-4'>
                    <h2 className='text-lg font-bold'>Quick Links</h2>

                    <div className='flex flex-col gap-4 text-sm'>
                        <span>
                            <Link href='/about'>About</Link>
                        </span>

                        <span>
                            <Link href='/contact'>Contact</Link>
                        </span>

                        <span>
                            <Link href='/archive'>Publications</Link>
                        </span>
                    </div>
                </div>

                <div className='flex-[1] flex flex-col gap-4'>
                    <h2 className='text-lg font-bold'>Resources</h2>

                    <div className='flex flex-col gap-4 text-sm'>
                        <span>
                            <Link href='/privacy'>Journals</Link>
                        </span>

                        <span>
                            <Link href='/terms'>Book Chapters</Link>
                        </span>

                        <span>
                            <Link href='/disclaimer'>Conferences</Link>
                        </span>
                    </div>
                </div>

                {/* contact */}
                <div className='flex-[1] flex flex-col gap-4'>
                    <h2 className='text-lg font-bold'>Follow on</h2>

                    <div className='flex flex-col gap-4'>
                        <span>
                            <Link href='https://www.researchgate.net/profile/Enoidem-Usoro'>
                                <Image 
                                    src='/gs.png'
                                    alt='GoogelScholar'
                                    width={100}
                                    height={50}
                                />
                            </Link>
                        </span>
                    
                        <span>
                            <Link href='https://www.researchgate.net/profile/Enoidem-Usoro'>
                                <Image 
                                    src='/rg.png'
                                    alt='ResearchGate'
                                    width={50}
                                    height={50}
                                />
                            </Link>
                        </span>
                    </div>
                </div>
            </div>

            <div className='text-center text-sm border-t-1 border-shade pt-4'>
                <span>
                    Copyright © 2025 <Link href='/'>Professor Enoidem Usoro</Link>. All Rights reserved.
                </span> {' '} | {' '}

                <span>
                    Designed by {' '}
                    <Link href='' className='text-primary'>Culmerin Inc</Link>
                </span>
            </div>
        </div>
    </footer>
  )
}

export default Footer