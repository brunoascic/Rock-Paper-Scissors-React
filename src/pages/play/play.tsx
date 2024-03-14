import React, {useEffect, useState} from "react";
import HomeLoadingScreen from "../../components/loading/Homeloadingscreen";
import {ReactComponent as Robot} from "../../icons/robot.svg";
import {ReactComponent as Person} from "../../icons/person.svg";
import {ReactComponent as Rock} from "../../icons/rock.svg";
import {ReactComponent as Paper} from "../../icons/paper.svg";
import {ReactComponent as Scissors} from "../../icons/scissors.svg";
import {ReactComponent as Versus} from "../../icons/versus.svg";
import "./play.css";
import Button from "react-bootstrap/Button";

function Play() {
    const [loading, setLoading] = useState(true);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Button clicked');

        const button = event.currentTarget;

        const buttonRect = button.getBoundingClientRect();

        const vsSvgElement = document.querySelector('.vs-svg');

        if (vsSvgElement) {
            const vsSvgRect = vsSvgElement.getBoundingClientRect();

            const finalPositionX = vsSvgRect.right - buttonRect.left + 50; // Add an offset of 50 pixels
            const finalPositionY = vsSvgRect.top - buttonRect.top;

            button.style.transform = `translate(${finalPositionX}px, ${finalPositionY}px)`;
        }

        const buttons = document.querySelectorAll('.button-container button');

        buttons.forEach(button => {
            button.setAttribute('disabled', 'true');
        });

        button.removeAttribute('disabled');

        const robotButtons = document.querySelectorAll('.robot-container button');

        const randomIndex = Math.floor(Math.random() * robotButtons.length);
        const robotButton = robotButtons[randomIndex];

        const robotButtonRect = robotButton.getBoundingClientRect();

        if (vsSvgElement) {
            const vsSvgRect = vsSvgElement.getBoundingClientRect();
            // Calculate the final position of the robot's button relative to the vs-svg element
            // Subtract an offset from the X position to move the button to the left of the vs-svg element
            const robotFinalPositionX = vsSvgRect.left - robotButtonRect.right - 50; // Subtract an offset of 50 pixels
            const robotFinalPositionY = vsSvgRect.top - robotButtonRect.top;

            // Apply a CSS transform to the robot's button to move it to the final position
            //robotButton.style.transform = `translate(${robotFinalPositionX}px, ${robotFinalPositionY}px)`;
        }

        robotButton.setAttribute('disabled', 'true');
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Disable all buttons when the component is mounted
        const buttons = document.querySelectorAll('.robotContainer .button-container button');
        buttons.forEach(button => {
            button.setAttribute('disabled', 'true');
        });

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Button href="/home" className="home-button" variant="outline-secondary">Home</Button>
            {loading && <HomeLoadingScreen/>}
            <div className="icon-container">
                <div className="robotContainer">
                    <Robot className="robot"/>
                    <div className="button-container">
                        <button onClick={handleClick}><Rock/></button>
                        <button onClick={handleClick}><Paper/></button>
                        <button onClick={handleClick}><Scissors/></button>
                    </div>
                </div>
                <Versus className="vs-svg"/>
                <div className="playerContainer">
                    <div className="button-container">
                        <button onClick={handleClick}><Rock/></button>
                        <button onClick={handleClick}><Paper/></button>
                        <button onClick={handleClick}><Scissors/></button>
                    </div>
                    <Person className="person"/>
                </div>
            </div>
        </div>
    );
}

export default Play;