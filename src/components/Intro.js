import React, {useState, useEffect} from 'react'

// import '../css/stars.css'
//import { motion} from 'framer-motion'
import { motion} from "framer-motion"


function Intro() {

    const [descriptor, setDescriptor] = useState('building projects');
    const [index, setIndex] = useState(0);

    //pass in index so everytime index changes the function is run, keeps it on a loop
    useEffect(() => {
        changeDescriptor();
    }, [index])


    let delay; 

    //function that will periodically swap out words
    const changeDescriptor = () => {
        let others = ['debugging', 'problem solving', 'analytical thinking', 'group work', 'learning', 'building projects'];
        //have a setTimeout to change through the array of words, circle back if at the end of array
        delay = setTimeout(() => {
            //also change the show to be false at the end inside the setTimeout
            
            
            if(index < others.length - 1 ) {
                let newIndex = index + 1;
                setIndex(newIndex);
            } else {
                setIndex(0);
            }
            setDescriptor(others[index])
            
        }, 2000)
    }

    //function that will stop the words from changing when its clicked 
    const stopChangeDescriptor = () => {
        clearTimeout(delay)
    }

    const variantsR = {
        start: { x: 1000 },
        finish: { x: 0,
            transition: {
                type: 'spring',
                duration: 3
            }
        }
    }

    const variantsL = {
        start: { x: -1000 },
        finish: { x: 0,
            transition: {
                type: 'spring',
                duration: 3
            }
        }
    }


    return (
        <div id='intro'>
            <div id='background'></div>
            <div id='midground'></div>
            <div id='foreground'></div>
            <motion.div id='intro-left' variants={variantsL} initial='start' animate='finish'>
                <h1>Hi, I'm <span className='intro-name'>Gabrielle Tam</span> and welcome to my portfolio.</h1>
            </motion.div>

            <motion.div id='intro-right' variants={variantsR} initial='start' animate='finish'>
                <p id='intro-text' onClick = {stopChangeDescriptor}>I am a software engineer who loves </p>
                
                <p id='descriptor'><span className='intro-name'>{descriptor}</span>.</p>
                
            </motion.div>
            
        </div>
    )
}

export default Intro
