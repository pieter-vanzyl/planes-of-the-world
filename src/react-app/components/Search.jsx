import React from 'react'
import searchimage from "../assets/search1.png";
import "../App.css";

const Search = ({ searchTerm, setsearchTerm }) => {return (
        <div className="container">
            <img src={searchimage} alt='search' width='40' height='40'/>

            <input 
                className='items-center justify-center rounded-md p-2 border-white text-white'
                type="text"
                placeholder="Search Planes"
                value={searchTerm}
                onChange={(event) => setsearchTerm(event.target.value)}
                />
        </div>
    )
}

export default Search
