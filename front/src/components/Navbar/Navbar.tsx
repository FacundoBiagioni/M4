import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Logo</Link>

      <input />

      <Link href="/dashboard">Perfil</Link>
      <Link href="/cart">Carrito</Link>
    </nav>
  )
}

export default Navbar
