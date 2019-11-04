//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect, useRef } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionScore, setLionScore] = React.useState(0)
  const [tigersScore, setTigersScore] = useState(0)
  const [time, setTime] = useState(0);
  const secondsPassed = useRef(0);
  const minutesPassed = useRef(0);

  useEffect(() => {
      setTimeout(() => {
        secondsPassed.current = secondsPassed.current + 1;
        if (secondsPassed.current === 60) {
          minutesPassed.current = minutesPassed.current + 1;
          secondsPassed.current = 0;
        }
        setTime(secondsPassed.current)
    }, 1000)
  })
    
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionScore}</div>
          </div>
          <div className='timer'>{minutesPassed.current}{' '}:{' '}{time}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setLionScore(lionScore + 6)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setLionScore(lionScore + 2)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setTigersScore(tigersScore + 6)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setTigersScore(tigersScore + 2)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
