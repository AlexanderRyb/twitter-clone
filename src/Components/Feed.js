import React from 'react'
import './feed.scss';
function Feed(){
    return(
<div className="Feed">
    <div className="home-block">
        <h1>Home</h1>
    </div>
    <div className="new-tweet-block">

    </div>
    <div className="tweets-block">
    <div className="tweet">
     <h2>User name</h2>
     <p>@accountname</p>
     <p>Tweet text</p>
     <p>reply</p>
     <p>retweet</p>
     <p>like</p>
     <p>share</p>
    </div>
    <div className="tweet">
     <h2>User name</h2>
     <p>@accountname</p>
     <p>Tweet text</p>
     <p>reply</p>
     <p>retweet</p>
     <p>like</p>
     <p>share</p>
    </div>
    </div>
</div>
    )
}
export default Feed