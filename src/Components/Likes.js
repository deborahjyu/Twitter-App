import React, { useState, useEffect } from 'react';
import emptyHeart from '../Photos/emptyHeart.png';
import redHeart from '../Photos/redHeart.webp';

const Counter = () =>{
    const [count, setCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const isLiked = () => {
        !liked ? setCount(count+1): setCount(count-1)
        setLiked(!liked)
        if (liked === 0 && liked){
            setCount(0)
        }
    }
useEffect(() => {
    setTimeout(()=> setCount(count+1), 5000);
}, []);

    return(
        <div style = {{display:'flex', paddingLeft: 20}}>
            <p>likes: {count}</p>
            <div onClick = {isLiked}>
            <img
            src = {liked ? redHeart : emptyHeart}
            width = "20"
            height = "20"
            alt = 'like button'
            />
            </div>


        </div>
    );
};

export default Counter;