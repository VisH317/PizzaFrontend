import React from 'react'
import { useRouter } from 'next/router'

interface ButtonProps {
    children: React.ReactNode
    isWhite: boolean,
    isRed: boolean,
    click: () => void
}

export default function Button(props: ButtonProps) {
    return !props.isWhite ? (
        <button onClick={props.click} className={`bg-transparent border-rose-700 ${!props.isRed ? "text-rose-100" : "text-rose-800"} text-2xl border-2 p-4 flex justify-center items-center rounded-lg hover:bg-rose-700 hover:text-white duration-300 hover:-translate-y-1 hover:scale-105 flex flex-row gap-3`}>{props.children}</button>
    ) : (
        <button onClick={props.click} className={`bg-transparent color-white text-white hover:border-rose-700 h-2/3 text-2xl border-2 p-4 flex justify-center items-center rounded-lg hover:bg-rose-700 hover:text-white duration-300 hover:-translate-y-1 hover:scale-105 flex flex-row gap-3 flex justify-center items-center`}>{props.children}</button>
    )
}