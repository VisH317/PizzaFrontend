import React, { useState } from 'react'
import bg from "/pizza_image.jpg"
import Button from '../interface/Button'

export default function Landing() {
    return (
        <div className={`w-screen h-3/4 flex flex-col justify-center items-center bg-pizza bg-cover bg-gray-600 bg-blend-overlay gap-5`}>
            <p className="text-8xl text-white">Pizza Shop</p>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-slate-600"/>
            <p className="text-lg text-slate-100 w-1/3 text-center">A simple pizza shop with very epic pizza overall and great service so please buy our pizza yay i love pizza it tastes amazing</p>
            <Button isWhite={false}>
                See the menu
                <span className="fa fa-caret-right text-2xl"/>
            </Button>
        </div>
    )
}