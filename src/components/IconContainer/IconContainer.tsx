import React from 'react';
import {ReactComponent as Robot} from "../assets/icons/robot.svg";
import {ReactComponent as Person} from "../assets/icons/person.svg";
import {ReactComponent as Versus} from "../assets/icons/versus.svg";
import ButtonContainer from "../ButtonContainer/ButtonContainer";

interface IconContainerProps {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconContainer: React.FC<IconContainerProps> = ({ handleClick }) => (
    <div className="icon-container">
        <div className="robotContainer">
            <Robot className="robot"/>
            <ButtonContainer handleClick={handleClick} />
        </div>
        <Versus className="vs-svg"/>
        <div className="playerContainer">
            <ButtonContainer handleClick={handleClick} />
            <Person className="person"/>
        </div>
    </div>
);

export default IconContainer;