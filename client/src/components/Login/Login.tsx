import React from "react";
import Button from "@/components/Button";

import spotifyLogo from "@/assets/spotify.png";

const clientId = import.meta.env.VITE_CLIENT_ID;
const redirectUrl = import.meta.env.VITE_REDIRECT_URL;
const apiUrl = import.meta.env.VITE_API_URL;
const scopes = import.meta.env.VITE_SCOPES;

export default function Login() {
  
  const handleClick = () => {
    const requestURL = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes}&response_type=token&show_dialog=true`;
    window.location.href = requestURL;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen pb-20 bg-black lg:pb-40 lg:min-h-[400px]">
        <img src={spotifyLogo} alt="Spotify Logo" className="w-24 mb-10"/>
        <Button size="lg" variant="filled" type="button" className="w-fit" onClick={handleClick}>
          Connect with Spotify
        </Button>
    </div>
  );
}
