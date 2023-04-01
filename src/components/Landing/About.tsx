import React, { useState } from 'react'
import TimelineEntry from './About/TimelineEntry'

export default function About() {
    return (
        <div className="w-screen h-2/3 bg-slate-100 flex flex-row p-5 relative">
            <div className="w-2/3 h-full flex flex-col z-10">
                <TimelineEntry/>
                <TimelineEntry/>
                <TimelineEntry/> 
                <TimelineEntry/>
            </div>
            <div className="w-1/3 h-full flex justify-center items-center">
                <div className="w-2/3 h-3/4 bg-slate-500 rounded-2xl shadow-2xl"></div>
            </div>
            <div className="absolute top-0 left-0 h-[95%] w-full border-b-2 border-slate-300 -z-0 border-dashed"></div>
            <div className="absolute top-0 left-0 h-full w-[95%] border-r-2 border-slate-300 -z-0 border-dashed"></div>
            <div className="absolute top-0 left-0 h-full w-[71%] border-r-2 border-slate-300 -z-0 border-dashed"></div>
        </div>
    )
}