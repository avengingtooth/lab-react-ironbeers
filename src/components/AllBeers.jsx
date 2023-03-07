import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";

function AllBeers(){
    const [beers, updateBeers] = useState([])
    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                updateBeers(response.data)
            })
            .catch((error) => console.log(error));
    }, []);
    return(
        <div>
            <h1>all beers</h1>
            {
                beers.map((e, ind) => {
                    return(
                        <Link key={ind} className='beerList' to={`/${e._id}`}>
                            <img src={e.image_url} alt="beer pic" />
                            <div>
                                <h2>{e.name}</h2>
                                <h3>{e.tagline}</h3>
                                <p>Created by: {e.contributed_by}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default AllBeers