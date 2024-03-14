import React, { useState, useEffect } from "react";
import "./home.css";
import { ReactComponent as Icon } from '../../icons/icon.svg';
import Button from "react-bootstrap/Button";
import HomeLoadingScreen from '../../components/loading/Homeloadingscreen';
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
                <Button href="/game" variant="primary"
                        style={{position: "absolute"}}
                        className="d-flex justify-content-center align-items-center buttonClass">Play</Button>
                <Icon style={{position: "absolute", pointerEvents: "none"}}/>
            </div>
        </div>
    );
}

export default Home;