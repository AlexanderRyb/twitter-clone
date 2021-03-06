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
import { ReactComponent as Home } from "../Icons/home.svg";

function LeftSidebar() {
  return (
    <div className="leftSidebar">
      <nav>
        <a className="nav-element" href="/#">
          <TwitterLogo className="icon" ></TwitterLogo>
        </a>

        <a className="nav-element" href="/#">
          <Home className="icon"></Home>
          Home
        </a>
        <a className="nav-element" href="/#">
          <Hashtag className="icon"></Hashtag>
          Explore
        </a>
        <a className="nav-element" href="/#">
          <Bell className="icon"></Bell>
          Notifications
        </a>
        <a className="nav-element" href="/#">
          <Letter className="icon"></Letter>
          Messages
        </a>
        <a className="nav-element" href="/#">
          <Bookmark className="icon"></Bookmark>
          Bookmarks
        </a>
        <a className="nav-element" href="/#">
          <List className="icon"></List>
          Lists
        </a>
        <a className="nav-element" href="/#">
          <Profile className="icon"></Profile>
          Profile
        </a>
        <a className="nav-element" href="/#">
          <More className="icon"></More>
          More
        </a>
        <button className="left-button">Tweet</button>

      </nav>
    </div>
  );
}
export default LeftSidebar;
