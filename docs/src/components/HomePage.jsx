import React from "react"

export default function HomePage(props){
    return (
        <div
            className="transition-all duration-500">
            <p
                className="font-[500] text-3xl dark:text-white"
            >CHOOSE YOUR PLAYER
            </p>
            
            <div className="flex justify-around">
                <p 
                    className="font-[600] text-6xl dark:text-[#72CFF9] text-[#ffff00f5] hover:text-7xl transition-all duration-500 hover:shadow-md cursor-pointer"
                    onClick={props.choosePlayerX}
                    >X
                </p>
                <p
                    className="font-[600] text-6xl dark:text-[#DCBF3F] text-cyan-600 hover:text-7xl transition-all duration-500 hover:shadow-md cursor-pointer"
                    onClick={props.choosePlayerO}
                    >O
                </p>
            </div>
        </div>
    )
}