import React from "react";
import "./feed.scss";
import { ReactComponent as MoreAlt } from "../Icons/more-alt.svg";

function Feed() {
  return (
    <div className="Feed">
      <div className="home-block">
        <h1>Home</h1>
      </div>
      <div className="new-tweet-block">
        <div className="profile-pic"></div>
      </div>
      <div className="tweets-block">
        <div className="tweet">
          <div className="profile-pic-block">
            <div className="profile-pic"></div>
          </div>
          <div className="tweet-content-block">
              <div className="tweet-data">
              <h4 className="user-name">John Smith</h4>
            <p className="account-name">@accountname ·</p>
            <p className="time-stamp">14m</p>
            <MoreAlt className="icon more-icon"></MoreAlt>
              </div>
         

            <p className="tweet-text">Tweet text lorem ipsum</p>

            <div className="tweet-actions">
              <p>reply</p>
              <p>retweet</p>
              <p>like</p>
              <p>share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Feed;
