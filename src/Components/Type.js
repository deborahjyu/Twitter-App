import React, { useState } from "react";
import Tweet from "../Components/Tweet";

function Type(){
    const[name, setName] = useState("");
    const[username, setUser] = useState("");
    const[tweet, setTweet] = useState("");
    const[time, setTime] = useState("");  
    const[date, setDate] = useState("");
    const[wholeTweet, setWholeTweet] = useState([]);
    return(
        <div style ={{textAlign: "screenLeft"}}>
            <input value ={name} placeholder = "name" onChange = {(e) => setName(e.target.value)}/>
            <input value ={username} placeholder = "username" onChange = {(e) => setUser(e.target.value)}/>
            <input value ={tweet} placeholder = "tweet" onChange = {(e) => setTweet(e.target.value)}/>
            <input value ={time} placeholder = "time" onChange = {(e) => setTime(e.target.value)}/>
            <input value ={date} placeholder = "date (month day)" onChange = {(e) => setDate(e.target.value)}/>
            <br></br>
            <button onClick = {() => setWholeTweet([...wholeTweet, {name: name, username: username, tweet: tweet, time: time, date: date}])}>
                Create Tweet
            </button>
            {wholeTweet.map((tweet1, i) => (
                <Tweet name ={tweet1.name} username = {tweet1.username} tweet= {tweet1.tweet} time = {tweet1.time} date = {tweet1.date} key ={i}/>
            ))}
        </div>

    );
}

export default Type;