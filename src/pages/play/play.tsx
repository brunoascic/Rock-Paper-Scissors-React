import React, {useEffect, useState} from "react";
import HomeLoadingScreen from "../../components/loading/HomeLoadingScreen/Homeloadingscreen";
import "./play.css";
import ScoreDisplay from "../../components/ScoreDisplay/ScoreDisplay";
import HomeButton from "../../components/HomeButton/HomeButton";
import IconContainer from "../../components/IconContainer/IconContainer";
import PlayAgainButton from "../../components/PlayAgainButton/PlayAgainButton";

function Play() {
    const [loading, setLoading] = useState(true);
    const [playerWins, setPlayerWins] = useState(0);
    const [robotWins, setRobotWins] = useState(0);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const buttons = document.querySelectorAll('.robotContainer .button-container button');

        const button = event.currentTarget;
        const buttonType = button.getAttribute('dataType'); // This will be 'rock', 'paper', or 'scissors'
        const robotButton = buttons[Math.floor(Math.random() * buttons.length)] as HTMLButtonElement;
        const robotButtonType = robotButton.getAttribute('dataType');

        if (buttonType === robotButtonType) {
            console.log('It\'s a draw');
        } else if (
            (buttonType === 'rock' && robotButtonType === 'scissors') ||
            (buttonType === 'paper' && robotButtonType === 'rock') ||
            (buttonType === 'scissors' && robotButtonType === 'paper')
        ) {
            console.log('Player wins');
            setPlayerWins(playerWins + 1);
        } else {
            console.log('Robot wins');
            setRobotWins(robotWins + 1);
        }

        const buttonRect = button.getBoundingClientRect();
        const robotButtonRect = robotButton.getBoundingClientRect();

        const vsSvgElement = document.querySelector('.vs-svg');

        if (!vsSvgElement) {
            console.error('vsSvgElement is null');
            return;
        }

        const vsSvgRect = vsSvgElement.getBoundingClientRect();

        const finalPositionX = vsSvgRect.right - buttonRect.left; // Add an offset of 50 pixels
        const finalPositionY = vsSvgRect.top - buttonRect.top - 25;

        button.style.transform = `translate(${finalPositionX}px, ${finalPositionY}px)`;
        button.setAttribute('disabled', 'true'); // Disable the button after it has been clicked and moved

        const robotFinalPositionX = vsSvgRect.right - robotButtonRect.right - 120; // Add an offset of 50 pixels
        const robotFinalPositionY = vsSvgRect.top - robotButtonRect.top - 25;

        robotButton.style.transform = `translate(${robotFinalPositionX}px, ${robotFinalPositionY}px)`;

        robotButton.setAttribute('disabled', 'true'); // Disable the button after it has been clicked and moved

        buttons.forEach(button => {
            button.setAttribute('disabled', 'true');
        });
    };

    const resetGame = () => {
        const playerButtons = document.querySelectorAll('.playerContainer .button-container button');
        const robotButtons = document.querySelectorAll('.robotContainer .button-container button');

        playerButtons.forEach((button: Element) => {
            const htmlButton = button as HTMLElement;
            htmlButton.style.transform = 'initial';
            htmlButton.removeAttribute('disabled');
        });

        robotButtons.forEach((button: Element) => {
            const htmlButton = button as HTMLElement;
            htmlButton.style.transform = 'initial';
        });
    };

    const resetScore = () => {
        setPlayerWins(0);
        setRobotWins(0);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        const buttons = document.querySelectorAll('.robotContainer .button-container button');
        buttons.forEach(button => {
            button.setAttribute('disabled', 'true');
        });

        return () => clearTimeout(timer);
    }, []);

    document.body.classList.add('no-scroll');

    return (
        <div>
            <ScoreDisplay playerWins={playerWins} robotWins={robotWins} />
            <HomeButton />
            {loading && <HomeLoadingScreen/>}
            <IconContainer handleClick={handleClick} />
            <PlayAgainButton resetGame={resetGame} resetScore={resetScore} />
        </div>
    );
}

export default Play;