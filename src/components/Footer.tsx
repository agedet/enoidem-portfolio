import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer id='footer' className='max-w-md pb-16 text-sm text-slate-300 sm:pb-0'>
      <span>
        Copyright © 2025 <Link href='/'>Professor Enoidem Usoro</Link>. All Rights reserved
      </span> {' '} | {' '}

      <span>
        Powered by {' '}
        <Link href='' className='text-primary'>Culmerin Inc</Link>
      </span>
    </footer>
  )
}

export default Footer