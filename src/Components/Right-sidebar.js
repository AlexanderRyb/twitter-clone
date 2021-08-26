import React from 'react'
import './rsidebar.scss'
//import { ReactComponent as Search } from "../Icons/search.svg";
import { ReactComponent as Settings } from "../Icons/settings.svg";


function RightSidebar(){
    return(
<div className="rightSidebar">
<input type="text" placeholder="Search Twitter" className="search-input">
</input>
<div className="trends-block">
<h1>Trends</h1>
<Settings className="icon"></Settings>
<div className="trend">
<p>Politics Trending</p>
<h2>#China</h2>
<p>18.1K Tweets</p>
</div>
<div className="trend">
<p>Politics Trending</p>
<h2>#Telegram</h2>
<p>293K Tweets</p>
</div>
<div className="trend">
<p>Politics Trending</p>
<h2>#Telegram</h2>
<p>293K Tweets</p>
</div>
<div className="trend">
<p>Politics Trending</p>
<h2>#Telegram</h2>
<p>293K Tweets</p>
</div>
</div>

<div className="follow-block">
<h1>Who to follow</h1>
<div className="follow">
<div>
    <p>icon</p>
</div>
</div>
</div>
<footer>
    <p>Terms of Service</p>
    <p>Privacy Policy</p>
    <p>Cookie Policy</p>
    <p>Ads info</p>
    <p>More </p>
    <p>2021 Twitter, Inc</p>



</footer>
</div>
    )
}
export default RightSidebar