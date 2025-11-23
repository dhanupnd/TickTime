import React from 'react';
import { Link } from 'react-router-dom';
import Aurora from '../components/Aurora.jsx';
import RotatingText from '../components/RotatingText.jsx';
import Button from '../components/Button.jsx';
import WhiteButton from '../components/WhiteButton.jsx';
import About from './About.jsx';
import GetStarted from './GetStarted.jsx';
import Dock from '../components/Dock.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FadeInX from '../components/FadeInX.jsx';
import FadeIn from '../components/FadeIn.jsx';

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
        { icon: <img src="/images/shuttle.png" alt="" className='w-1/2 h-1/2'/>, label: 'Get started', onClick: () => {
            handleNavigation('/main-timer');
        }},
        { icon: <img src="/images/home.png" alt="" className='w-1/2 h-1/2'/>, label: 'Home', onClick: () => {
            document.getElementById('hero-section').scrollIntoView({
                behavior: 'smooth',
            });
        }},
        { icon: <img src="/images/info.png" alt="" className='w-1/2 h-1/2'/>, label: 'About', onClick: () => {
            document.getElementById('about-section').scrollIntoView({
                behavior: 'smooth',
            });
        }},
    ];

    return (
        <>
            <div className='fixed bottom-3 sm:bottom-5 left-1/2 transform -translate-x-1/2 z-50'>
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
                <div className='absolute flex flex-col-reverse md:flex-row w-full h-screen justify-center md:justify-between items-center px-6 md:px-12 lg:px-20 gap-10'>
                    <FadeInX delay={0.3}>
                        <div className='flex flex-wrap w-full justify-start items-center gap-5'>
                            <h1 className='text-4xl sm:text-5xl md:text-6xl text-white'>Do your</h1>
                            <RotatingText
                            texts={['Homework', 'Study', 'Exercise', 'Activity']}
                            mainClassName="px-2 sm:px-2 md:px-3 bg-[#9929EA] text-3xl sm:text-4xl md:text-5xl font-bold text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                            />
                            <h1 className='text-4xl sm:text-5xl md:text-6xl text-white'>right on time</h1>
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
                    </FadeInX>
                    <img src="/images/ticktimemain.png" alt="" className='w-60 sm:w-72 md:w-96 lg:w-[500px]'/>
                </div>
            </div>

            {/* Bagian about (menjelaskan tentang aplikasi) */}
            <About id="about-section"/>

            {/* Bagian get started (mengajak user untuk menggunakan aplikasi) */}
            <GetStarted />

            {/* Bagian sosmed developer */}
            <div className="w-full h-screen justify-center items-center bg-black">
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-20 px-6">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <FadeInX delay={0.1}>
                            <h1 className="text-4xl text-white">Developer social media</h1>
                        </FadeInX>
                        <FadeInX delay={0.3}>
                            <div className="flex justify-start items-center gap-10">
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <a href="https://www.instagram.com/dhanupnd" target="_blank" rel="noopener noreferrer">
                                            <div className="flex justify-start items-center gap-3">
                                                <img src="/images/instagram.png" alt="" className="w-10 sm:w-12 md:w-[50px]"/>
                                                <span className="text-white">@dhanupnd</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.tiktok.com/@dhanupnd" target="_blank" rel="noopener noreferrer">
                                            <div className='flex justify-start items-center gap-3'>
                                                <img src="/images/tiktok.png" alt="" className="w-10 sm:w-12 md:w-[50px]"/>
                                                <span className='text-white'>@dhanupnd</span>
                                            </div>                                    
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.github.com/dhanupnd" target="_blank" rel="noopener noreferrer">
                                            <div className='flex justify-start items-center gap-3'>
                                                <img src="/images/github.png" alt="" className="w-10 sm:w-12 md:w-[50px]"/>
                                                <span className='text-white'>@dhanupnd</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:dhanupandhowo29@gmail.com" target="_blank" rel="noopener noreferrer">
                                            <div className='flex justify-center items-center gap-3'>
                                                <img src="/images/gmail.png" alt="" className="w-10 sm:w-12 md:w-[50px]"/>
                                                <span className='text-white'>dhanupandhowo29@gmail.com</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </FadeInX>
                    </div>
                    
                    <FadeIn delay={0.3}>
                        <div className="justify-center">
                            <img src="/images/ticktimechardev.png" alt="" className="w-35 md:w-60"/>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </>
    );
}

export default Homepage;