import React from 'react'
//import icons 
import { FaGithub, FaMapMarked, FaPhone, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Icon } from '@iconify/react';
import codewarsIcon from '@iconify-icons/simple-icons/codewars';

function ContactItems() {
    return (
        <div id= 'contact-items'>
                <ul className='contact-list'>
                    <li className='list-item'><FaMapMarked /><span className='contact-text place'> New York, NY</span></li>
                    
                    <li className='list-item'><FaPhone /><span className='contact-text phone'><a href='tel:1-760-710-7856' title='Give me a call'>(760) 710-7856</a></span></li>
                    
                    <li className='list-item' id='email'><FaEnvelope /><span className='contact-text gmail'><a href='mailto:gtam2@fordham.edu' title='Send me an email'>gtam2@fordham.edu</a></span></li> 
                </ul>

                <hr></hr>
                <ul className='social-media-list'>
                    {/* old syntax but the link didn't work. also had to change styling color */}
                    {/* <li ><a href='https://www.instagram.com/halfmyface/' target='_blank' rel='noreferrer' className='contact-icon'>
                        <i aria-hidden='true' ><FaInstagram className='contact-icon'/></i></a>
                    </li> */}
                    <a href='https://github.com/Gabbytam' target='_blank' rel='noreferrer' title='GitHub' className='contact-icon'>
                        <li>
                            <i aria-hidden='true'><FaGithub className='contact-icon'/></i>
                        </li>
                    </a>
                    
                    <a href='https://www.linkedin.com/in/gabrielle-tam-586260189' target='_blank' rel='noreferrer' title='LinkedIn' className='contact-icon'>
                        <li>
                            <i aria-hidden='true'><FaLinkedin className='contact-icon'/></i>
                        </li>
                    </a>
                    
                    

                    <a href='https://www.codewars.com/users/Gabbytam' target='_blank' rel='noreferrer' title='Codewars' className='contact-icon'>
                        <li >
                            <i aria-hidden='true' ><Icon icon={codewarsIcon} className='contact-icon'/></i>
                        </li>
                    </a>
                    
                </ul>

                <hr></hr>
                
            </div>
    )
}

export default ContactItems
