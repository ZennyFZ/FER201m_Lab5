import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/Banner.png';
import {BsDiscord } from 'react-icons/bs';
import {FaSteam} from 'react-icons/fa';
import {motion} from 'framer-motion';
export default function Home() {
    return (
        <div className="home">
            <div className="home-intro">
                <motion.div animate={{x:100}} transition={{ease: "easeOut", duration: "1"}}>
                <div className="home-intro-heading">
                    <h1>Hi, i am Do Dinh Nhan</h1>
                    <h1>I am learning Software Engineering at FPT University</h1>
                </div>
                </motion.div>

                <motion.div animate={{x:-50}} transition={{ease: "easeOut", duration: "1"}}>
                <div className="home-intro-image">
                    <img src={image} alt="" className="my-img"/>
                </div>
                </motion.div>
            </div>

            <div className='home-specialization'>
                <h2 id="vp">My Fun Projects:</h2>
                <div className="bottom-line"></div>
                <p></p>
            </div>

            <div className='home-specialization-grid'>
                <motion.button whileHover={{scale: 1.1}}>
                <div>
                    <FaSteam size={40}/>
                    <h3><a href='https://github.com/ZennyFZ/Rain-Fun-Bot' target="_blank">Rain Bot</a></h3>
                    <p>
                        {""}
                        A fun and utility bot on Steam gaming platform that it can help to check weather, check data breach, send random cute images and more.
                    </p>
                </div>
                </motion.button>

                <motion.button whileHover={{scale: 1.1}}>
                <div>
                    <BsDiscord size={40}/>
                    <h3><a href='https://github.com/ZennyFZ/Discord-Rainbow-Bot' target="_blank">Rainbow Bot</a></h3>
                    <p>
                        {""}
                        A bot on Discord platform can make specific role color change randomly like RGB Keyboard
                    </p>
                </div>
                </motion.button>
            </div>
        </div>
    );
}