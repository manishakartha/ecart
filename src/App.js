import logo from './logo.svg';
import './App.css';
import TopNav from './Component/TopNav';
import CatNav from './Component/CatNav';
import MainComponenet from './Component/MainComponent';
// import SideNav from './Component/SideNav';

function App() {
  return (
    <div className="App">
    <TopNav/>
    <CatNav/>
    <MainComponenet/>

    </div>
  );
}

export default App;
