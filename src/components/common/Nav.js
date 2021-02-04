import React from 'react'

import { HashLink as Link } from 'react-router-hash-link';

import { motion} from 'framer-motion'

function Nav({showForm}) {

    const variants = {
        start: { opacity: 0 },
        finish: { opacity: 1,
            transition: {
                duration: 3
            }
        }
    }

    return (
        <motion.nav variants={variants} initial='start' animate='finish'>
            <div id='nav-content'>
                <div>
                    <Link to='#intro' id='nav-left'>
                        <div>
                            <p className='name'>GABRIELLE TAM</p>
                            <p className='name'>software engineer</p>
                        </div>
                    </Link>
                </div>
                <div id='nav-right'>
                    <Link to='#about' className='nav-item'>About Me</Link>
                    <Link to='#projects' className='nav-item'>Projects</Link>
                    <Link to='#resume-container' className='nav-item'>Resume</Link>
                    <Link to ='#contact' className='nav-item' onClick = {()=> {showForm(true)}}>Contact</Link>
                </div>
            </div>
        </motion.nav>
    )
}

export default Nav
