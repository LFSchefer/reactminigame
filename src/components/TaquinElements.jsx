import * as React from "react"
import "./TaquinElements.css"

export default function TaquinElements(props) {
  return (
    <>
      <div
      className="num-btn"
      id={props.id}
      onClick={props.select}
      >
        {props.value}
      </div>
    </>
  )
}
