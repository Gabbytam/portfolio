import React from 'react'
import {Route, Link} from 'react-router-dom'

//component import 
// import About from '../About'
// import Projects from '../Projects'
// import Blog from '../Blog'

const LayoutM = (props) => {
    return(
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About Me</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>

                        {/* <Route path="/about" component={About}></Route>
                        <Route path="/projects" component={Projects}></Route>
                        <Route path="/blog" component={Blog}></Route> */}

                    </ul>
                </div>
            </nav>
            <div>
            {props.children}
            </div>

            {/* FOOTER STARTS HERE */}
            <footer className="page-footer">
                <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                    <h5 className="white-text">Footer Content</h5>
                    <p className="grey-text text-lighten-4">
                        You can use rows and columns here to organize your footer
                        content.
                    </p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Links</h5>
                    <ul>
                        <li>
                        <a className="grey-text text-lighten-3" href="#!">
                            Link 1
                        </a>
                        </li>
                        <li>
                        <a className="grey-text text-lighten-3" href="#!">
                            Link 2
                        </a>
                        </li>
                        <li>
                        <a className="grey-text text-lighten-3" href="#!">
                            Link 3
                        </a>
                        </li>
                        <li>
                        <a className="grey-text text-lighten-3" href="#!">
                            Link 4
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="footer-copyright">
                <div className="container">
                    © 2014 Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">
                    More Links
                    </a>
                </div>
                </div>
            </footer>
        </div>
        
    )
}

export default LayoutM
//PROPS.CHILDREN NOTES
//props.children is used to display whatever you include between the opening and closing tags when invoking a component.
//each component that get rendered, gets rendered between this div 