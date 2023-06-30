export default function GameCell(props){
    return(
        <div 
            className="flex justify-center items-center w-[100px] h-[100px] dark:bg-[#43115B] rounded-[10px] dark:text-[#DCBF3F] bg-[#59E391] text-cyan-700 text-6xl font-[700] transition-all duration-500 hover:shadow-popup"
            key={props.id}
            onClick={props.handleClick}
        >{props.innerCellText}
        </div>
    )
}