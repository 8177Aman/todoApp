import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-slate-900 text-white py-2 sticky top-0'>
            <div className="logo">
                <div className="font-bold text-xl mx-8">Karma</div>
            </div>
            <ul className="flex gap-8 mx-9">
                <li className='cursor-pointer transition-transform transform hover:scale-105'>The Productivity Tool</li>
            </ul>
        </nav >
    )
}
export default Navbar
