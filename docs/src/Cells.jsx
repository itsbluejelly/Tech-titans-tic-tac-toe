import React from 'react'

export default  function Cells () {
    const options = ["","","","","","","","",""]
    const [ game, setGame ] = React.useState(options)
    return (
    <div className="container mb-4 p-4 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-200 grid grid-flow-row grid-cols-3 w-[350px] h-[350px] gap-2 shadow-lg">
    {game.map((player, index) => (
    <div key={index} className="rounded-lg flex justify-center items-center  font-semibold text-3xl shadow-inner bg-gray-200">{player}</div>
    ))}
    </div>
    )
}