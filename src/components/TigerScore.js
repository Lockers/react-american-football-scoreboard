import React from 'react';

export const TigerScore = (props) => {
    return (
        <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{props.tigersScore}</div>
        </div>
    )
}