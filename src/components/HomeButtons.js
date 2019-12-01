import React from 'react';

export const HomeButtons = (props) => {
    return (
        <div className="homeButtons">
            <button className="homeButtons__touchdown" onClick={() => props.setLionScore(props.lionScore + 7)}>Home Touchdown</button>
            <button className="homeButtons__fieldGoal" onClick={() => props.setLionScore(props.lionScore + 2)}>Home Field Goal</button>
        </div>
    )
}