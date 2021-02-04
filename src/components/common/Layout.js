import React, {useState} from 'react'

//import component
import Intro from '../Intro'
import Nav from '../common/Nav'
import Footer from '../common/Footer'




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
        let arr = toggle === true ? '⤴' : '⤵';
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
            <Footer showForm = {showForm} show={show} arrow={arrow}/>
        </div>
    )
}

export default Layout
