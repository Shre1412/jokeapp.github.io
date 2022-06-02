import React, {useState, useEffect} from 'react';


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

function AddJoke() {

    const [InputJoke, setInputJoke] = useState('');
    const [Items, setItem] = useState(getLocalItem()); 

    const AddItem = () =>{
        setItem([...Items, InputJoke]);
        setInputJoke('');
    }

    const RemoveAll = () => {
        setItem([]);
    }

    useEffect (() =>{
        localStorage.setItem('lists',JSON.stringify(Items));
    }, [Items]);

    return(
        <div className = "box">
            <h2>Add you Joke Here!</h2>
            <div>
                <div className = "textbox">
                    <input type = "text" placeholder = "Enter Joke Here...." 
                    value = {InputJoke} onChange = {(e) => setInputJoke(e.target.value)} />
                    <button onClick = {AddItem}>Add Joke!</button>
                </div>
                <div className = "JokeBox">
                    {
                        Items.map((elem,key) => {
                            return(
                                <h3>{elem}</h3>
                            )
                        })
                    }
                </div>
                <button onClick = {RemoveAll}>Clear!</button>
            </div>

         </div>
    );
}

export default AddJoke;