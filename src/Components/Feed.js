import React from 'react'
import './feed.scss';

function Feed(){
    return(
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

        <h3 className="user-name">John Smith</h3>
     <p className="account-name">@accountname</p>

     <p className="tweet-text">Tweet text lorem ipsum</p>

     <p>reply</p>
     <p>retweet</p>
     <p>like</p>
     <p>share</p>
        </div>   
    </div>
   
    </div>
</div>
    )
}
export default Feed