import React from 'react';

export const LionScore = (props) => {
    return (
        <div className = "home" >
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{props.lionScore}</div>
        </div>
    )

}