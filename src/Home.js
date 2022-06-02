import React, {useState, useEffect} from 'react';

const URL = 'https://official-joke-api.appspot.com/random_joke'


function Home() {
  const [setup, setJoke] = useState('');
  const [arrsetup, setArrSetup] = useState([]);


  const generateJoke = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setJoke(data.setup + "\n" + data.punchline)); 
  }
  
  useEffect(() => {
    generateJoke();
  }, []);

  
  useEffect (() =>{
    localStorage.setItem('new',JSON.stringify(setup));
  }, [setup])

  return (      
      <div className ="box">
        <h2>Random joke!</h2>
        <h3>{setup}</h3>
        <button onClick = {generateJoke}> New Joke! </button>
        <button>Save Joke</button>
      </div>
  ); 
    
}

export default Home;