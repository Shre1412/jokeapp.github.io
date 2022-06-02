import React, {useState} from 'react';

const getLocalItem = () =>{
    let list = localStorage.getItem('lists');
    console.log(list)

    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    }
    else{
        return[];
    }
}

function Search() {

    const [SearchJoke, setSearchJoke] = useState('');
    const [data, setData] = useState(getLocalItem());
 
    return(
        <div className = "box">
            <h2>Search for your Joke here! </h2>
            <input type = "text" placeholder = "Search for Joke here..." 
            onChange = {(event)=> {setSearchJoke(event.target.value)}} />
            <div className = "JokeBox">
                    {
                        data.filter((val) => {
                            if (SearchJoke == "") {
                                return val
                            } else if(val.toLowerCase().includes(SearchJoke.toLowerCase())){
                                return val
                            }
                        }).map((elem,key) => {
                            return(
                                <h3>{elem}</h3>
                            )
                        })
                    }
            </div>    
            
        </div>
    );
}

export default Search;

