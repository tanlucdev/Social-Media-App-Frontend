import "./App.scss"
import Home from "./page/home/Home"
import Profile from "./page/Profile/Profile";
import Auth from "./page/Auth/Auth";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      {/* <Home /> */}
      <Profile />
      {/* <Auth /> */}
    </div>

  );
}

export default App;
