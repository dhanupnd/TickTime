import Button from "./Button";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";

function GetStarted() {
    return (
        <div className="started-layout relative w-full h-screen justify-center items-center bg-black flex gap-10">
            <div className='flex flex-col gap-5 justify-center items-center'>
                <FadeIn delay={0.1}>
                    <h1 className="text-4xl text-white">Ready to start your activities with us?</h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                    <Button>
                        <Link to="/main-timer">Get Started</Link>
                    </Button>
                </FadeIn>
                    
            </div>
        </div>
    )
}

export default GetStarted;