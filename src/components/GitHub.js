import React, {useEffect, useState} from 'react';

//css import
import '../css/components/Home.css'


//axios import 
import axios from 'axios'

//component import 
import Spinner from './common/Spinner';

const GitHub = () => {
    //Setting up state that will be used for repos 
    const [data, setData] = useState([])
    //state for handling loader
    const [loading, setLoading] = useState(true)

    //use useEffect to run axios get repos from out github
    useEffect(() => {
        axios.get('https://api.github.com/users/Gabbytam/repos')
        .then((res)=> {
            //console.log(res.data)
            //use setData function and pass in the new value you want for data state 
            setData(res.data)
        })
        .then(() => {
            //we set another .then and inside use setLoading to change the value to false. this .then is only reached after the axios called is finished 
            setLoading(false)
        })
    }, [])

    const display = () => {
        //if Loading state is true, return the spinner, else, return the card. By default, loading is true
        if(loading){
            return(<Spinner />)
        } else {
            return data.map((card) => (
                <div key={card.id} className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <span className="card-title">{card.name}</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            ))
        }
    }

   
    return (
        <div className='container'>
            <h2>Gabrielle Tam's Portfolio</h2>
             {/* invoking our display function  */}
            <div className='row'>{display()}</div>
        </div>
        
    )
};

export default GitHub;

