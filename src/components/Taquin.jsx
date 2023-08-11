import * as React from 'react'
import "./Taquin.css"

export default function Taquin(props) {
  return (
    <div className="taquin">
      <h1>Taquin</h1>
      <div className="taq-container">
          <div className="num-btn">1</div>
          <div className="num-btn">2</div>
          <div className="num-btn">3</div>
          <div className="num-btn">4</div>
          <div className="num-btn">5</div>
          <div className="num-btn">6</div>
          <div className="num-btn">7</div>
          <div className="num-btn">8</div>
          <div className="num-btn">9</div>
      </div>
    </div>
  )
}
