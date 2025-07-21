import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { register} from "../services/userService";
import { addWord } from "../services/gameService";

import { toast } from "react-toastify";

import "../styles/Game.css";
import "../styles/Root.css";

export default function Root() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);  
    
    const startGame = useCallback(async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            toast.error("Enter a username first!");
            return;
        }

        try {
            setLoading(true); 
            const res = await register(name);
            if (typeof res === "string") {
                setLoading(false);
                toast.error(res); 

            } else {
                navigate('/game', { state: { id: res.msg } });
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            toast.error("An error occurred while submitting the form.");
        }
    }, [name, navigate]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await addWord();
            } catch (error) {
                console.error("Error during adding words:", error);
            }
        };
        fetchData();
    }, []); 

if (loading) {
        return (
            <div className="loading-screen">
                <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
                    <div class="wheel"></div>
                    <div class="hamster">
                        <div class="hamster__body">
                            <div class="hamster__head">
                                <div class="hamster__ear"></div>
                                <div class="hamster__eye"></div>
                                <div class="hamster__nose"></div>
                            </div>
                            <div class="hamster__limb hamster__limb--fr"></div>
                            <div class="hamster__limb hamster__limb--fl"></div>
                            <div class="hamster__limb hamster__limb--br"></div>
                            <div class="hamster__limb hamster__limb--bl"></div>
                            <div class="hamster__tail"></div>
                        </div>
                    </div>
                    <div class="spoke"></div>
                </div>
            </div>
        );
    }

    return (
        
        <div>
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
                        className="start-button-text"
                    >
                        BEGIN
                    </button>
                </a>


            </div>
            {/* Made by me section */}
            <div className="credits">
                <p>Made by Chris Maharjan</p>
            </div>
        </div>
    );
}
