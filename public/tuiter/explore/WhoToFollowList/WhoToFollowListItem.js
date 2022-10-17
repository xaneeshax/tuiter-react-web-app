const WhoToFollowListItem = (who) => {
    return(`
      <li class="list-group-item">
        <div class="row">
          <div class="wd-follow-post-container">
            <div class="wd-follow-post">
              <div class="wd-follow-image-part">
                <img 
                  src="${who.avatarIcon}"
                  class="rounded-circle" 
                  height="50"
                  alt="..."
                >
              </div>
              <div class="wd-follow-news-part">
                <div class="col">
                  <div class="row wd-follow-text">
                    <b>${who.userName} <i class="fa-solid fa-circle-check"></i></b>
                    <div>@${who.handle}</div>
                  </div>
                </div>
              </div>
              <div class="wd-follow-button-part">
                <a href="#" class="btn btn-primary rounded-pill">Follow</a>
              </div>
            </div>
          </div>
        </div>
      </li>
    `);
  }
  export default WhoToFollowListItem;