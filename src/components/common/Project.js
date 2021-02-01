import React from 'react'

function Project({ title, img, description, liveSiteUrl, githubUrl, skills }) {

    const displayTech = (skills) => {
        return skills.map(skill => (
            <li>
                {skill}
            </li>
        ))

    }

    return (
        <div id='project-component'>
            
            <div className='project-info'>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul id= 'tech'>
                    {displayTech(skills)}
                </ul>


                <div id='site-links'>
                    <a href={liveSiteUrl} target='_blank' rel='noreferrer'> 
                        <button>LIVE SITE</button>
                    </a>

                    <a href={githubUrl} target='_blank' rel='noreferrer'>
                        <button>GIT HUB</button>
                    </a>
                </div>
            </div>

            <img className='project-image' src={img}/>
            
        </div>
    )
}

export default Project

//background is going to be the image, buttons directing to the live site and the github repo
//on hover, blur and description pop up 
