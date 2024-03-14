import React, { useState, useEffect } from 'react';
import './Loading.css'
import {ReactComponent as Loading } from "../../icons/loading.svg";

const Loadingscreen = () => {
    const [loadingDone, setLoadingDone] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingDone(true);
        }, 5000); // Adjust this value to match the duration of your loading animation

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loadingDone) {
            const expandCircle = document.getElementById('expandCircle');
            if (expandCircle) {
                expandCircle.style.top = `50%`;
                expandCircle.style.left = `50%`;
            }
        }
    }, [loadingDone]);

    return (
        <div id="loader-container">
            <div><Loading /></div>
            {loadingDone && <div id="expandCircle"></div>}
        </div>
    )
}

export default Loadingscreen;