import React, { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Game.css";
import "../styles/Scene.css";
import guyimg from "/images/guy.png";
import ghostimg from "/images/ghost.png";
import emptyheart from "/images/empty.png";
import fullheart from "/images/heart.png";
import { getWord } from "../services/gameService";
import { update } from "../services/userService";

export default function Game() {
    const location = useLocation();
    const userId = location.state?.id;
    const navigate = useNavigate();

    const [lives, setLives] = useState(3);
    const [word, setWord] = useState([]);
    const [nextWord, setNextWord] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [ghost, setGhost] = useState({ x: 800, height: 50 });
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const ghostSpeed = 6;
    const inputRef2 = useRef(null);

    // Fetch a new random word
    const fetchWord = useCallback(async () => {
        const randomWord = await getWord();
        setNextWord(randomWord);
    }, []);

    useEffect(() => {
        const initialWord = async () => {
            const randomWord = await getWord();
            setWord(randomWord);
        };
        if (!word.length) {
            initialWord();
        }
        console.log("hello");
    }, []);

    // Fetch word on initial load
    useEffect(() => {
        if (!userId) {
            navigate("/");
        } else {
            fetchWord();
            inputRef2.current?.focus();
        }
    }, [fetchWord, navigate]);

    // Handle word input submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const correctWord = word?.[0]?.word;
        if (inputRef2.current.value === correctWord) {
            setWord(nextWord);
            fetchWord();
            setScore((prevScore) => prevScore + 1);
            deleteGhost();
        }
        setInputValue(""); // Clear input field
    };

    // Handle input change
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Handle ghost movement and collision detection
    useEffect(() => {
        if (gameOver) return;

        const ghostInterval = setInterval(() => {
            setGhost((prevGhost) => {
                const newGhost = { ...prevGhost, x: prevGhost.x - ghostSpeed };

                if (newGhost.x <= 0) {
                    return { x: 800, height: Math.random() * 100 + 1000 };
                }

                return newGhost;
            });
        }, 20);

        // Collision detection
        const collisionInterval = setInterval(() => {
            const guyBottom = window.innerHeight - 50;
            const guyHeight = 50;
            const isCollidingHorizontally = ghost.x + 50 > 0 && ghost.x < 100;
            const isCollidingVertically = guyBottom - guyHeight < ghost.height && guyBottom > ghost.height;

            if (isCollidingHorizontally || isCollidingVertically) {
                if (lives === 1) {
                    update(userId, score);
                    setGameOver(true);
                    navigate("/gameover", { state: { id: userId, score: score } });
                }
                deleteGhost();
                setLives((prevLife) => prevLife - 1); // Decrease life
                clearInterval(ghostInterval);
                clearInterval(collisionInterval);
            }
        }, 20);

        return () => {
            clearInterval(ghostInterval);
            clearInterval(collisionInterval);
        };
    }, [ghost, gameOver, lives, score, userId, navigate]);

    // Function to delete the ghost
    const deleteGhost = () => {
        setGhost({ x: 800, height: Math.random() * 50 + 50 });
    };

    // Lives component
    const Lives = ({ life }) => {
        return (
            <div className="imgcontainer">
                {[...Array(3)].map((_, i) => (
                    <img
                        key={i}
                        src={i < life ? fullheart : emptyheart}
                        className="heartimg"
                        alt={i < life ? "fullheart" : "emptyheart"}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="game-wrapper">
            <div className="container">
                <Lives life={lives} />
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
                    {word?.map((randomword) => (
                        <p key={randomword._id}>{randomword.word}</p>
                    ))}
                </div>
            </div>

            <div className="scene-wrapper">
                <div className="game-container">
                    <div className="game">
                        <img src="/images/background.png" alt="background" className="background" />
                        <div className="guy" style={{ bottom: "0px" }}>
                            <img src={guyimg} alt="guy" className="guy-img" />
                        </div>

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

                        {gameOver && <div className="game-over">Game Over!</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}
