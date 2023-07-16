export default function ErrorPopup(props){
    return(
        <div
            className="min-h-[150vh] absolute bg-black w-[105%] bg-opacity-70 z-10 flex justify-center items-center flex-col gap-[20px] animate-drop-down"
        >
            <p
                className="text-[whitesmoke] font-[500] text-2xl text-center "
            >{props.errorText}</p>
            <button
                className="bg-[red] text-[whitesmoke] font-semibold p-[15px] rounded-xl shadow-button-popup transition-all hover:text-2xl duration-500 border-black active:border-[5px] hover:bg-green-500"
                onClick={props.handleClick}
            >Okay</button>
        </div>
    )
}