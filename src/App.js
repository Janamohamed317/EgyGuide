import "./App.css";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import { Routes, Route} from "react-router-dom";
import UserInput from "./components/UserInput/UserInput";
import TripPlan from "./components/TripPlan/TripPlan";
import Admin from "./components/AdminPanel/Admin";
import Home from "./components/Home/Home";
import EditCity from "./components/EditCity/EditCity";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import ExploreEgypt from "./components/ExploreEgypt/ExploreEgypt";
import Blogs from "./components/Blogs/Blogs";
import Profile from "./components/Profile/Profile";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/edit" element={<EditCity />} /> */}
        <Route path="/trip-input" element={<UserInput />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Trip-plan" element={<TripPlan />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Currency-Converter" element={<CurrencyConverter />} />
        <Route path="/Explore-Egypt" element={<ExploreEgypt />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/profile" element = {<Profile />} />
      </Routes>

    </div>
  );
}

export default App;