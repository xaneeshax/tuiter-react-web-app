import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./who.js"

const WhoToFollowList = () => {
   return (`
       <ul class="list-group">
        ${
           whos.map(who => {
               return(WhoToFollowListItem(who));
           }).join('')
        }
       </ul>
`); }

export default WhoToFollowList;