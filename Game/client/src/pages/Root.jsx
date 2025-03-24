import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/userService";
import { addWord } from "../services/gameService";

// css
import "../styles/Root.css";

export default function Root() {
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State to hold error message
    const navigate = useNavigate();

    // Start the game
    const startGame = useCallback(async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setErrorMessage("Enter a username first!");  // Set error message if name is empty
            return;
        }

        setErrorMessage(''); // Clear the error message if name is valid
        try {
            const res = await register(name);
            if (typeof res === "string") {
                alert(res); // Use `res` instead of `result` which doesn't exist
            } else {
                navigate('/game', { state: { id: res.msg } });
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            alert("An error occurred while submitting the form.");
        }
    }, [name, navigate]);

    // Load additional words (only runs once on mount)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await addWord();
            } catch (error) {
                console.error("Error during adding words:", error);
                alert("An error occurred while adding words");
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once on mount

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
            <div className="registerBox">
                <div className="registerBoxBorder">
                    <input
                        type="text"
                        name="username"
                        className="registerInput"
                        placeholder="Enter your username"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                </div>
            </div>

            {/* Start Button */}
            <a className="codepen-button">
                <button
                    onClick={startGame}
                    name="text"
                    type="submit"
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
