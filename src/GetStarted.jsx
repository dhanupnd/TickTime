import Button from "./Button";
import { Link } from "react-router-dom";

function GetStarted() {
    return (
        <div className="started-layout relative w-full h-screen justify-center items-center bg-black flex gap-10 px-20">
            <div className='flex flex-col gap-5 justify-center items-center'>
                <h1 className="text-4xl text-white">Ready to start your activities with us?</h1>
                <Button>
                    <Link to="/main-timer">Get Started</Link>
                </Button>
            </div>
        </div>
    )
}

export default GetStarted;