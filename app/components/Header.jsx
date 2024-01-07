import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between py-5 '>
        <Link href={'/'} className='capitalize font-bold text-2xl'>Past <span className='text-tertiary-color'>Questions</span></Link>
        <div>
            <Link href={'/login'} className='bg-secondary-color py-2 px-8 shadow'>login</Link>
        </div>
    </div>
  )
}

export default Header