import React from "react"
import NameFooter from "./components/NameFooter"
import CreditFooter from "./components/CreditsFooter"

export default function App(){
    return(
        // THE WHOLE GAME, INCLUDING THE GRID AND THE SELECTION BOX IS INT THIS CONTAINER BELOW
        <main 
            className="min-h-[100vh] bg-[#59E391] dark:bg-[#5A1E76] relative font-['Fredoka'] transition-all duration-500"
        >
            {/* THE GAME NAME BOTTOM RIGHT FOOTER IS PLACED HERE */}
            <footer>
                {/* THIS IS THE NAME FOOTER */}
                <NameFooter/>
                {/* THE CREDITS FOOTER IS PLACED HERE */}
                <CreditFooter/>
            </footer>
        </main>
    )
}