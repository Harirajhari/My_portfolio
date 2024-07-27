import React from "react";
import avatarImage from "./Avatar.jpg";
const resumeLink = "https://drive.google.com/file/d/14COEbP9J0jhwUDrt3t2KMT9N57Y6IYez/view?usp=sharing";

function Intro() {
    const openResume = () => {
        window.open(resumeLink, "_blank");
    };
    return (

        <div className = "p-10 flex justify-center">
        <div className = "h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 ">
        <h1 className="text-white">Hi, I am </h1>
                <h1 className="text-7xl sm:text-3xl text-secoundary font-semibold">Hariraj</h1>
                <h1 className='text-7xl sm:text-3xl text-white font-semibold'>I am Web Developer</h1>
                <p className='text-white w-2/2'>I am junior Web Developer and UX/UI Designer. Every day, I give my best and get better. I'm always working to become a better version of myself.</p>
                <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded" onClick={openResume}>
                    Resume
                </button>
            </div>
            <div className="flex items-center justify-center  sm:flex-col ">
                <div className="w-[50vh] sm:w-[105px] flex items-center justify-center">
                <img src={avatarImage} alt="Mine Avatar" className="ml-10 h-120 rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    )
}

export default Intro