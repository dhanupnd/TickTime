import React from 'react';
import { Link } from 'react-router-dom';
import Aurora from './Aurora.jsx';
import RotatingText from './RotatingText.jsx';
import Button from './Button.jsx';
import WhiteButton from './WhiteButton.jsx';
import About from './About.jsx';
import GetStarted from './GetStarted.jsx';
import Dock from './Dock.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Homepage() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    }

    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get("section");

        if (section === "about") {
        const element = document.getElementById("about-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        }
    }, [location]);

    const items = [
        { icon: <img src="/src/assets/shuttle.png" alt="" className='w-1/2 h-1/2'/>, label: 'Get started', onClick: () => {
            handleNavigation('/main-timer');
        }},
        { icon: <img src="/src/assets/home.png" alt="" className='w-1/2 h-1/2'/>, label: 'Home', onClick: () => {
            document.getElementById('hero-section').scrollIntoView({
                behavior: 'smooth',
            });
        }},
        { icon: <img src="/src/assets/info.png" alt="" className='w-1/2 h-1/2'/>, label: 'About', onClick: () => {
            document.getElementById('about-section').scrollIntoView({
                behavior: 'smooth',
            });
        }},
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

            {/* Bagian hero (pengenalan aplikasi / tampilan awal aplikasi) */}
            <div id='hero-section' className='relative justify-center items-center flex w-full h-screen'>
                <div className='bg-black h-screen absolute top-0 left-0 w-full overflow-hidden'>
                    <Aurora
                    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                    />
                </div>
                <div className='absolute flex w-full h-screen justify-between items-center px-20'>
                    <div className='flex flex-wrap w-full justify-start items-center gap-5'>
                        <h1 className='text-6xl text-white'>Do your</h1>
                        <RotatingText
                        texts={['Homework', 'Study', 'Exercise', 'Activity']}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-[#9929EA] text-5xl font-bold text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                        />
                        <h1 className='text-6xl font-bold text-white'>right on time</h1>
                        <div className='flex gap-5 mt-5'>
                            <WhiteButton>
                                <Link to="/main-timer">Get Started</Link>
                            </WhiteButton>
                            <Button 
                                onClick={() => {
                                    document.getElementById('about-section').scrollIntoView({
                                        behavior: 'smooth',
                                    });
                                }}
                            >
                                More info
                            </Button>
                        </div>
                    </div>
                    <img src="/src/assets/TickTimeMainChar.png" alt="" className='w-125'/>
                </div>
            </div>

            {/* Bagian about (menjelaskan tentang aplikasi) */}
            <About id="about-section"/>

            {/* Bagian get started (mengajak user untuk menggunakan aplikasi) */}
            <GetStarted />

            {/* Bagian feedback (form untuk feedback dari user) */}
            <div className="feedback relative w-full h-screen justify-center items-center bg-black flex">
                <div className="flex justify-between items-center px-20">
                    <div className="justify-center">
                        <img src="/src/assets/TickTime char pointing.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h1 className="text-4xl text-white">Give us some feedback</h1>
                        <form>
                            <input type="text" className="bg-white"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;