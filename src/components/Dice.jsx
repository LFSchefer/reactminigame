import * as React from "react"
import "./Dice.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'


export default function Dice(props) {

  let number = ""
  switch (props.value) {
    case 1:
      number = faDiceOne
      break;
    case 2:
      number = faDiceTwo
      break;
    case 3:
      number = faDiceThree
      break;
    case 4:
      number = faDiceFour
      break;
    case 5:
      number = faDiceFive
      break;
    case 6:
      number = faDiceSix
      break;
    default:
      break;
  }

  const dice = <div
                  className="btn"
                  key={props.index}
                  onClick={props.hold}
                >
                  <FontAwesomeIcon
                    icon={number}
                    size="2x"
                    color={props.isHeld ? "green" : "gray"}
                    className="icon"
                  />
                </div>

  return(
  <div className="dices">
    {dice}
  </div>
  )
}
