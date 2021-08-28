import React from "react";
import "./feed.scss";
import { ReactComponent as MoreAlt } from "../Icons/more-alt.svg";
import { ReactComponent as Reply } from "../Icons/reply.svg";
import { ReactComponent as Retweet } from "../Icons/retweet.svg";
import { ReactComponent as Like } from "../Icons/like.svg";
import { ReactComponent as Share } from "../Icons/share.svg";


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
              <Reply className="icon"></Reply>
              <Retweet className="icon"></Retweet>
              <Like className="icon"></Like>
              <Share className="icon"></Share>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Feed;
