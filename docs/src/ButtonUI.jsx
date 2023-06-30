// By Bewton Maina
// Pulled existing Data from main branch
import React from "react"
// Assuming a state from the parent componenet or the componenet which is housing the gamegrid
//Ill gve an example of an array 'grid' which has values in an updated state where the game has ended and the reset button comes into play 
const [GameData,setGameData]=React.useState({
    grid:['x','o','x','x','o','x','x','o','x'],
    currentPlayer:'X',
    isWon:true
})
function ButtonUI(){
    function GameReset(){
        setGameData(prevGameData=>{
            return{
                ...prevGameData,
                grid:['','','','','','','','',''],
                currentPlayer:"Y",
                isWon:false
            }
        })
    }
    
return(
    <div className="relative">
        <button onClick={GameReset} className=" absolute top-52 left-52 w-52 h-32 text-white rounded-3xl cursor-pointer  bg-[#2b151c] border-white border-2 text-3xl" id="reset-button">RESET</button>
    </div>
)
}
export default ButtonUI