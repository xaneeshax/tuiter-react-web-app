import PostSummaryListItem from "./PostSummaryListItem.js";
import items from "./exploreItems.js"

const PostSummaryList = () => {
   return (`
    <div>
        <div class="row">
            <div class="col-11 position-relative wd-search">
                <input id="search-field" placeholder="Search Twitter"/>
                <i id="gear" class="fa-solid fa-gear"></i>
            </div>
        </div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="../for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../sports.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../entertainment.html">Entertainment</a>
            </li>
        </ul>
        <div class="wd-container">
            <img 
                src="./images/starship.webp" 
                class="img-fluid" 
                alt="Responsive image"
            > 
            <div class="wd-bottom-left"><b>SpaceX's Starship</b></div>
        </div> 
        <ul class="list-group">
        ${
           items.map(item => {
               return(PostSummaryListItem(item));
           }).join('')
        }
       </ul>
    </div>
`); }

export default PostSummaryList;
