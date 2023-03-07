import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

function SingleBeer(){
    const id = useParams().id
    console.log(id)
    const [e, setData] = useState({})
    useEffect(() => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }, [id])
    return(
        <div>
            <h1>A beer</h1>
            <div className='aBeer'>
                <img src={e.image_url} alt="beer pic" />
                <div>
                    <h2>{e.name}</h2>
                    <h3>{e.tagline}</h3>
                    <p>Created by: {e.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleBeer