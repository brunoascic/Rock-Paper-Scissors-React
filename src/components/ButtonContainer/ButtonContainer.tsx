import React from 'react';
import {ReactComponent as Rock} from "../assets/icons/rock.svg";
import {ReactComponent as Paper} from "../assets/icons/paper.svg";
import {ReactComponent as Scissors} from "../assets/icons/scissors.svg";

interface ButtonContainerProps {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ handleClick }) => (
    <div className="button-container">
        <button datatype="rock" onClick={handleClick}><Rock/></button>
        <button datatype="paper" onClick={handleClick}><Paper/></button>
        <button datatype="scissors" onClick={handleClick}><Scissors/></button>
    </div>
);

export default ButtonContainer;