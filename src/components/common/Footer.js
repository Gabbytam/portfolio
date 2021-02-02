import React, {useState}  from 'react'

//animation import
import { motion, AnimatePresence } from 'framer-motion'
import {Animated} from "react-animated-css";

//component import 
import Contact from '../Contact'
import ContactItems from '../ContactItems'


function Footer({show, arrow, showForm}) {

    const variants = {
        //hidden property is essentially the initial property (can be named anything)
        hidden: { opacity: 0, y: -50 },
        //visible property is essentially the animate properties (can be named anything)
        visible: { opacity: 1,
            y: 0,
            //declare transition property INSIDE animate/visible property
            transition: {
                // ease: "easeIn",
                type: 'spring',
                duration: 2
            }
        },
        exit: {opacity: 0, y: -100}
    }

    return (
            <footer id='contact'>
                {/* <h3>Contact Me</h3> */}
                <h3 id='contact-header'>Get In Touch With Me <span id='arrow' onClick={() => showForm()}>{arrow}</span></h3>
 
                {/* !!!HOW TO DO IT WITH FRAMER MOTION */}
                { show && (
                    <AnimatePresence >
                        <motion.div id='footer-items' variants={variants} initial='hidden' animate='visible' exit='exit'>
                            <Contact />
                            <ContactItems />
                        </motion.div>
                    </AnimatePresence>  
                )}

            {/* !!!!HOW TO DO IT WITH REACT ANIMATE CSS */}
            {/* { show && ( 
                <Animated animationIn="fadeInDown" animationOut="fadeOut" className= 'animate-container'>
                    <div id='footer-items'>
                        <Contact />
                        <ContactItems />
                    </div>
                </Animated>
            )} */}
            </footer>  
    )
}

export default Footer
