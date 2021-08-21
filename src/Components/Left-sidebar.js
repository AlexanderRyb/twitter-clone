import React from "react";
import "./lsidebar.scss";
import { ReactComponent as TwitterLogo } from "../Icons/twitter.svg";
import { ReactComponent as Bookmark } from "../Icons/bookmark.svg";
import { ReactComponent as Hashtag } from "../Icons/hashtag.svg";
import { ReactComponent as Letter } from "../Icons/letter.svg";
import { ReactComponent as List } from "../Icons/list.svg";
import { ReactComponent as More } from "../Icons/more.svg";
import { ReactComponent as Profile } from "../Icons/profile.svg";
import { ReactComponent as Bell } from "../Icons/bell.svg";

function LeftSidebar() {
  return (
    <div className="leftSidebar">
      <nav>
        <a href="/#">
          <TwitterLogo className="icon"></TwitterLogo>
        </a>
        
        <a href="/#">Home</a>
        <a href="/#">
          <Hashtag className="icon"></Hashtag>
          Explore
        </a>
        <a href="/#">
          <Bell className="icon"></Bell>
          Notifications
        </a>
        <a href="/#">
          <Letter className="icon"></Letter>
          Messages
        </a>
        <a href="/#">
          <Bookmark className="icon"></Bookmark>
          Bookmarks
        </a>
        <a href="/#">
          <List className="icon"></List>
          Lists
        </a>
        <a href="/#">
          <Profile className="icon"></Profile>
          Profile
        </a>
        <a href="/#">
          <More className="icon"></More>
          More
        </a>
      </nav>
      <button>
        Tweet
      </button>
    </div>
  );
}
export default LeftSidebar;
