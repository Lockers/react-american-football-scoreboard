//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect, useRef } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";
import { Timer } from './components/Timer';
import { LionScore } from './components/LionScore';
import { TigerScore } from './components/TigerScore';
import { HomeButtons } from './components/HomeButtons';
import { AwayButtons } from './components/AwayButtons';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionScore, setLionScore] = useState(0)
  const [tigersScore, setTigersScore] = useState(0)

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <LionScore lionScore={lionScore} />
          <Timer />
          <TigerScore tigersScore={tigersScore} />
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <HomeButtons lionScore={lionScore} setLionScore={setLionScore} />
        <AwayButtons tigersScore={tigersScore} setTigersScore={setTigersScore} />
      </section>
    </div>
  );
}

export default App;
