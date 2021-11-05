import React, {useState} from 'react';
import axios from 'axios';


const Search = () => {

    const [allPokemon, setAllPokemon] = useState([

    ])


    const getInfo = () => {
        axios.get("https://pokeapi.co/api/v2//pokemon/?limit=807")
        .then(response => {
            console.log(response);
            setAllPokemon(response.data.results)
        }).catch(err=>{
            console.log(err);
        });
    }


    return (
        <div className="container">
            <div className="form-group">
                <h1>Pokemon Search</h1>
                <button onClick={getInfo} className="btn btn-primary">Go!</button>
            </div>

            <br /><div>
                <h3>Gotta catch 'em all:</h3>
                {
                    allPokemon.map((pokemon,i) =>{
                        return (
                                <p key={i}>{pokemon.name}</p>
                        )
                    })
                }
            </div>
        </div>
    );
};


export default Search;


fetch("https://pokeapi.co/api/v2/pokemon")