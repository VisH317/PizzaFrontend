import React from 'react'

export default function TimelineEntry() {
    return (
        <div className="w-full h-1/4 flex flex-row z-0">
            <div className="w-1/3 grid grid-cols-2 divide-x-8 divide-rose-700">
                <div className="">
                </div>
                <div className="flex flex-col justify-around">
                    <CircleIcon/>
                </div>
            </div>
            <div className="w-2/3 flex items-center text-2xl hover:-translate-y-2 duration-300">
                text regarding each part of the process: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Dapibus ultrices in iaculis nunc sed augue lacus 
            </div>
        </div>
    )
}

interface CircleProps {
    children: React.ReactNode
}

// helper component
function CircleIcon() {
    return (
        <div className="w-4/12 aspect-square rounded-[50%] bg-rose-700 -m-[18%] hover:scale-110 duration-300">
            {/* {props.children} */}
        </div>
    )
}