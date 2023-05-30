import * as React from "react"
import "./TenzieRules.css"

export default function TenzieRules(props) {
  return (
    <div className="instruction">
    <h1 className="title">Tenzies</h1>
    <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
    <h4>Number of Roll: {props.numberOfRoll} {props.bestScore<99 && `| Your Best Score: ${props.bestScore}`}</h4>
  </div>
  )
}
