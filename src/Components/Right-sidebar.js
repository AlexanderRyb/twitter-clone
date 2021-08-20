import React from 'react'
import './rsidebar.scss'

function RightSidebar(){
    return(
<div className="rightSidebar">
<input type="text" placeholder="Search Twitter" className="search-input"></input>
<div className="trends-block">
<h1>Trends for you</h1>

<div className="trend">
<p>Politics Trending</p>
<h1>#China</h1>
<p>18.1K Tweets</p>
</div>
</div>
</div>
    )
}
export default RightSidebar