import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './pages/home/home';
import Loadingscreen from "./components/loading/Loadingscreen";
import Play from "./pages/play/play";

function App() {
    let Path;
    switch (window.location.pathname) {
        case "/game":
            Path = Play;
            break;
        case "/home":
            Path = Home;
            break;
        default:
            Path = Home;
    }

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 7600)
    }, [])

    return (
        <div className="App">
            {loading ? <Loadingscreen/> : <Path/>}
        </div>
    );
}

export default App;