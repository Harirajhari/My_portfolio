import React from 'react';
import SessionTitle from '../../components/sessionTitle';

function About() {
    const skills=[
        "Java",
        "React",
        "Node Js",
        "MongoDB",
        "Javascript",
        "Python",
        "Django",
        "Figma"
    ]
    return (
        <div>
            <SessionTitle title="About" />
            <div className='flex w-full items-center sm:flex-col'>
                <div className='h-[70vh] w-1/2 sm:w-full'>
                    <lottie-player
                        src="https://assets6.lottiefiles.com/private_files/lf30_WdTEui.json"
                        background="transparent"
                        speed="1"
                        autoplay
                    ></lottie-player>
                </div>
                <div className = 'flex flex-col gap-5 w-1/2 sm:w-full'>
                <p className='text-white'>I'm Hariraj, a third-year B.Tech student Persuing in Information Technology at Karpagam Institute of Technology.</p>
                <p className='text-white'>I'm passionate about web development and proudly label myself as a full-stack web developer. My coding journey involves mastering languages like HTML, CSS, and JavaScript for creating engaging websites.</p>
                <p className='text-white font-bold'>Future Goals:</p>
                <p className = 'text-white'>Looking forward, I aim to keep evolving my skills, staying on top of the latest tech trends, and making a positive impact in the tech community.</p>

                </div>               
            </div>
            <div className = 'py-5'>
            <h1  className = 'text-tertiary text-xl '>Here are the few technology I have learned</h1>
            <div className = 'flex flex-wrap gap-10 mt-5'>
            {skills.map((skill, index)=> (
                    <div className='border border-tertiary py-3 px-5'>
                        <h1 className='text-white'>{skill}</h1>
                    </div>
                
                ))}
            </div>
            </div>
        </div>
    )
}

export default About        