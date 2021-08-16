import './App.scss';
import LeftSidebar from './Components/Left-sidebar';
import Feed from './Components/Feed';
import RightSidebar from './Components/Right-sidebar';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas);

function App() {
  return (
    <div className="App">
      <LeftSidebar></LeftSidebar>
     <Feed></Feed>
     <RightSidebar></RightSidebar>
    </div>
  );
}

export default App;
