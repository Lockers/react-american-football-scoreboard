import React from 'react';

export const AwayButtons = (props) => {
    return (
        <div className="awayButtons">
            <button className="awayButtons__touchdown" onClick={() => props.setTigersScore(props.tigersScore + 7)}>Away Touchdown</button>
            <button className="awayButtons__fieldGoal" onClick={() => props.setTigersScore(props.tigersScore + 2)}>Away Field Goal</button>
        </div>
    )
}