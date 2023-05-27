import * as React from "react"
import "./Tenzies.css"
import TenzieRules from "./TenzieRules"
import Dice from "./Dice"

export default function Tenzies(props) {

  const newDices = () => {
    const diceArray = []
    for (var i=0; i <10 ; i++) {
      diceArray.push({
        value: Math.floor(Math.random() * 6 ) + 1,
        isHeld: false,
        id: i
      })
    }
    return diceArray
  }

  const [allDice, setAllDice] = React.useState(newDices)

  const flip = (id) => {
    setAllDice(oldDice => oldDice.map(dice => (
       dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
    )))
  }

  const Dices = allDice.map((dice) => (
    <Dice
    value={dice.value}
    key={dice.id}
    isHeld={dice.isHeld}
    hold={() => flip(dice.id)}
    />
  ))

  return (
    <div className="tenzies">
      <TenzieRules/>
      <div className="dice-box">
        {Dices}
      </div>
      <button className="roll" >Roll the dices !</button>
    </div>
  )
}
