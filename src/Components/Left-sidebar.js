import React from 'react'
import './lsidebar.scss'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core"
import {fas} from "@fortawesome/free-solid-svg-icons"

library.add(fas);
function LeftSidebar(){

    return(
<div className="leftSidebar">
<nav>
    <a>Twitter Icon</a>
    <a><FontAwesomeIcon icon={["fas", "home"]} />Home</a>
    <a><FontAwesomeIcon icon={["fas", "hashtag"]} /> Explore</a>
    <a> <FontAwesomeIcon icon={["fas", "fa-bell-o"]} />Notifications</a>
    <a> Messages</a>
    <a> <FontAwesomeIcon icon={["fas", "bookmark"]} />Bookmarks</a>
    <a> <FontAwesomeIcon icon={["fas", "list"]} />Lists</a>
    <a> <FontAwesomeIcon icon={["fas", "person"]} />Profile</a>
    <a> <FontAwesomeIcon icon={["fas", "more"]} />More</a>
    

</nav>
</div>
    )
}
export default LeftSidebar