import React from 'react'

import { HashLink as Link } from 'react-router-hash-link';

function Nav({showForm}) {
    return (
        <nav>
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
        </nav>
    )
}

export default Nav
