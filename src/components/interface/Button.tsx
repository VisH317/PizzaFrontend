import React from 'react'
import { useRouter } from 'next/router'

interface ButtonProps {
    children: React.ReactNode
    isWhite: boolean
}

export default function Button(props: ButtonProps) {
    return !props.isWhite ? (
        <button className='bg-transparent border-rose-700 text-rose-100 text-2xl border-2 p-4 flex justify-center items-center rounded-lg hover:bg-rose-700 hover:text-white duration-300 hover:-translate-y-1 hover:scale-105 flex flex-row gap-3'>{props.children}</button>
    ) : (
        <button className='bg-transparent color-white text-white hover:border-rose-700 h-2/3 text-2xl border-2 p-4 flex justify-center items-center rounded-lg hover:bg-rose-700 hover:text-white duration-300 hover:-translate-y-1 hover:scale-105 flex flex-row gap-3 flex justify-center items-center'>{props.children}</button>
    )
}