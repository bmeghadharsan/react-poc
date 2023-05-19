// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';
function App() {
    const [darkMode, setDarkMode] = useState(true);

    const handleThemeToggle = () => {
        setDarkMode(!darkMode);
    };

    const handleClick = () => {
        alert("Api call is made here")
    }

    return (
        <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'} `}>
            <h1>PeruseLab</h1>
            <img className={"logo"} src='src/assets/ll.png'  onClick={handleClick} alt={"peruse Logo"}>
            </img>
            <button onClick={handleThemeToggle}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>

    );
}

export default App;