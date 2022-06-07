import React, { useState } from "react";
import Tweet from "../Components/Tweet";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore/lite";

function Type(){
    const[name, setName] = useState("");
    const[username, setUser] = useState("");
    const[tweet, setTweet] = useState("");
    const[time, setTime] = useState("");  
    const[date, setDate] = useState("");
    const[search, setSearch] = useState("");
    const[wholeTweet, setWholeTweet] = useState([]); //array of tweets
    

    const submit = () =>{
        setWholeTweet([...wholeTweet, {
            name : name,
            username : username,
            tweet: tweet,
            time: time,
            date: date,
        }])

        const a = addDoc(collection(db,"tweets"),{
            name : name,
            username : username,
            tweet: tweet,
            time: time,
            date: date,
        })
        setName("");
        setUser("");
        setTweet("");
        setTime("");
        setDate("");
    }

    return(
        <div style ={{textAlign: "screenLeft"}}>
            <input value ={name} placeholder = "name" onChange = {(e) => setName(e.target.value)}/>
            <input value ={username} placeholder = "username" onChange = {(e) => setUser(e.target.value)}/>
            <input value ={tweet} placeholder = "tweet" onChange = {(e) => setTweet(e.target.value)}/>
            <input value ={time} placeholder = "time" onChange = {(e) => setTime(e.target.value)}/>
            <input value ={date} placeholder = "date (month day)" onChange = {(e) => setDate(e.target.value)}/>
            <br></br>
            <button onClick = {submit}>
                Create Tweet
            </button>
            <br></br>
            <input value ={search} placeholder = "search" onChange = {(e) => setSearch(e.target.value)}/>
            {wholeTweet.map((tweet1, i)=> (
                <Tweet name ={tweet1.name} username = {'@' + tweet1.username} tweet= {tweet1.tweet} time = {tweet1.time} date = {tweet1.date} key ={i+1}/>
            ))}
        </div>
    );
}

export default Type;

//            {wholeTweet.filter((indtweet)=> {return indtweet.tweet.includes(search)}).map((tweet1, i) => (
    //<Tweet name ={tweet1.name} username = {tweet1.username} tweet= {tweet1.tweet} time = {tweet1.time} date = {tweet1.date} key ={i+1}/>