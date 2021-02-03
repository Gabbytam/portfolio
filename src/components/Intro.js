import React, {useState, useEffect} from 'react'

// import '../css/stars.css'
import { motion, AnimatePresence } from 'framer-motion'

function Intro() {

    const [descriptor, setDescriptor] = useState('building projects');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        changeDescriptor();
    }, [index])


    let delay; 

    const changeDescriptor = () => {
        let others = ['debugging', 'problem solving', 'analytical thinking', 'group work', 'learning', 'building projects'];
            delay = setTimeout(() => {

                setDescriptor(others[index])
                if(index < others.length - 1 ) {
                    let newIndex = index + 1;
                    setIndex(newIndex);
                } else {
                    setIndex(0);
                }
            }, 2000)
    }

    const stopChangeDescriptor = () => {
        clearTimeout(delay)
    }

    return (
        <div id='intro'>
            <div id='background'></div>
            <div id='midground'></div>
            <div id='foreground'></div>
            <div id='intro-left'>
                <h1>Hi, I'm <span className='intro-name'>Gabrielle Tam</span> and welcome to my portfolio.</h1>

            </div>

            <div id='intro-right'>
                <p id='intro-text' onClick = {stopChangeDescriptor}>I am a software engineer who loves </p>
                <p id='descriptor'><span className='intro-name'>{descriptor}</span>.</p>
            </div>
            
        </div>
    )
}

export default Intro
