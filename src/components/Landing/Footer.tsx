import React, { useState } from 'react'

export default function Footer() {
    return (
        <div className="w-screen h-1/6 bg-slate-300 flex justify-center items-center">
            <div className="grid grid-cols-2 h-1/2 divide-x divide-slate-500">
                <div className="h-full mx-8 flex items-center"><p>Contact:</p></div>
                <div><p className=" h-full mx-8 flex items-center">HOLA</p></div>
            </div>
        </div>
    )
}