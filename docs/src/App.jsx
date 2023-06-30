import React from "react"
import NameFooter from "./components/NameFooter"
import CreditFooter from "./components/CreditsFooter"

export default function App(){
    return(
        // THE WHOLE GAME IS IN THIS CONTAINER BELOW
        <main 
            className="min-h-[100vh] bg-[#59E391] dark:bg-[#5A1E76] font-['Fredoka'] transition-all duration-500 flex justify-center items-center "
        >
            {/* THE GAME CONTAINER WHICH HOLDS THE GRID OF CELLS AND THE SELECTION BOX IS PLACED HERE */}
            <div className="dark:bg-[#2B0040] h-[95vh] rounded-[50px] w-[95%] relative bg-[limegreen] flex justify-center items-center flex-col">
                {/* THE CONTAINER FOR GRID IS CONTAINED HERE */}
                <div className="grid grid-flow-row grid-cols-3 gap-[10px]">
                    <div 
                        className="flex justify-center items-center w-[100px] h-[100px] dark:bg-[#43115B] rounded-[10px] dark:text-[#DCBF3F] bg-[#59E391] text-cyan-700 text-xl font-[700]">1
                    </div>
                    <div 
                        className="flex justify-center items-center w-[100px] h-[100px] dark:bg-[#43115B] rounded-[10px] dark:text-[#DCBF3F] bg-[#59E391] text-cyan-700 text-xl font-[700]">1
                    </div>
                    <div 
                        className="flex justify-center items-center w-[100px] h-[100px] dark:bg-[#43115B] rounded-[10px] dark:text-[#DCBF3F] bg-[#59E391] text-cyan-700 text-xl font-[700]">1
                    </div>
                    <div 
                        className="flex justify-center items-center w-[100px] h-[100px] dark:bg-[#43115B] rounded-[10px] dark:text-[#DCBF3F] bg-[#59E391] text-cyan-700 text-xl font-[700]">1
                    </div>
                    <div 
                        className="flex justify-center items-center w-[100px] h-[100px] dark:bg-[#43115B] rounded-[10px] dark:text-[#DCBF3F] bg-[#59E391] text-cyan-700 text-xl font-[700]">1
                    </div>
                    <div 
                        className="flex justify-center items-center w-[100px] h-[100px] dark:bg-[#43115B] rounded-[10px] dark:text-[#DCBF3F] bg-[#59E391] text-cyan-700 text-xl font-[700]">1
                    </div>
                    <div 
                        className="flex justify-center items-center w-[100px] h-[100px] dark:bg-[#43115B] rounded-[10px] dark:text-[#DCBF3F] bg-[#59E391] text-cyan-700 text-xl font-[700]">1
                    </div>
                    <div 
                        className="flex justify-center items-center w-[100px] h-[100px] dark:bg-[#43115B] rounded-[10px] dark:text-[#DCBF3F] bg-[#59E391] text-cyan-700 text-xl font-[700]">1
                    </div>
                    <div 
                        className="flex justify-center items-center w-[100px] h-[100px] dark:bg-[#43115B] rounded-[10px] dark:text-[#DCBF3F] bg-[#59E391] text-cyan-700 text-xl font-[700]">1
                    </div>
                    
                </div>
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