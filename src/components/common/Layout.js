import React, {useState} from 'react'

//import component
import Intro from '../Intro'
import Nav from '../common/Nav'
import Contact from '../Contact'
import ContactItems from '../ContactItems'


function Layout(props) {
    const [show, setShow] = useState(false);
    const [arrow, setArrow] = useState('⤵');

    const showForm = (option) => {
        let toggle;
        //if viewer clicks contact from nav, have the form show
        if(option !== undefined){
            toggle = true;
        } else {
            toggle = show === true ? false : true;
        }
        let arr = arrow === '⤵' ? '⤴' : '⤵';
        setShow(toggle);
        setArrow(arr);
    }

    return (
        <div id='content-wrap' >
            <Nav showForm = {showForm}/>
            <Intro />
            <div id='body'>
                {props.children}
            </div>

            <footer id='contact'>
                {/* <h3>Contact Me</h3> */}
                <h3 id='contact-header'>Get In Touch With Me <span id='arrow' onClick={() => showForm()}>{arrow}</span></h3>
                <div id='footer-items' style = {show === true ? {display: ''} : {display: 'none'}}>
                    <Contact />
                    <ContactItems />
                </div>
            </footer>
        </div>
    )
}

export default Layout
