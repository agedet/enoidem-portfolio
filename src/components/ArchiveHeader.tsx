'use client'

import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'

const NAV_LINKS = [
  { href: '/#about', label: 'About' },
  { href: '/#education', label: 'Education' },
  { href: '/#experience', label: 'Experience' },
]

function ArchiveHeader() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const closeMobileClicked = () => setIsNavOpen(false);

  return (
    <header className="bg-text ">
        <div className='py-4 mx-auto max-w-screen-xl px-6 md:px-12'>
            <div className="flex justify-between items-center">
                <div className='flex-[1]'>
                    <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        <Link href='/'>
                            Enoidem
                        </Link>
                    </h1>
                </div>
        
                <nav className="flex-[3]" aria-label="In-page jump links">
                    <div className='DESKTOP-MENU hidden lg:flex lg:justify-between lg:items-center'>
                        <ul className="flex justify-start items-center tracking-[0.75px] font-medium gap-[40px]">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} legacyBehavior>
                                        <a 
                                            className="group flex items-center py-3"
                                        >
                                            {/* <span className="nav-indicator mr-4 h-px w-8 bg-slate-300 transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none"></span> */}
                                            <span className="nav-text text-xs font-bold uppercase tracking-widest text-white group-hover:text-primary group-focus-visible:text-primary">{link.label}</span>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <ul className='flex justify-center items-center tracking-[0.75px] font-medium gap-10'>
                            <li className='capitalize'>
                                <Link href='/' legacyBehavior>
                                    <Image 
                                        src='/icons8-whatsapp-48.png'
                                        alt='whatsapp_icon'
                                        width={48}
                                        height={48}
                                        className='w-[48px] h-[48px] object-contain' 
                                    />
                                </Link>
                            </li>
                            <li className='nav-cta'>
                                <Link href='#contact' legacyBehavior>
                                    <a         
                                        className='font-inter rounded-[4px] bg-primary px-[22px] py-[13px] font-medium text-[14px] text-white hover:text-text group-hover:text-text'
                                    >
                                        Book a Consultation
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* MOBILE MENU */}
                    <div className='MOBILE-NAV-MENU flex justify-end items-center lg:hidden'>
                        {/* HAMBURGER MENU */}
                        <div 
                            className='HAMBURGER-ICON flex flex-col gap-1.5 cursor-pointer'
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className='block h-0.5 w-7 bg-slate-300'></span>
                            <span className='block h-0.5 w-7 bg-slate-300'></span>
                            <span className='block h-0.5 w-7 bg-slate-300'></span>
                        </div>

                        {/* NAV MENU */}
                        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
                            <div className='CROSS-ICON bg-accent absolute top-6 right-6 px-1 py-1 rounded-md'
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className='h-6 w-6 text-[#000000]'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                >
                                    <line x1='18' y1='6' x2='6' y2='18' />
                                    <line x1='6' y1='6' x2='18' y2='18' />
                                </svg>
                            </div>

                            {/* links */}
                            <div className='MENU-LINK-MOBILE-OPEN grid gap-8' onClick={closeMobileClicked}>
                                <ul className='MENU-LINK-MOBILE-OPEN grid gap-4 '>
                                    {NAV_LINKS.map((link) => (
                                        <li key={link.label} onClick={closeMobileClicked}>
                                            <Link href={link.href} legacyBehavior>
                                                <a 
                                                    className="group flex items-center py-2"
                                                >
                                                    {/* <span className="nav-indicator mr-4 h-px w-8 bg-slate-300 transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none"></span> */}
                                                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-primary group-focus-visible:text-primary">{link.label}</span>
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <ul className='grid gap-8'>
                                    <li 
                                        onClick={closeMobileClicked}
                                    >
                                        <Link href='/whatsapp' legacyBehavior>
                                            <Image 
                                                src='/icons8-whatsapp-48.png'
                                                alt='whatsapp_icon'
                                                width={48}
                                                height={48}
                                                className='w-[48px] h-[48px]'
                                            />
                                        </Link>
                                    </li>
                                    
                                    <li
                                        onClick={closeMobileClicked}
                                    >
                                        <Link href='/#contact' legacyBehavior>
                                            <a 
                                                target='_blank'
                                                className='font-inter rounded-[4px] bg-primary px-[22px] py-[13px] font-medium text-[14px] text-white hover:text-white'
                                            >
                                                Book a Consultation
                                            </a>
                                        </Link>
                                    </li>
                                </ul>

                                <ul className="ml-1 mt-4 flex items-center" aria-label="Social media">
                                    <li className="mr-5 shrink-0 text-xs">
                                    <a 
                                        href="" 
                                        className="block text-slate-300 hover:text-primary" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="LinkedIn (opens in a new tab)" 
                                        title="LinkedIn"
                                    >
                                        <span className="sr-only">LinkedIn</span>
                                        <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="currentColor" 
                                        className="h-6 w-6" 
                                        aria-hidden="true"
                                        >
                                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                <a 
                                    className="block text-slate-300 hover:text-primary" 
                                    href="https://instagram.com/" 
                                    target="_blank" 
                                    rel="noreferrer noopener" 
                                    aria-label="Instagram (opens in a new tab)" 
                                    title="Instagram"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 1000 1000" 
                                    fill="currentColor" 
                                    className="h-6 w-6" 
                                    aria-hidden="true"
                                    >
                                    <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                                    </svg>
                                </a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {/* <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            <li className="mr-5 shrink-0 text-xs">
            <a 
                href="" 
                className="block text-slate-300 hover:text-primary" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn (opens in a new tab)" 
                title="LinkedIn"
            >
                <span className="sr-only">LinkedIn</span>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="h-6 w-6" 
                aria-hidden="true"
                >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
            </a>
            </li>

            <li>
            <a 
                className="block text-slate-300 hover:text-primary" 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noreferrer noopener" 
                aria-label="Instagram (opens in a new tab)" 
                title="Instagram"
            >
                <span className="sr-only">Instagram</span>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1000 1000" 
                fill="currentColor" 
                className="h-6 w-6" 
                aria-hidden="true"
                >
                <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                </svg>
            </a>
            </li>
            </ul> */}
        </div>
    </header>
  )
}

export default ArchiveHeader