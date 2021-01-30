import React, {useState} from 'react'
// import { Link} from 'react-router-dom'

//import same page linking 
import { HashLink as Link } from 'react-router-hash-link';

//import component
import Contact from '../Contact'
import ContactItems from '../ContactItems'


function Layout(props) {
    // const [show, setShow] = useState(false);
    // const [arrow, setArrow] = useState('⤵');

    // const showForm = (option) => {
    //     let toggle;
    //     //if viewer clicks contact from nav, have the form show
    //     if(option !== undefined){
    //         toggle = true;
    //     } else {
    //         toggle = show === true ? false : true;
    //     }
    //     let arr = arrow === '⤵' ? '⤴' : '⤵';
    //     setShow(toggle);
    //     setArrow(arr);
    // }

    return (
        <div id='content-wrap' >
            <nav>
                <div id='nav-content'>
                    <div>
                        <Link to='#intro' id='nav-left'>
                            {/* <img src='/images/logo.jpg' id='logo' alt='logo'></img> */}
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
                        <Link to ='#contact' className='nav-item'>Contact</Link>
                    </div>
                </div>
            </nav>
            <div id='body'>
                {props.children}
            </div>

            <footer id='contact'>
                {/* <h3>Contact Me</h3> */}
                <h3 id='contact-header'>Get In Touch With Me</h3>
                <div id='footer-items'>
                    <Contact />
                    <ContactItems />
                </div>
            </footer>
            
            
            
        </div>
    )
}

export default Layout
