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
  const [tenzies, setTenzies] = React.useState(false)
  const [numOfRoll, setNumOfRoll] = React.useState(0)
  const [bestScore, setBestScore] =  React.useState(localStorage.getItem('bestScore'))

  const roll = () => {
    if (tenzies) {
      setTenzies(false)
      setAllDice(newDices)
      if (numOfRoll < bestScore) {
        localStorage.setItem('bestScore', `${numOfRoll}`)
        setBestScore(numOfRoll)
      }
    }
    else {
      setAllDice( oldDice => oldDice.map( dice => (
        dice.isHeld ? dice : {...dice, value: Math.floor(Math.random() * 6) +1}
        )))
        setNumOfRoll(old => (old +1))
      }
  }

  const flip = (id) => {
    setAllDice(oldDice => oldDice.map(dice => (
       dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
    )))
  }

  const reset = () => {
    setBestScore(99)
    localStorage.setItem('bestScore', "99")
  }

  React.useEffect(() => {
    const allHeld = allDice.every( die => die.isHeld)
    const diceValue = allDice[0].value
    const sameValue = allDice.every(die => die.value === diceValue)
    if (allHeld && sameValue) {
      setTenzies(true)
    }
  },[allDice])

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
      <TenzieRules
        numberOfRoll={numOfRoll}
        bestScore={bestScore}
      />
      <div className="dice-box">
        {Dices}
      </div>
      <div className="tenzie-btn">
        <button className="roll" onClick={roll} >{tenzies ? "Start new game" : "Roll the dices !"}</button>
        <button className="reset" onClick={reset}>Reset your best  score</button>
      </div>
    </div>
  )
}
