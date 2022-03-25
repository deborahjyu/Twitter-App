import React, { useState } from 'react';
import retweet from '../Photos/retweet.png';
import retweeted1 from '../Photos/retweeted1.png';

const Counter = () =>{
    const [count, setCount] = useState(0);
    const [retweeted, setRetweet] = useState(false);
    const isRetweeted = () => {
        !retweeted ? setCount(count+1): setCount(count-1)
        setRetweet(!retweeted)
        if (retweeted === 0 && retweeted){
            setCount(0)
        }
    }
    return(
        <div style = {{display:'flex', paddingLeft: 20}}>
            <p>retweet: {count}  </p>
            <div className = 'likeContainer' onClick = {isRetweeted}>
                <img
                src = {retweeted ? retweeted1 : retweet}
                width = "20"
                height = "15"
                alt = 'retweet button'
                />
            </div>

        </div>
    );
};

export default Counter;