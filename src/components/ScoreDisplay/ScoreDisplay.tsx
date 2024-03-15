import React from 'react';

interface ScoreDisplayProps {
    playerWins: number;
    robotWins: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ playerWins, robotWins }) => (
    <div style={{position: 'absolute', top: "10%", left: '50%', transform: 'translateX(-50%)'}}>
        {`${robotWins} : ${playerWins}`}
    </div>
);

export default ScoreDisplay;