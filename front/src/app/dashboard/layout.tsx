import Link from "next/link";
import React from "react";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="">
            <nav>
                <Link href="/dashboard">Perfil </Link>
                <Link href="/dashboard/orders">Ordenes </Link>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}