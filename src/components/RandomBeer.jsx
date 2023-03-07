import axios from "axios"
import { useEffect, useState } from "react"

function RandomBeer(){
    const [e, setBeer] = useState('')
    useEffect(() => {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(response => {setBeer(response.data)})
        .catch(error => console.log(error))
    }, [])
    return(
        <div>
            <div className='singleBeer'>
                <img src={e.image_url} alt="beer pic" />
                <div>
                    <h2>{e.name}</h2>
                    <h3>{e.tagline}</h3>
                    <p>{e.attenuation_level}</p>
                    <p>{e.first_brewed}</p>
                    <p>{e.description}</p>
                    <p>Created by: {e.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}

export default RandomBeer