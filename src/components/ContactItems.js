import React from 'react'
//import icons 
import { FaGithub, FaMapMarked, FaPhone, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa'

function ContactItems() {
    return (
        <div id= 'contact-items'>
                <ul className='contact-list'>
                    <li className='list-item'><FaMapMarked /><span className='contact-text place'> New York, NY</span></li>
                    
                    <li className='list-item'><FaPhone /><span className='contact-text phone'>(760) 710-7856</span></li>
                    
                    <li className='list-item'><FaEnvelope /><span className='contact-text gmail'><a href='mailto:#' title='Send me an email'>gtam2@fordham.edu</a></span></li> 
                </ul>

                <hr></hr>
                <ul className='social-media-list'>
                    <li><a href='https://github.com/Gabbytam' target='_blank' className='contact-icon'>
                        <i  aria-hidden='true'><FaGithub className='contact-icon'/></i></a>
                    </li>
                    <li><a href='https://www.linkedin.com/in/gabrielle-tam-586260189' target='_blank' className='contact-icon'>
                        <i aria-hidden='true'><FaLinkedin className='contact-icon'/></i></a>
                    </li>
                    <li ><a href='https://www.instagram.com/halfmyface/' target='_blank' className='contact-icon'>
                        <i aria-hidden='true' ><FaInstagram className='contact-icon'/></i></a>
                    </li>
                </ul>

                <hr></hr>
                
            </div>
    )
}

export default ContactItems
