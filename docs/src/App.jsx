import React from "react"
import NameFooter from "./components/NameFooter"
import CreditFooter from "./components/CreditsFooter"
import Button from "./components/Button"
import ProgressBar from "./components/ProgressBar"
import HomePage from "./components/HomePage"
import PopupText from "./components/PopupText"
import GameCell from "./components/GameCell"

export default function App(){
    return(
        // THE WHOLE GAME IS IN THIS CONTAINER BELOW
        <main 
            className="min-h-[100vh] bg-[#59E391] dark:bg-[#5A1E76] font-['Fredoka'] transition-all duration-500 flex justify-center items-center "
        >
            {/* THE GAME CONTAINER WHICH HOLDS THE GRID OF CELLS AND THE SELECTION BOX IS PLACED HERE */}
            <div className="dark:bg-[#2B0040] h-[95vh] rounded-[50px] w-[95%] relative bg-[limegreen] flex justify-center items-center flex-col">
                {/* THE DIV SHOWING THE CURRENT PLAYER */}
                {/* <ProgressBar/> */}

                {/* THE SELECTION MENU IS CONTAINED HERE */}
                <HomePage/>  

                {/* THE CONTAINER FOR GRID IS CONTAINED HERE */}
                {/* <div className="grid grid-flow-row grid-cols-3 gap-[10px] transition-all duration-500">
                    <GameCell/>
                </div> */}

                {/* THE BUTTON IS LOCATED HERE TO START OR RESET GAME*/}
                <Button/>

                {/* THE DISPLAY OF A WINNER SHOWN, OR THE PLAYER */}
                {/* <PopupText/> */}

                {/* THE GAME NAME BOTTOM RIGHT FOOTER IS PLACED HERE */}
                <footer>
                    {/* THIS IS THE NAME FOOTER */}
                    <NameFooter/>
                    {/* THE CREDITS FOOTER IS PLACED HERE */}
                    <CreditFooter/>
                </footer>
            </div>
        </main>
    )
}