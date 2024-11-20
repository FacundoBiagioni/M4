// deberia implemetar siempre que pueda el <link>
"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { IUserSession } from '@/types'
import Cookies from 'js-cookie'


const Navbar: React.FC = () => {
  const [userSession, setUserSession] = useState<IUserSession| null>(null);
  const pathname = usePathname();
  useEffect(() => {
    const dataCookie = Cookies.get("userData");
    if (dataCookie) {
        const parsedData: IUserSession = JSON.parse(dataCookie);
        setUserSession(parsedData);
    }
  }, [pathname])

  return (
    <header
    className="fixed top-0 z-50 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-2 md:rounded-3xl lg:max-w-screen-lg">
    <div className="px-4">
        <div className="flex items-center justify-between">
        <div className="flex shrink-0">
                <Link aria-current="page" className="flex items-center" href="/">
                    <img className="h-7 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple logo"/>
                    <p className="sr-only">Website Title</p>
                </Link>
            </div>
            
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                <Link aria-current="page"
                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="/navbar/iphone">IPhone</Link>
                <Link className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="/navbar/mac">Mac</Link>
                <Link className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="/navbar/ipad">IPad</Link>
                <Link className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="/navbar/watch">Watch</Link>
                <Link className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="/navbar/airpods">AirPods</Link>
            </div>

            {!userSession ? (
                <div className="flex items-center justify-end gap-3">
                    <Link className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                        href="/register">Register</Link>
                    <Link className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        href="/login">Login</Link>
                </div>
            ) : (
                <div className="flex items-center justify-end gap-3">
                    <Link className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                        href="/dashboard">Profile</Link>
                    <Link className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        href="/cart">My Cart</Link>
                </div>
            )} 
        </div>
    </div>
</header>
  )
}

export default Navbar
