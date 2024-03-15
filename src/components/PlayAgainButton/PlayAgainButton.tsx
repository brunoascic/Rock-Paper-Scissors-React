import React from 'react';
import Button from "react-bootstrap/Button";

interface PlayAgainButtonProps {
    resetGame: () => void;
    resetScore: () => void;
}

const PlayAgainButton: React.FC<PlayAgainButtonProps> = ({resetGame, resetScore}) => (
    <>
        <Button onClick={resetGame} className="play-again-button" variant="outline-secondary"
                style={{position: "relative", bottom: "20vh"}}>Play Again</Button>
        <Button onClick={resetScore} className="play-again-button" variant="outline-secondary"
                style={{position: "relative", bottom: "20vh", marginLeft: "1%"}}>Reset Score</Button>
    </>
);

export default PlayAgainButton;