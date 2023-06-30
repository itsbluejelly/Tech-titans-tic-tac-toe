export default function ProgressBar(props){
    return(
        <div
            className="bg-white mb-[20px] w-[300px] rounded-[20px] text-sm dark:bg-slate-600"
        >
            <div 
                className="flex justify-around transition-all duration-500 text-cyan-700 dark:text-[#DCBF3F]"
            >
                <p>Player X</p>
                <p>Draw</p>
                <p>Player O</p>
            </div>

            <div
                className="flex transition-all duration-500"
                style={props.styles}
            >
                <div 
                    className="dark:bg-[#5A1E76] w-[100px] h-[10px] rounded-lg bg-[#59E391]"
                ></div>
            </div>
        </div>
    )
}