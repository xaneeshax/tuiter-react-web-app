const PostSummaryListItem = (item) => {
    return(`
        <div class="wd-img-post-container list-group-item">
            <div class="wd-img-post">
                <div class="wd-news-part">
                    <p class="wd-news-post">
                    <div class="wd-subheading">${item.topic}</div>
                        <div class="wd-title">
                            <b>${item.userName}</b>
                            <i class="fa-solid fa-circle-check"></i>
                            <span class="wd-gray">- ${item.time}</span>
                        </div>
                        <div class="wd-mheading">
                            <b>${item.title}</b>
                        </div> 
                        <div class="wd-subheading">${item.tweets} Tweets</div>
                    </p> 
                </div>
                <div class="wd-image-part">
                    <img class="wd-news-size" src="${item.image}"/>
                </div>
            </div>
        </div> 
    `);
  }
  export default PostSummaryListItem;