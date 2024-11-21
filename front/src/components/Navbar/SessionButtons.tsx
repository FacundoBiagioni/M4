"use client"
import { IUserSession } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const SessionButtons: React.FC = () => {
    const [userSession, setUserSession] = useState<IUserSession| null>(null);
    const pathname = usePathname();
    
    useEffect(() => {
      const dataCookie = Cookies.get("userData");
      if (dataCookie) {
          const parsedData: IUserSession = JSON.parse(dataCookie);
          setUserSession(parsedData);
      } else {
        setUserSession(null);
      }
    }, [pathname]);
    return (
        <div className="flex items-center justify-end gap-3">
            {!userSession ? (
                <>
                <Link className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                    href="/register">Register</Link>
                <Link className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    href="/login">Login</Link>
                </>
            ) : (
                <>
                <Link className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                    href="/dashboard">Profile</Link>
                <Link className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    href="/cart">My Cart</Link>
                </>
            )}
        </div>
    )
}

export default SessionButtons