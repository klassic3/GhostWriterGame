import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Game.css"
import "../styles/Scene.css"
import guyimg from "/images/guy.png";
import ghostimg from "/images/ghost.png";
import emptyheart from "/images/empty.png";
import fullheart from "/images/heart.png";
import { reset_animation } from "../components/Scene";
import { getWord } from "../services/gameService";

export default function Game() {
    const navigate = useNavigate();
    const [lives, setLives] = useState(3);
    const [word, setWord] = useState('');

    const [inputValue, setInputValue] = useState("");

    const [ghost, setGhost] = useState({ x: 800, height: 50 }); // One ghost, starting at x = 800
    const [score, setScore] = useState(0); // Player score
    const [gameOver, setGameOver] = useState(false); // Whether game is over

    const ghostSpeed = 6; // Speed at which the ghost moves
    const guyPosition = 0; // Static position for the guy (at bottom)

    var r_word = null;

    // Get the word from the context
    word && word.map((randomword) => (r_word = randomword.word));

    const inputRef2 = useRef(null);
    var i = 1;

    // Fetch word function
    const fetchWord = async () => {
        const randomWord = await getWord();
        setWord(randomWord);
    };

    useEffect(() => {
        fetchWord();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputRef2.current.value === r_word) {
            reset_animation();
            fetchWord();
        }
        setScore((prevScore) => prevScore + 1);
        deleteGhost();
        setInputValue("");
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Lives component
    const Lives = ({ life }) => {
        var heart1 = null;
        var heart2 = null;
        var heart3 = null;
        if (life > 0) {
            heart1 = fullheart;
        } else {
            heart1 = emptyheart;
        }
        if (life > 1) {
            heart2 = fullheart;
        } else {
            heart2 = emptyheart;
        }
        if (life > 2) {
            heart3 = fullheart;
        } else {
            heart3 = emptyheart;
        }

        return (
            <div className="imgcontainer">
                <img src={heart1} className="heartimg" alt="fullheart" />
                <img src={heart2} className="heartimg" alt="fullheart" />
                <img src={heart3} className="heartimg" alt="fullheart" />
            </div>
        );
    };



    // Handle ghost movement and game logic
    useEffect(() => {
        if (gameOver) return;

        const ghostInterval = setInterval(() => {
            setGhost((prevGhost) => {
                const newGhost = { ...prevGhost, x: prevGhost.x - ghostSpeed }; // Move the ghost to the left

                if (newGhost.x <= 0) {
                    // When the ghost moves off the screen, spawn a new one at the starting position
                    return { x: 800, height: Math.random() * 50 + 50 };
                }

                return newGhost; // Keep the current ghost moving
            });
        }, 20);

        // Score and collision check
        const collisionInterval = setInterval(() => {
            if (
                ghost.x > 20 &&
                ghost.x < 100 &&
                guyPosition + 50 > window.innerHeight - ghost.height &&
                guyPosition < window.innerHeight
            ) {
                setGameOver(true); // End the game if collision occurs
            }

        }, 20);

        return () => {
            clearInterval(ghostInterval);
            clearInterval(collisionInterval);
        };
    }, [ghost, gameOver]);

    // Function to delete a ghost when clicked
    const deleteGhost = () => {
        setGhost({ x: 800, height: Math.random() * 50 + 50 }); // Reset the ghost position and height
    };

    // Handle click event to delete ghost
    const handleClick = (event) => {
        if (gameOver) return;

        const ghostElement = document.querySelector("#ghost");
        const ghostRect = ghostElement.getBoundingClientRect();
        const clickX = event.clientX;
        const clickY = event.clientY;

        // Check if the click is within the bounds of the ghost
        if (
            clickX > ghostRect.left &&
            clickX < ghostRect.right &&
            clickY > ghostRect.top &&
            clickY < ghostRect.bottom
        ) {
            deleteGhost(); // Delete the ghost if clicked
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClick); // Listen for mouse clicks
        return () => window.removeEventListener("click", handleClick); // Clean up event listener
    }, [ghost, gameOver]);


    return (
        <div className="game-wrapper">
            <div >
                <div className="container">
                    <Lives life={lives} />
                    {/* Moved the score outside the game container */}
                    <div className="score">
                        <p>{score}</p>
                    </div>
                    <form id="form" onSubmit={handleSubmit}>
                        <input
                            ref={inputRef2}
                            type="text"
                            value={inputValue}
                            className="brutalist-input smooth-type"
                            placeholder="Enter word here..."
                            onChange={handleInputChange}
                        />
                    </form>
                    <div className="randomWord">
                        {word &&
                            word.map((randomword) => (
                                <p key={randomword._id}>{randomword.word}</p>
                            ))}
                    </div>
                </div>
            </div>
            <div className="scene-wrapper">
                <div className="game-container">
                    <div className="game">
                        {/* Guy stays at the bottom */}
                        <div
                            className="guy"
                            style={{
                                bottom: `${guyPosition}px`,
                            }}
                        >
                            <img src={guyimg} alt="guy" className="guy-img" />
                        </div>

                        {/* Render the one ghost */}
                        <div
                            id="ghost"
                            className="ghost"
                            style={{
                                left: `${ghost.x}px`,
                                height: `${ghost.height}px`,
                            }}
                        >
                            <img src={ghostimg} alt="ghost" className="ghost-img" />
                        </div>

                        {/* Game Over display */}
                        {gameOver && <div className="game-over">Game Over!</div>}
                    </div>
                </div>
            </div>
        </div>
    );

}
