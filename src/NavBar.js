import React from 'react';
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <ul>
            <li><Link to = "/Home">Random Joke!</Link></li>
            <li><Link to = "/AddJoke">Add a Joke Here!</Link></li>
            <li><Link to = "./Search">Search for your Joke</Link></li>
        </ul>
    )
}

export default NavBar;