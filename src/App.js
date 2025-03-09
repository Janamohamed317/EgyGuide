import "./App.css";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import { Routes, Route, useLocation } from "react-router-dom";
import UserInput from "./components/UserInput/UserInput";
import TripPlan from "./components/TripPlan/TripPlan";
import Admin from "./components/AdminPanel/Admin";
import Users from "./components/Users/Users";
import Home from "./components/Home/Home";
import Cities from "./components/Cities/Cities";
import EditCity from "./components/EditCity/EditCity";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";

function App() {


  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditCity />} />
        <Route path="/trip-input" element={<UserInput />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Trip-plan" element={<TripPlan />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Admin/Users" element={<Users />} />
        <Route path="/Admin/Govs" element={<Cities />} />
        <Route path="/Currency-Converter" element={<CurrencyConverter />} />
      </Routes>
      
    </div>
  );
}

export default App;