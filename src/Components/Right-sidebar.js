import React from 'react'
import './rsidebar.scss'
//import { ReactComponent as Search } from "../Icons/search.svg";
import { ReactComponent as Settings } from "../Icons/settings.svg";
import { ReactComponent as More } from "../Icons/more-alt.svg";



function RightSidebar(){
    return(
<div className="rightSidebar">
<input type="text" placeholder="Search Twitter" className="search-input">
</input>
<div className="trends-block">
    <div className="trends-heading">
    <h1>Trends</h1>
<Settings className="icon"></Settings>
    </div>

<div className="trend">
    <div className="trend-row">
    <p>1·Trending</p>
<More className="icon"></More>
    </div>
<h3 className="trend-name">#China</h3>
<p className="retweet-number">18.1K Tweets</p>
</div>
<div className="trend">
    <div className="trend-row">
    <p>2·Football·Trending</p>
<More className="icon"></More>
    </div>
<h3 className="trend-name">Arsenal</h3>
<p className="retweet-number">1.05M Tweets</p>
</div>
<div className="trend">
    <div className="trend-row">
    <p>3·Sports·Trending</p>
<More className="icon"></More>
    </div>
<h3 className="trend-name">Ronaldo</h3>
<p className="retweet-number">1.1M Tweets</p>
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