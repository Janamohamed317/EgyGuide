import { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
export const AppContext = createContext(null);

const AppContextProvider = (props) => {
  const [cities, setCities] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cameraClicked, setCameraClicked] = useState(false);
  const [userName, setUserName] = useState('');
  const [blogs, setBlogs] = useState([])
  const [userID, setUserID] = useState('');
  // const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(!!token);
      setUserName(localStorage.getItem('userName'))
      setUserID(localStorage.getItem('userID'))
    }
  }, []);


  const handleCheckboxChange = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userID");
    setUserName('');
    setUserID('');

    setIsLoggedIn(false);
    window.location.href = '/signin';
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://travelguide.runasp.net/api/Governorates');
        // console.log(response.data);

        setCities(response.data['$values']);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const contextValue = {
    setShowPassword,
    showPassword,
    handleCheckboxChange,
    isLoggedIn,
    setIsLoggedIn,
    handleLogout,
    cameraClicked,
    setCameraClicked,
    cities,
    setCities,
    userName,
    setUserName,
    blogs,
    setBlogs,
    userID,
    setUserID,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;