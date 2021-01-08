import React from 'react'
import { Link} from 'react-router-dom'

function Layout(props) {
    return (
        <div >
            <nav>
                <div id='nav-content'>
                    <div>
                        <Link to='/' id='nav-left'>
                            <img src='../../../images/logo.jpg' id='logo'></img>
                            <div>
                                <p className='name'>GABRIELLE TAM</p>
                                <p className='name'>software engineer</p>
                            </div>
                        </Link>
                    </div>
                    <div id='nav-right'>
                        <Link to='/about' className='nav-item'>About Me</Link>
                        <Link to='/projects' className='nav-item'>Projects</Link>
                        <Link to='/resume' className='nav-item'>Resume</Link>
                    </div>
                </div>
            </nav>
            <div id='body'>
                {props.children}
            </div>

            <footer>
                
            </footer>
            
            
        </div>
    )
}

export default Layout
