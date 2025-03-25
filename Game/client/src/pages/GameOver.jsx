import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getTopScores } from "../services/userService";
import '../styles/GameOver.css';

// Icons for 1st, 2nd, and 3rd place
import firstPlaceIcon from "/images/imortal.png";
import secondPlaceIcon from "/images/diamond.png";
import thirdPlaceIcon from "/images/gold.png";

export default function GameOver() {
    const location = useLocation();
    const navigate = useNavigate();

    // Retrieve user ID from state
    const userId = location.state?.id;

    const score = location.state?.score;

    const [topScores, setTopScores] = useState([]);

    const [loading, setLoading] = useState(true);

    const Home = () => {
        navigate('/');
    }

    // Fetch top scores
    const fetchTopScores = useCallback(async () => {
        try {
            const res = await getTopScores();
            setTopScores(res.data || []);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching top scores:", error);
            alert("An error occurred while retrieving the top scores.");
        }
    }, []);

    // Ensure that user ID is available before loading data
    useEffect(() => {
        if (!userId) {
            navigate("/"); // Redirect if no user ID is found
        } else {
            fetchTopScores();
        }
    }, [userId, fetchTopScores, navigate]);

    // Show loading indicator if the word hasn't been fetched
    if (loading) {
        return (
            <div className="loading-screen">
                <div class="heart"></div>
            </div>
        );
    }

    return (
        <div className="GOcontainer">
            <div className="title epic-title">Game Over</div>
            <div className="epic-score">Your score was {score}!</div>
            <div className="epic-top-scores">Highest Scores:</div>
            <div className="topscores">
                {topScores.slice(0, 3).map((user, index) => (
                    <div className="e-card playing" key={index}>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="infotop">
                            {/* Render rank-specific icons */}
                            <img
                                src={index === 0 ? firstPlaceIcon : index === 1 ? secondPlaceIcon : thirdPlaceIcon}
                                alt={`Place ${index + 1}`}
                                className="icon"
                            />
                            <br />
                            {user.name}
                            <br />
                            <div className="name">{user.score}</div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Restart Button */}
            <a className="codepen-button">
                <button
                    onClick={Home}
                    name="text"
                    className="start-button-text"
                >
                    Play Again
                </button>
            </a>
        </div>
    );
}
