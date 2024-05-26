import './App.css';
import { Routes , Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Developers from "./Components/Developers"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import Dashboard from './Components/Dashboard';
import EditProfile from './Components/EditProfile';
import AddExperience from './Components/AddExperience';
import AddEducation from './Components/AddEducation';
import Posts from './Components/Posts';
import UserProfile from './Components/UserProfile';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route path="/developers_profile" element={<Developers/>}/>
      <Route path="/sign_in" element={<SignIn/>}/>
      <Route path="/sign_up" element={<SignUp/>}/>
      <Route  path="/dashboard" element={<Dashboard/>}/>
      <Route path="/edit-profile" element={<EditProfile/>}/>
      <Route path="/add-experience" element={<AddExperience/>}/>
      <Route path="/add-education" element={<AddEducation/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/user-profile/:id" element={<UserProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
