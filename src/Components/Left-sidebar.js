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
        <a>
          <TwitterLogo className="icon"></TwitterLogo>
        </a>
        
        <a>Home</a>
        <a>
          <Hashtag className="icon"></Hashtag>
          Explore
        </a>
        <a>
          <Bell className="icon"></Bell>
          Notifications
        </a>
        <a>
          <Letter className="icon"></Letter>
          Messages
        </a>
        <a>
          <Bookmark className="icon"></Bookmark>
          Bookmarks
        </a>
        <a>
          <List className="icon"></List>
          Lists
        </a>
        <a>
          <Profile className="icon"></Profile>
          Profile
        </a>
        <a>
          <More className="icon"></More>
          More
        </a>
      </nav>
    </div>
  );
}
export default LeftSidebar;
