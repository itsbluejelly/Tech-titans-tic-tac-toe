export default function HomePage(){
    return (
        <div
            className="transition-all duration-500">
            <p
                className="font-[500] text-3xl"
            >CHOOSE YOUR PLAYER
            </p>
            
            <div className="flex justify-around">
                <p 
                    className="font-[600] text-6xl dark:text-[#72CFF9] text-[#ffff00f5] hover:text-7xl transition-all duration-500 hover:shadow-md cursor-pointer"
                    >X
                </p>
                <p
                    className="font-[600] text-6xl dark:text-[#DCBF3F] text-cyan-600 hover:text-7xl transition-all duration-500 hover:shadow-md cursor-pointer"
                    >O
                </p>
            </div>
        </div>
    )
}