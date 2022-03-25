import React, { useState } from "react";
import Tweet from "../Components/Tweet";

function SearchBar(){
    const[search, setSearch] = useState("");
    return(
        <div class = "search" style ={{textAlign: "screenLeft"}}>
            <input value ={search} placeholder = "search..." onChange = {setSearch}/>
            <button onClick = {() => setSearch()}>
                Search
            </button>
            {Tweet.filter((individualTweet)=> {return search.tweet.includes(setSearch)})}
        </div>
        

    );
}

export default SearchBar;