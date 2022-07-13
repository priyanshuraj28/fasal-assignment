import './App.css';
import Header from './components/Header';
import { Link, Redirect } from "react-router-dom"
import { Route, Switch } from "react-router-dom";
import Music from './components/Music';
import aaoge from "./images/aaoge jab tum.jpg";
import maa from "./images/maa.jpg";
import udaariyan from "./images/udaariyan.jpg";
import tum from "./images/tum hi ho.jpg";
import Artistdetails from "./components/Artistdetails";
import Artistheader from './components/Artistheader';
import AddNewSong from './pages/AddNewSong';
import Login from './components/Login';
import SignUp from './components/Signup';


function App() {
  return (
    <>
    <Header></Header>
    <Switch>
      <Route exact path="/">
        <Redirect to={"/login"}/>
      </Route>
      <Route exact path="/home">
        <div id="s">
          <div id="s1">Top 10 Musics</div>
          <Link id="s3" to="/AddNewSong">
            <div id="s2">+Add Music</div>
          </Link>
        </div>
        <div id="design1">
          <div className="subhead">
            <div id="sh">Artwork</div>
            <div id="sh">Song</div>
            <div id="sh">Date Of Release</div>
            <div id="sh">Artists</div>
            <div id="sh">Rate</div>
          </div>
          <Music
            Artwork={maa}
            song="Maa"
            dateOfRelease="May 12,2019"
            Artist="Shankar Mahadevan"
          />
          <Music
            Artwork={udaariyan}
            song="Udaariyan"
            dateOfRelease="July 16,2018"
            Artist="Satindar Sartaj"
          />
          <Music
            Artwork={tum}
            song="Tum hi ho"
            dateOfRelease="April 4,2013"
            Artist="Arijit Singh"
          />
          <Music
            Artwork={aaoge}
            song="Aaoge jab tum"
            dateOfRelease="May 30,2011"
            Artist="Rasid Khan"
          />
        </div>
        <Artistheader />
        <div id="design2">

          <div className="subhead">
            <div id="sh2">Artists</div>
            <div id="sh2">Date Of Birth</div>
            <div id="sh2">Song Name</div>
          </div>
          <Artistdetails
            name="Shankar Mahadevan"
            dob="3 March 1967"
            songslist="Maa,Koi Kahe Kahta Rahe "
          />
          <Artistdetails
            name="Sattindar Sartaj"
            dob="31 August 1982"
            songslist="Udaariyan,Kamaal ho Gea"
          />
          <Artistdetails
            name="Arijit Singh"
            dob="25 April 1987"
            songslist="Tum hi ho,Humdard,Naina"
          />
          <Artistdetails
            name="Rashid Khan"
            dob="1 July 1968"
            songslist="Aaoge Jab tum"
          />
        </div>
        {/* <Music/> */}
      </Route>
      <Route exact path="/AddNewSong">
        <AddNewSong />
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
      <Route exact path="/signup">
        <SignUp/>
      </Route>
    </Switch>
    </>

  );
}
export default App;
