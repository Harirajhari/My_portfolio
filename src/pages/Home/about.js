import React from 'react';
import SessionTitle from '../../components/sessionTitle';
import { FaJava, FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaVideo } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiDjango, SiFigma } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';

const skills = [
    { name: "Java", icon: <FaJava className='icon-style' /> },
    { name: "JavaScript", icon: <FaJsSquare className='icon-style' /> },
    { name: "React", icon: <FaReact className='icon-style' /> },
    { name: "Node Js", icon: <FaNodeJs className='icon-style' /> },
    { name: "Express", icon: <SiExpress className='icon-style' /> },
    { name: "MongoDB", icon: <SiMongodb className='icon-style' /> },
    { name: "HTML & CSS", icon: <FaHtml5 className='icon-style' />, additionalIcon: <FaCss3Alt className='icon-style' /> },
    { name: "SQL", icon: <DiMysql className='icon-style' /> },
    { name: "Django", icon: <SiDjango className='icon-style' /> },
    { name: "Figma", icon: <SiFigma className='icon-style' /> },
    { name: "Capcut", icon: <FaVideo className='icon-style' /> }
];

function About() {
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
                <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
                    <p className='text-white'>I'm Hariraj, a final-year B.Tech student pursuing Information Technology at Karpagam Institute of Technology. With a passion for web development, I proudly identify as a full-stack web developer.</p>
                    <p className='text-white'>My skills include working with frontend technologies like HTML, CSS, JavaScript, and React, as well as backend technologies like Node.js, Express, and MongoDB. Additionally, I have experience in UI/UX design.</p>
                    <p className='text-white font-bold'>Future Goals:</p>
                    <p className='text-white'>I aim to continuously evolve my skills, stay updated with the latest tech trends, and make a positive impact in the tech community. My goals include solving real-time problems, learning new skills, and creating innovative solutions.</p>
                </div>
            </div>
            <div className='py-5'>
                <h1 className='text-tertiary text-xl '>Here are the few technologies I have learned</h1>
                <div className='flex flex-wrap gap-10 mt-5'>
                    {skills.map((skill, index) => (
                        <div key={index} className='border border-tertiary py-3 px-5 flex items-center gap-2'>
                            <div className='text-white'>{skill.icon}</div>
                            {skill.additionalIcon && <div className='text-white'>{skill.additionalIcon}</div>}
                            <h1 className='text-white'>{skill.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
