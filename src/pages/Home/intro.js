import React from "react";
import avatarImage from "./Avatar.jpg";
const resumeLink = "https://drive.google.com/file/d/195gyTZUduJjUNFA70vtHprc1LExx7ymy/view?usp=drivesdk";

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
                <p className='text-white w-2/3'>I am junior Web Developer and UX/UI Designer. Every day, I give my best and get better. I'm always working to become a better version of myself.</p>
                <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded" onClick={openResume}>
                    Resume
                </button>
            </div>
            <div className="flex items-center justify-center  sm:flex-col ">
                <div className="w-[50vh] flex items-center justify-center">
                <img src={avatarImage} alt="Mine Avatar" className="h-120 rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    )
}

export default Intro