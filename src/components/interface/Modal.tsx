import React from 'react'
import Backdrop from './Backdrop'
import modal from '~/lib/modal'
import { useAtom } from 'jotai'

interface ModalProps {
    children: React.ReactNode
}

export default function Modal(props: ModalProps) {

    const [m, setm] = useAtom(modal)

    return (
        <Backdrop isDark={false}>
            <div className={`w-1/4 h-1/2 bg-white z-50 shadow-2xl duration-300 scale-0 group-hover:scale-100 rounded-2xl overflow-hidden`} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </Backdrop>
    )
}