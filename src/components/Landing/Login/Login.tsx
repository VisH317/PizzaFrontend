import React from 'react'
import Button from '~/components/interface/Button'
import Modal from '~/components/interface/Modal'
import Link from 'next/link'

export default function Login() {
    return (
        <Modal>
            <div className='container w-full h-full p-20 flex flex-col gap-10 relative overflow-hidden'>
                <div className='absolute top-0 left-0 w-full h-[10%] flex gap-around bg-gradient-to-r from-rose-700 to-rose-800'>
                    <div className="flex justify-center items-center w-1/2">
                        <div className="h-2/3 w-[95%] flex justify-center items-center rounded-lg bg-slate-100 bg-opacity-0 hover:bg-opacity-50 duration-300 hover:-translate-y-1 cursor-pointer">
                            <p className="text-3xl text-white font-light">Login</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-1/2">
                        <Link href="/signup" className="w-full h-full flex justify-center items-center">
                            <div className="h-2/3 w-[95%] flex justify-center items-center rounded-lg bg-slate-100 bg-opacity-0 hover:bg-opacity-50 duration-300 hover:-translate-y-1 cursor-pointer">
                                <p className="text-3xl text-white font-light">Register</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <p className="text-6xl font-semibold mt-[10%] text-center">Login</p>
                <input type="text" className="duration-300 rounded-lg w-full h-16" placeholder='Username: '/>
                <input type="password" className="duration-300 rounded-lg w-full h-16" placeholder="Password:"/>
                <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-slate-600"/>
                <Button isRed isWhite={false} click={() => console.log("poggers")}>Login</Button>
            </div>
        </Modal>
    )
}