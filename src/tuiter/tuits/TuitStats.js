import React from "react";
import './index.css';


const TuitStats = ({ post }
) => {
 return(
    <div class="wd-links">
        <i id="pic" class="fa-regular fa-comment">{post.replies} </i>
        <i id="heart-pic" class="fa-solid fa-heart">{post.likes} </i>
        <i id="pic" class="fa-solid fa-retweet">{post.retuits} </i>
        <i id="pic" class="fa-solid fa-upload"></i>
    </div>
 );
};
export default TuitStats;