import React from "react";

const NavigationSidebar = (
 {
   active = 'home'
 }
) => {
 return (
   <div className="list-group">
     <a className="list-group-item" href="https://github.com/xaneeshax/tuiter-react-web-app/tree/a6">Tuiter</a>
     <a className={`list-group-item
                    ${active === 'home'?'active':''}`} href="https://github.com/xaneeshax/tuiter-react-web-app/tree/a6">
       Home
     </a>
     <a className={`list-group-item
                    ${active === 'explore'?'active':''}`} href="https://github.com/xaneeshax/tuiter-react-web-app/tree/a6">
       Explore
     </a>
     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`} href="https://github.com/xaneeshax/tuiter-react-web-app/tree/a6">
       Notifications
     </a>
     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`} href="https://github.com/xaneeshax/tuiter-react-web-app/tree/a6">
       Messages
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`} href="https://github.com/xaneeshax/tuiter-react-web-app/tree/a6">
       Bookmarks
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`} href="https://github.com/xaneeshax/tuiter-react-web-app/tree/a6">
       Lists
     </a>
     <a className={`list-group-item
                    ${active === 'profile'?'active':''}`} href="https://github.com/xaneeshax/tuiter-react-web-app/tree/a6">
       Profile
     </a>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`} href="https://github.com/xaneeshax/tuiter-react-web-app/tree/a6">
       More
     </a>
   </div>
 );
};
export default NavigationSidebar;