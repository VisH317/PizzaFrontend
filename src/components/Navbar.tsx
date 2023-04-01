import React from 'react'
import useScrollPosition from '~/hooks/useScrollPosition'
import Button from './interface/Button'

export default function Navbar() {

    const scroll = useScrollPosition()

    return (
        <div className={`w-screen fixed h-16 flex flex-row justify-center gap-10 ${scroll>10 ? "bg-rose-800" : "bg-transparent"} duration-300`}>
            <div className="h-full w-1/3">
                <div className='text-2xl rounded-b-xl font-bold h-full flex text-center items-center px-5 duration-150 hover:cursor-pointer text-white relative w-auto'>PIZZA SHOP</div>
            </div>
            <div className="h-full w-1/ flex flex-row gap-10 items-center">
                <div className={` ${scroll>10 ? "" : "rounded-b-xl"} px-5 hover:bg-slate-200 hover:bg-opacity-40 h-full flex items-center text-2xl duration-150 hover:cursor-pointer text-white`}>About</div>
                <div className={` ${scroll>10 ? "" : "rounded-b-xl"} sm:text-md px-5 hover:bg-slate-200 hover:bg-opacity-40 h-full text-2xl flex items-center duration-150 hover:cursor-pointer text-white`}>Menu</div>
                {/* <div className={`lg:text-lg md:text-lg sm:text-md ${scroll>10 ? "" : "rounded-b-xl"} md:flex sm:hidden px-5 hover:bg-slate-200 hover:bg-opacity-40 h-full flex items-center duration-150 hover:cursor-pointer text-white`}>Projects</div> */}
                <Button isWhite>Login</Button>
            </div>
        </div>
    )
}