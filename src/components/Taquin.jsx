import * as React from 'react'
import "./Taquin.css"
import TaquinElements from './TaquinElements'

export default function Taquin(props) {

  const handleClick = (event) => {
    console.log('click')
    console.log(event.id)
  }


  return (
    <div className="taquin">
      <h1>Taquin</h1>
      <div className="taq-container">
        <TaquinElements
        value={1}
        id="l1c1"
        select={(event) => handleClick(event.target)}
        />
        <TaquinElements
        value={2}
        id="l1c2"
        />
        <TaquinElements
        value={3}
        id="l1c3"
        />
        <TaquinElements
        value={4}
        id="l2c1"
        />
        <TaquinElements
        value={5}
        id="l2c2"
        />
        <TaquinElements
        value={6}
        id="l2c3"
        />
        <TaquinElements
        value={7}
        id="l3c1"
        />
        <TaquinElements
        value={8}
        id="l3c2"
        />
        <TaquinElements
        value={9}
        id="l3c3"
        />
      </div>
    </div>
  )
}
