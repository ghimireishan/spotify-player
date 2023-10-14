// @ts-nocheck

import { useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/Constants";
import Spotify from "./components/Login/Spotify";

function App() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({
        type: reducerCases.SET_TOKEN, token
      });
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
