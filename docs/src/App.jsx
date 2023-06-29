import React from 'react'

const options = ["","","","","","","","",""]

function App() {
  const [ game, setGame ] = React.useState(options)
  return (
       <div className="container mb-4 p-4 rounded-2xl bg-white grid grid-flow-row grid-cols-3 w-[300px] h-[300px] gap-2">
         {game.map((player, index) => (
          <div key={index} className="border-black border-[2px] rounded-lg flex justify-center items-center bg-blue-300 font-semibold text-3xl">{player}</div>
         ))}
       </div> 
  )
}

export default App
