import React from 'react'

function Project({ img, liveSiteUrl, githubUrl }) {
    const styling = {
        backgroundImage: `url(${img})`
    }
    return (
        <div id='project-component' style={styling}>
            <div></div>
            <p>project description</p>

            <div>
                <a href={liveSiteUrl} target='_blank' rel='noreferrer'> 
                    <button>LIVE SITE</button>
                </a>

                <a href={githubUrl} target='_blank' rel='noreferrer'>
                    <button>GIT HUB</button>
                </a>
            </div>
        </div>
    )
}

export default Project

//background is going to be the image, buttons directing to the live site and the github repo
//on hover, blur and description pop up 
