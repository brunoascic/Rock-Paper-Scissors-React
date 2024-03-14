import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './pages/home/home';
import Loadingscreen from "./components/loading/Loadingscreen";

function App() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 7600)
    }, [])

    return (
        <div className="App">
            {loading ? <Loadingscreen/> : <Home/>}
        </div>
    );
}

export default App;