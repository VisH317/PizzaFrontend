import { useAtom } from 'jotai'
import React from 'react'
import modal from '~/lib/modal'

interface BackdropProps {
    children: React.ReactNode
    isDark: boolean
}

export default function Backdrop(props: BackdropProps) {

    const [m, setm] = useAtom(modal)

    return <div className={`group z-10 fixed top-0 ${!m ? "hidden" : "block"} w-screen h-screen ${props.isDark ? "bg-gray-900" : "bg-gray-800"} ${props.isDark ? "bg-opacity-75" : "bg-opacity-50"} flex justify-center items-center`} onClick={() => setm(false)}>{props.children}</div>
}