import { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios"
export const AppContext = createContext(null);

const AppContextProvider = (props) => {
    const [cities, setCities] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [LoggedOut, setLoggedOut] = useState(true);
    const [cameraClicked, setCameraClicked] = useState(false);
    const [userName, setUserName] = useState('');
    const [blogs, setBlogs] = useState([])
    const handleCheckboxChange = () => {
        setShowPassword((prev) => !prev);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://travelguide.runasp.net/api/Governorates');
                console.log(response.data);
                // setCities(response.data);
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
        LoggedOut,
        setLoggedOut,
        cameraClicked,
        setCameraClicked,
        cities,
        setCities,
        userName,
        setUserName,
        blogs,
        setBlogs,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;