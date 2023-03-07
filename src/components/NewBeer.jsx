import axios from "axios"
import { useState } from "react"

function NewBeer(){
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [firstBrewed, setFirstBrewed] = useState('')
    const [brewerTips, setBrewerTips] = useState('')
    const [attenuationLvl, setAttenuationLvl] = useState('')
    const [contributor, setContributor] = useState('')
    return(
        <form onSubmit={() => {
            let newBeer = {
                name: name,
                tagline: tagline,
                brewers_tips: brewerTips,
                first_brewed: firstBrewed,
                description: description,
                attenuation_level: attenuationLvl,
                contributed_by: contributor
            }
            axios     
                .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
                .then((response) => {
                    console.log(response.status);
                })
                .catch((error) => console.log(error));
        }}> 
            <label htmlFor="">
                Name
                <input type="text" onChange={(event) => {setName(event.target.value)}}/>
            </label>
            <label htmlFor="">
                Tagline
                <input type="text" onChange={(event) => {setTagline(event.target.value)}}/>
            </label>
            <label htmlFor="">
                Description
                <textarea type="text" onChange={(event) => {setDescription(event.target.value)}}></textarea>
            </label>
            <label htmlFor="">
                First Brewed
                <input type="text" onChange={(event) => {setFirstBrewed(event.target.value)}}/>
            </label>
            <label htmlFor="">
                Brewer Tips
                <input type="text" onChange={(event) => {setBrewerTips(event.target.value)}}/>
            </label>
            <label htmlFor="">
                Attenuation Level
                <input type="text" onChange={(event) => {setAttenuationLvl(event.target.value)}}/>
            </label>
            <label htmlFor="">
                Contributed by: 
                <input type="text" onChange={(event) => {setContributor(event.target.value)}}/>
            </label>
            <button>ADD NEW</button>
        </form>
    )
}

export default NewBeer