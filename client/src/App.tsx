// @ts-nocheck

import { useEffect } from "react";

import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/Constants";
import Spotify from "./components/Login/Spotify";
import Login from "./components/Login/Login";
import "./App.css";

function App() {
  const [{ token }, dispatch] = useStateProvider();
  
  const handleTokenFromStorage = () => {
    const hash = localStorage.getItem("token");
    if (hash) {
      return hash;
    }
  }; 

  const setToken = (token) => {
    localStorage.setItem("token", token);
  };

  const handleTokenFromHash = () => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      setToken(token);
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  };
  
  useEffect(() => {
    const storedToken = handleTokenFromStorage();
  
    if (!token && !storedToken) {
      handleTokenFromHash();
    } else if (!token && storedToken) {
      dispatch({ type: reducerCases.SET_TOKEN, token: storedToken });
    }
  }, [token, dispatch]);

  return (
    <>
    {
      token ? <Spotify /> : <Login />
    }
    </>
  );
}

export default App;
