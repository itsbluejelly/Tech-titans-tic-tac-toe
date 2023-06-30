import React from "react"

export default function Home() {
    return (
        <>
            
        <div div class=" bg-white p-4 text-lg font-semibold rounded-2xl selection-box">
            <h1 className="font-bold text-center bg-black text-white rounded-2xl">Tic-Tac-Toe</h1>
            <h2 className="font-bold"> Choose the Icon you shall use</h2>
            
            
            <div className="flex flex-col bg-gradient-to-br from-orange-400 to-orange-200 gap-2">
                
                <div className="flex justify-around">
                    
                    <button className="playerX bg-gradient-to-br from-orange-400 to-orange-200 mt-2 rounded-lg cursor-pointer border-white border-2" id="player-x-button">PLAYER X</button>
                    <button className="playerO  bg-gradient-to-br from-orange-400 to-orange-200 mt-2 rounded-lg cursor-pointer border-white border-2" id="player-o-button">PLAYER O</button>
                </div>
                
                <button className=" bg-gradient-to-br from-orange-400 to-orange-200 mt-2 rounded-lg cursor-pointer border-white border-2 w-[50%] mx-auto mb-3" id="play-game-button">PLAY GAME</button>
            </div>
        </div>

        </>
    
    )
}