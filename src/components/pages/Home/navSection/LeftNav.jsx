import React from 'react'
import { Link } from 'react-router-dom'

const LeftNav = () => {
  return (
      <Link to="/">
          <div className="p-0.5 border-4 flex ">
            <h1 className="font-extrabold bg-black text-white px-2">AHSAN</h1>
            <h1 className="font-extrabold px-2">STORE</h1>
          </div>
        </Link>
  )
}

export default LeftNav
