import React from "react"
import NameFooter from "./components/NameFooter"
import CreditFooter from "./components/CreditsFooter"
import Button from "./components/Button"
import ProgressBar from "./components/ProgressBar"
import HomePage from "./components/HomePage"
import PopupText from "./components/PopupText"
import GameCell from "./components/GameCell"
import {nanoid} from 'nanoid'

export default function App(){
    // CRETING A VARIABLE BOOLEAN TO CHECK IF GAME HAS BEGAN
    const [hasStarted, setHasStarted] = React.useState(false)
    // CREATING A VARIABLE BOOLEAN TO DETERMINE WINNER
    const [wonGame, setWonGame] = React.useState(false)
    // CREATING A VARIABLE BOOLEAN TO DETERMINE CURRENT PLAYER
    const [currentPlayer, setCurrentPlayer] = React.useState('')
    // CREATING A VARIABLE TO SET POPUP TEXT
    const [innerPopupText, setInnerPopupText] = React.useState('')
    // CREATING A VARIABLE TO SET BUTTON TEXT
    const [innerButtonText, setInnerButtonText] = React.useState('Start Game')
    // CREATING A LIST OF OBJECT WITH INFO ABOUT EACH GAME CELL
    const [gameCellInfoArray, setGameCellInfoArray] = React.useState(generateGameCellInfoArray())
    // CREATING A LIST OF OPTIONS TO HOLD THE INDEX OF GAME CELLS WHILE CHECKING WINNING CONDITIONS
    const [options, setOptions] = React.useState(['','','','','','','','',''])
    // CREATING A CONSTANT OF WINNING CONDITIONS
    const winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    // CREATING A CONST STYLES OBJECT
    const styles={
        gamePlay:{
            progressBar:{
                playerX:{
                    justifyContent:'flex-start'
                    },
                playerO:{
                    justifyContent:'flex-end'
                    },
                draw:{
                    justifyContent:'center'
                    },
            }
        }
    }
    
    // FUNCTION TO DETERMINE PLAYER X
    function choosePlayerX(){
        setCurrentPlayer('X')
        setInnerPopupText('You Are Player X')
    }
    // FUNCTION TO DETERMINE PLAYER O
    function choosePlayerO(){
        setCurrentPlayer('O')
        setInnerPopupText('You Are Player O')
    }
    // FUNCTION TO DETERMINE START OF THE GAME
    function startGame(){
        setHasStarted(true)
        setInnerButtonText("Restart Game")
        setInnerPopupText('')
    }
    // FUNCTION TO END GAME
    function endGame(){
        setInnerButtonText("Start Game")
        setHasStarted(false)
        setOptions(['','','','','','','','',''])
        setWonGame(true)
        setGameCellInfoArray(generateGameCellInfoArray())
        setInnerPopupText('')
        setCurrentPlayer('')
    }

    // FUNCTION TO CHANGE PLAYER
    function changePlayer(){
        currentPlayer ==='X' ? 
            setCurrentPlayer('O'):
            setCurrentPlayer('X')
    }
    // FUNCTION TO GENERATE A LIST OF INFOS
    function generateGameCellInfoArray(){
        const newArray = []

        let i = 0;
        while(i < 9){
            newArray.push({
                id:nanoid(),
                innerCellText:'',
                cellIndex:i
            })
            i ++
        }

        return newArray
    }
    // A FUNCTION TO UPDATE THE POSITION OF A CELL IN THE OPTIONS ARRAY
    function updateCell(index, id) {
        if(options[index] === '' && hasStarted){
            setOptions(prevOptions => {
                const newArray = [...prevOptions];
                newArray[index] = currentPlayer;
                return newArray;
            });
            
            renameCell(id)
            checkWinner() 
        }else{
            return
        }
    }

    // FUNCTION TO RENAME A CELL WHEN CLICKED
    function renameCell(id) {
        setGameCellInfoArray(prevArray => {
            return prevArray.map(info => {
                if (info.id === id) {
                return {
                    ...info,
                    innerCellText: currentPlayer
                }
                }else{
                return info;
                }
            });
        });
    }
      

    // A VARIABLE CONTAINING A FUNCTION TO GENERATE A LIST OF GAME CELLS
    const gameCells = gameCellInfoArray.map(info => (
        <GameCell
            key={info.id}
            id={info.id}
            innerCellText={info.innerCellText}
            cellIndex={info.cellIndex}
            handleClick={() => updateCell(info.cellIndex, info.id)}
        />
    ))
    
    // FUNCTION TO CHECK WINNER EVERYTIME THE CELL IS CLICKED
    function checkWinner(){
        for(let i = 0; i<winningConditions.length; i++){
            const winningCondition = winningConditions[i]
            const cellA = options[winningCondition[0]]
            const cellB = options[winningCondition[1]]
            const cellC = options[winningCondition[2]]

            if(cellA === '' || cellB === '' || cellC === ''){
                continue
            }

            if(cellA === cellB && cellB === cellC){
                setWonGame(true)
                break
            } 
        }
            
        if(wonGame){
            setInnerPopupText(`${currentPlayer} Won`)
        }else if(!options.includes('')){
            setWonGame(true)
            setInnerPopupText("It's a draw")
        }else{
            changePlayer()
        }
    }
    
    return(
        // THE WHOLE GAME IS IN THIS CONTAINER BELOW
        <main 
            className="min-h-[100vh] bg-[#59E391] dark:bg-[#5A1E76] font-['Fredoka'] transition-all duration-500 flex justify-center items-center "
        >
            {/* THE GAME CONTAINER WHICH HOLDS THE GRID OF CELLS AND THE SELECTION BOX IS PLACED HERE */}
            <div className="dark:bg-[#2B0040] h-[95vh] rounded-[50px] w-[95%] relative bg-[limegreen] flex justify-center items-center flex-col">
                {/* THE DIV SHOWING THE CURRENT PLAYER */}
                {hasStarted && <ProgressBar
                    styles={currentPlayer ?
                        currentPlayer === 'X' ?
                            styles.gamePlay.progressBar.playerX :
                            styles.gamePlay.progressBar.playerO
                        :
                        styles.gamePlay.progressBar.draw}
                />}

                {/* THE SELECTION MENU IS CONTAINED HERE */}
                {!hasStarted && <HomePage
                    choosePlayerX={choosePlayerX}
                    choosePlayerO={choosePlayerO}
                />}  

                {/* THE CONTAINER FOR GRID IS CONTAINED HERE */}
                {hasStarted && <div className="grid grid-flow-row grid-cols-3 gap-[10px] transition-all duration-500">
                    {gameCells}
                </div>}

                {/* THE BUTTON IS LOCATED HERE TO START OR RESET GAME*/}
                <Button
                    handleClick={hasStarted ? endGame : startGame}
                    innerButtonText={innerButtonText}
                />

                {/* THE DISPLAY OF A WINNER SHOWN, OR THE PLAYER */}
                {innerPopupText && <PopupText
                    innerPopupText = {innerPopupText}
                />}

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