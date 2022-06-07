import React, { useState } from "react";

function SearchBar(){
    const[search, setSearch] = useState("");
    return(
        <div class = "search" style ={{textAlign: "screenLeft"}}>
            <input value ={search} placeholder = "search..." onChange = {setSearch}/>
            <button onClick = {() => setSearch()}>
                Search
            </button>
        </div>
        

    );
}

export default SearchBar;