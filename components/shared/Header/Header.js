"use client"
import { Input } from '@/components/ui/input'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  const {data:session} = useSession()

  return (
    <div className='flex justify-around my-3'>
      <div className='flex gap-5 items-center'>
        <Image src="/logo.png" width={50} height={50} alt='Logo' />
        <h2>Home</h2>
        <h2>Favorite</h2>
      </div>
      <div className='flex bg-gray-100 p-3 rounded-md gap-3 items-center max-w-[40%] w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <Input type="text" className="bg-transparent outline-none w-full" placeholder="Search" />
      </div>
      <div>
        {session?.user && <Image src={session?.user?.image} width={50} height={50} className='rounded-lg' alt='User Image'/>}
      </div>
    </div>
  )
}

export default Header