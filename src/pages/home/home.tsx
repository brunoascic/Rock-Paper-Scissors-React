import React, { useState, useEffect } from "react";
import "./home.css";
import { ReactComponent as Icon } from '../../components/assets/icons/icon.svg';
import Button from "react-bootstrap/Button";
import HomeLoadingScreen from '../../components/loading/HomeLoadingScreen/Homeloadingscreen';
function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading && <HomeLoadingScreen />}
            <h1>Rock Paper Scissors</h1>
            <div className="buttonContainer"
                 style={{position: "relative", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button href="/game" variant="outline-secondary"
                        style={{position: "absolute"}}
                        className="d-flex justify-content-center align-items-center buttonClass">Play</Button>
                <Icon style={{position: "absolute", pointerEvents: "none", scale: "0.9"}}/>
            </div>
        </div>
    );
}

export default Home;