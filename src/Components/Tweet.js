import React from "react";
import Likes from "../Components/Likes";
import Retweet from "../Components/Retweet";

const Tweet = props => {
    return (
    <div class = 'tweetstyle'>
        <p class= "name">{props.name}</p>
        <p class= "username">{props.username}</p>
        <p class= "tweet">{props.tweet}</p>
        <p class= "time">{props.time}</p>
        <p class= "date">{props.date}</p>
        <Likes/><Retweet/>
    </div>
    );
};
export default Tweet;