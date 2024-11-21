// deberia implemetar siempre que pueda el <link>
import Link from 'next/link'
import SessionButtons from './SessionButtons'


const Navbar: React.FC = () => {

    //? sacar el fixed del header y corregir la distancia
  return (
    <header
    className=" top-0 z-50 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-2 md:rounded-3xl lg:max-w-screen-lg">
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
            <SessionButtons/>
        </div>
    </div>
</header>
  )
}

export default Navbar
