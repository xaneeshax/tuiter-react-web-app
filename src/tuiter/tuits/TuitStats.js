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
//     <div>
//     Likes: {tuit.likes}
//     <i onClick={() => dispatch(updateTuitThunk({
//       ...tuit,
//       likes: tuit.likes + 1
//     })} className="bi bi-heart-fill me-2 text-danger"></i>
//   </div>
 );
};
export default TuitStats;