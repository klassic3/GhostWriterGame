import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../services/userService";
import { addWord } from "../services/gameService";

//css
import "../styles/Root.css"

export default function Root() {
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State to hold error message
    const navigate = useNavigate();

    // Start the game
    const startGame = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setErrorMessage("Username cannot be empty!");  // Set error message if name is empty
            return;
        }

        setErrorMessage(''); // Clear the error message if name is valid
        try {
            const res = await register(name);
            if (typeof res === "string") {
                alert(result);
            } else {
                navigate('/game');
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            alert("An error occurred while submitting the form.");
        }

    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await addWord(); // Assuming addWord is your async function
                console.log(res); // Handle the response if needed
            } catch (error) {
                console.error("Error during adding words:", error);
                alert("An error occurred while adding words");
            }
        };

        fetchData();
    }, []);


    return (
        <div className="homepage-container">
            {/* Main Homepage Image */}
            <div className="homepage-image-container">
                <img
                    src="/images/homepage.png"
                    alt="Homepage"
                    className="homepage-image"
                />
            </div>
            <div className="howtoplay">
                Enter the words you see before the ghosts reach you!!
            </div>
            {/* Name Input Field */}
            <div class="registerBox">
                <div class="registerBoxBorder">
                    <input type="text"
                        name="username"
                        class="registerInput"
                        placeholder="Enter your username"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required />
                </div>
            </div>

            {/* Start Button */}
            <a class="codepen-button">
                <button
                    onClick={startGame}
                    name="text"
                    className="start-button-text"
                >
                    BEGIN
                </button>
            </a>

            {/* Error Message */}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
}
