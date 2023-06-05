import * as React from "react"
import "./Rock.css"
import Confetti from 'react-confetti'


export default function Rock(props) {

  const pool = ["Rock", "Paper", "Cisor"]

  const [player, setPlayer] = React.useState()
  const [cpu, setCpu] = React.useState()
  const [gameScore, setGameScore] = React.useState({playerScore: 0, cpuScore: 0, draw: false})
  const [gameFinish, setGameFinish] = React.useState({finish: false})

  const tirage = (x) => {
    const cpuPlay = Math.floor(Math.random() * pool.length)
    if ( x === "Rock") {
      setPlayer("Rock")
      setCpu(pool[cpuPlay])
      switch (pool[cpuPlay]) {
        case "Rock":
          setGameScore(prev => {
            return {...prev, draw: true}
          })
          break;
        case "Paper":
          setGameScore(prev => {
            return {...prev, cpuScore: prev.cpuScore + 1, round: false, draw: false}
          })
          break;
        case "Cisor":
          setGameScore(prev => {
            return {...prev, playerScore: prev.playerScore + 1,round: true, draw: false}
          })
          break;
        default:
          break;
      }
    }
    if ( x === "Paper") {
      setPlayer("Paper")
      setCpu(pool[cpuPlay])
      switch (pool[cpuPlay]) {
        case "Rock":
          setGameScore(prev => {
            return {...prev, playerScore: prev.playerScore + 1, round: true, draw: false}
          })
          break;
          case "Paper":
            setGameScore(prev => {
              return {...prev, draw: true}
            })
            break;
            case "Cisor":
              setGameScore(prev => {
            return {...prev, cpuScore: prev.cpuScore + 1, round: false, draw: false}
          })
          break;
        default:
          break;
      }
    }
    if ( x === "Cisor") {
      setPlayer("Cisor")
      setCpu(pool[cpuPlay])
      switch (pool[cpuPlay]) {
        case "Rock":
          setGameScore(prev => {
            return {...prev, cpuScore: prev.cpuScore + 1, round: false, draw: false}
          })
          break;
          case "Paper":
            setGameScore(prev => {
              return {...prev, playerScore: prev.playerScore + 1, round: true, draw: false}
            })
            break;
            case "Cisor":
              setGameScore(prev => {
            return {...prev, draw: true}
          })
          break;
        default:
          break;
      }
    }
  }

  React.useEffect(() => {
    if (gameScore.playerScore >= 5) {
      setGameFinish( prev => {
       return {...prev, finish: true, win: true}
      })
    }
    if (gameScore.cpuScore >= 5) {
      setGameFinish( prev => {
        return {...prev, finish: true, win: false}
       })
    }
  },[gameScore])

  const restScore =() => {
    setGameScore({playerScore: 0, cpuScore: 0, draw: false})
    setGameFinish(false)
  }

  const roundText = gameScore.round ? "won-text" : "loose-text"

  const round = gameScore.draw ? <div className="draw-text">Draw</div> : <div className={roundText}>You {gameScore.round ? "won" : "loose"}</div>

  const displayScore = gameScore.playerScore === 0 && gameScore.cpuScore === 0 ?
   <div></div> :
   <div>
    <div className="player-cpu">
      <p>You:</p> <div className="player-cpu-disp">{player}</div> <p> | Cpu: </p> <div className="player-cpu-disp">{cpu}</div>
    </div>
    {round}
    </div>

  return (
    <main>
      {gameFinish.win && <Confetti/>}
      {gameFinish.finish ?
      <div className="rock-rules">
        <h1>Rock | Paper | Cisor</h1>
        <h1>Game Finish you {gameFinish.win ? "Win" : "Loose"} </h1>
      </div>:

      <><div className="rock-rules">
        <h1>Rock | Paper | Cisor</h1>
        <p>Please choose to start playing</p>
        <p>First to 5 win a game</p>
        <p>Round: <strong>You {gameScore.playerScore} | Cpu {gameScore.cpuScore}</strong></p>
      </div><div className="result">
          {displayScore}
        </div></>
      }
      <div className="rock-game">
        <div className="rock-btn">
          <button onClick={() => tirage("Rock")}>Rock</button>
          <button onClick={() => tirage("Paper")}>Paper</button>
          <button onClick={() => tirage("Cisor")}>Cisor</button>
        </div>
        <button className="reset-btn" onClick={restScore}>{gameFinish.finish ? "Play again" : "Reset"}</button>
      </div>
    </main>
  )
}
