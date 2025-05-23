import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div className='md:flex md:flex-row-reverse md:justify-between md:items-center lg:block'>
        <div className='flex mb-6 lg:hidden justify-center items-center'>
          <Image 
            src='/professor-enoidem-usoro.png'
            alt='professor-enoidem-usoro'
            width={500}
            height={100}
            className='w-[298px] h-[298px] rounded-full object-cover lg:w-[498px] lg:h-[498px] bg-[#9b7f69] border-4 p-[15px]'
          />
        </div>

        <div className='flex flex-col items-center text-center md:items-start md:text-start'>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
              <Link href='/'>Enoidem Usoro</Link>
            </h1>

            <h2 className="mt-3 text-lg font-medium tracking-tight text-text/80 sm:text-xl">
              Professor of Business Education
            </h2>

            <p className="mt-4 lg:max-w-xs text-text/70 leading-normal">
              Deputy Vice Chancellor (Academics) of University of Uyo
            </p>
          
            <nav 
              className="nav hidden lg:block" 
              aria-label="In-page jump links"
            >
              <ul className="mt-16 w-max">
                <li>
                  <Link href="#about" legacyBehavior>
                    <a 
                      
                      className="group flex items-center py-3 active"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-text transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-text group-hover:text-primary group-focus-visible:text-primary">About</span>
                    </a>
                  </Link>
                </li>

                <li>
                  <a 
                    href="#education" 
                    className="group flex items-center py-3"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-text transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-text group-hover:text-primary group-focus-visible:text-primary">Education</span>
                  </a>
                </li>

                <li>
                  <a 
                    href="#experience" 
                    className="group flex items-center py-3"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-text transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-text group-hover:text-primary group-focus-visible:text-primary">Experience</span>
                  </a>
                </li>

                <li>
                  <a 
                    href="#publications" 
                    className="group flex items-center py-3"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-text transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-text group-hover:text-primary group-focus-visible:text-primary">Publications</span>
                  </a>
                </li>

                <li>
                  <a href="#contact" className="group flex items-center py-3">
                    <span className="nav-indicator mr-4 h-px w-8 bg-text transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-text group-hover:text-primary group-focus-visible:text-primary">Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            <li className="mr-5 shrink-0 text-xs">
              <a 
                href="" 
                className="block text-text hover:text-primary" 
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
                className="block text-text hover:text-primary" 
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
    </header>
  )
}

export default Header