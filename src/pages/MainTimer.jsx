import { useState, useEffect } from "react";
import Button from "../components/Button";
import WhiteButton from "../components/WhiteButton";
import Dock from "../components/Dock";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import FadeIn from "../components/FadeIn";

function MainTimer() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const [sounds, setSounds] = useState([
        { name: "Sound 1", url: "/audio/Beep.mp3" },
        { name: "Sound 2", url: "/audio/Fast beep.mp3" },
        { name: "Sound 3", url: "/audio/Digital.mp3" }
    ]);

    const [selectedSound, setSelectedSound] = useState(null);

    const playAlarm = () => {
        const audio = new Audio(selectedSound || "/audio/Beep.mp3");
        audio.play();
    };

    // Load sound dari localstorage
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("uploadedSounds") || "[]");

        if (stored.length > 0) {
            const loadedSounds = stored.map(s => ({
                name: s.name,
                url: s.fileData
            }));
            setSounds(prev => [...prev, ...loadedSounds]);
        }
    }, []);

    // Ini buat countdown timer
    useEffect(() => {
        let interval = null;

        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        }

        // Ini buat play alarm
        if (timeLeft === 0 && isRunning) {
            setIsRunning(false);
            playAlarm();
        }

        return () => clearInterval(interval);
    }, [isRunning, timeLeft]);

    // Ini buat tampilan sisa waktu
    const formatTime = val => val.toString().padStart(2, "0");

    const displayTime = (totalSeconds) => {
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        return `${formatTime(h)} : ${formatTime(m)} : ${formatTime(s)}`;
    };

    // Ini button start
    const handleStart = () => {
        if (!isRunning && timeLeft > 0) {
            setIsRunning(true);
            return;
        }

        const total =
            Number(hours) * 3600 +
            Number(minutes) * 60 +
            Number(seconds);

        if (total > 0) {
            setTimeLeft(total);
            setIsRunning(true);
        }
    };

    // Ini button pause
    const handlePause = () => {
        setIsRunning(false);
    };

    // Ini button reset
    const handleReset = () => {
        setIsRunning(false);
        setTimeLeft(0);
    };

    const [showSidebar, setShowSidebar] = useState(false);
    const navigate = useNavigate();

    const items = [
        {
            icon: <img src="/images/shuttle.png" alt="" className="w-1/2 h-1/2" />,
            label: 'Get started',
            onClick: () => navigate('/main-timer')
        },
        {
            icon: <img src="/images/home.png" alt="" className="w-1/2 h-1/2" />,
            label: 'Home',
            onClick: () => navigate('/')
        },
        {
            icon: <img src="/images/info.png" alt="" className="w-1/2 h-1/2" />,
            label: 'About',
            onClick: () => navigate('/?section=about')
        }
    ];

    return (
        <>
            <div className='fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50'>
                <Dock
                    items={items}
                    panelHeight={68}
                    baseItemSize={50}
                    magnification={70}
                />
            </div>

            <div className="w-full h-screen bg-black justify-center items-center flex flex-col gap-5">
                <FadeIn delay={0.1}>
                    <div className="flex gap-2 sm:gap-3 items-center text-white mb-3">
                        <input
                            type="number"
                            placeholder="00"
                            className="w-12 sm:w-16 bg-transparent border-b border-gray-400 
                                        text-center text-3xl sm:text-4xl focus:outline-none 
                                        focus:border-white"
                            onChange={(e) => setHours(e.target.value)}
                        />
                        <span className="text-xl sm:text-4xl">:</span>
                        <input
                            type="number"
                            placeholder="00"
                            className="w-12 sm:w-16 bg-transparent border-b border-gray-400 
                                        text-center text-3xl sm:text-4xl focus:outline-none 
                                        focus:border-white"
                            onChange={(e) => setMinutes(e.target.value)}
                        />
                        <span className="text-xl sm:text-4xl">:</span>
                        <input
                            type="number"
                            placeholder="00"
                            className="w-12 sm:w-16 bg-transparent border-b border-gray-400 
                                        text-center text-3xl sm:text-4xl focus:outline-none 
                                        focus:border-white"
                            onChange={(e) => setSeconds(e.target.value)}
                        />
                    </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <div>
                        <span className="text-white text-6xl sm:text-7xl md:text-9xl font-light">
                            {displayTime(timeLeft)}
                        </span>
                    </div>
                </FadeIn>
                
                <FadeIn delay={0.5}>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-3 w-full px-4">
                        <Button onClick={handleStart}>Start</Button>
                        <Button onClick={handlePause}>Pause</Button>
                        <Button onClick={handleReset}>Reset</Button>
                        <WhiteButton onClick={() => setShowSidebar(true)}>
                            Add sound
                        </WhiteButton>
                    </div>
                </FadeIn>
            </div>

            {/* Ini buat Sidebar */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-300 ${showSidebar ? "bg-black/50 pointer-events-auto" : "bg-transparent pointer-events-none"}`}
                onClick={() => setShowSidebar(false)}
            >
                <div
                    className={`absolute right-0 top-0 h-full transition-transform duration-300 ${showSidebar ? "translate-x-0" : "translate-x-full"}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <SideBar
                        sounds={sounds}
                        setSounds={setSounds}
                        setSelectedSound={setSelectedSound}
                    />
                </div>
            </div>
        </>
    );
}

export default MainTimer;
