import React from 'react'
import LogoIcon from '../../assets/logo.png'
export default function Header() {
  return (
    <div className="px-5 py-5 border-b shadow-md border-gray-500 text-white">
        <img src={LogoIcon} className="h-12 w-48" />
    </div>
  )
}
