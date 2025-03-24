import React, { useEffect, useState } from 'react';
import { Explore_Egypt } from '../../assets/assets';
import { motion } from "motion/react";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function ExploreEgypt() {
    const [startTyping, setStartTyping] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0);
        const Timedelay = setTimeout(() => {
            setStartTyping(true)
        }, 1100)
        return () => clearTimeout(Timedelay);
    }, []);

    const SlideLeft = {
        initial: { x: 450, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { delay: 3, duration: 2 } },

    }
    const SlideRight = {
        initial: { x: -450, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { delay: 3, duration: 2 } },
    }

    const SlideUp = {
        initial: { y: 300, opacity: 0 },
        animate: { y: 0, opacity: 0.5, transition: { delay: 3, duration: 1 } }
    }

    const headerVariants = {
        initial1: { y: -50, opacity: 0 },
        animate1: { y: 0, opacity: 1, transition: { duration: 1.2 } },

    };
    const sentence = "Dive into the rich history and beauty of this timeless destination.";
    const letters = sentence.split("");
    return (
        <div>
            <Navbar />
            <motion.h1
                variants={headerVariants}
                initial="initial1"
                animate="animate1"
                className="text-center display-3 fw-bold mt-5"
                style={{ fontFamily: "headers_font" }}>Explore Egypt's Wonders</motion.h1>
            <motion.p className="lead fs-3 text-center px-5" style={{ fontFamily: "text_font" }}>
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={startTyping ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: startTyping ? index * 0.03 : 0 }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.p>

            {Explore_Egypt.map((dest) => (
                <div
                    className='d-flex p-5 mt-5' key={dest.id}>
                    {dest.id % 2 === 0 ? (
                        <div className='d-flex flex-column '>
                            <div className='d-flex align-items-center justify-content-center'>
                                <motion.img src={dest.img}
                                    variants={SlideLeft}
                                    initial="initial"
                                    animate="animate"
                                    className='rounded-circle p-3 object-fit-cover' style={{ width: "30vw", height: "30vw" }} />
                                <motion.p
                                    style={{ fontFamily: "text_font" }}
                                    variants={SlideRight}
                                    initial="initial"
                                    animate="animate"
                                    className='fs-2'>{dest.text}
                                </motion.p>
                            </div>
                            <motion.hr
                                variants={SlideUp}
                                initial="initial"
                                animate="animate"
                                className=' border border-1' />
                        </div>
                    ) : (
                        <div className='d-flex flex-column '>
                            <div className='d-flex align-items-center justify-content-center'>
                                <motion.p
                                    style={{ fontFamily: "text_font" }}

                                    variants={SlideLeft}
                                    initial="initial"
                                    animate="animate"
                                    className='fs-2'>{dest.text}
                                </motion.p>
                                <motion.img src={dest.img}
                                    variants={SlideRight}
                                    initial="initial"
                                    animate="animate"
                                    className='rounded-circle p-3 object-fit-cover' style={{ width: "30vw", height: "30vw" }} />
                            </div>
                            <motion.hr
                                variants={SlideUp}
                                initial="initial"
                                animate="animate"
                                className=' border border-1' />

                        </div>
                    )}
                </div>
            ))}
            <Footer />
        </div>
    );
}

export default ExploreEgypt;