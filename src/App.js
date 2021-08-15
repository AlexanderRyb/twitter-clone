import './App.scss';
import LeftSidebar from './Components/Left-sidebar';
import Feed from './Components/Feed';
import RightSidebar from './Components/Right-sidebar';
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
