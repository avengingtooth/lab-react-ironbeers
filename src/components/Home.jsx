import { Link } from "react-router-dom"
import allBeers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"

function Home(){
    return(
        <div>
            <h1>Home</h1>
            <div className="homeLinks">
                <img src={allBeers} alt="beers" />
                <Link to="/allBeers">
                    <h1>All Beers</h1>
                </Link>
            </div>
            <div className="homeLinks">
                <img src={newBeer} alt="new" />
                <Link to="/new">
                    <h1>Create Beer</h1>
                </Link>
            </div>
            <div className="homeLinks">
                <img src={randomBeer} alt="random" />
                <Link to="/random">
                    <h1>Random Beer</h1>
                </Link>
            </div>
        </div>
    )
}

export default Home