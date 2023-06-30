export default function PopupText(props){
    return(
        <div
            className="dark:bg-[#48D2FE] mt-[20px] rounded-[10px] p-[10px] w-[200px] mx-auto text-center font-[500] text-2xl transition-all duration-500 hover:shadow-popup hover:dark:shadow-cyan-500 bg-yellow-500 hover:shadow-yellow-400"
        >{props.innerPopupText}
        </div>
    )
}