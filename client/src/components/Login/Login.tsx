import React from "react";
import Button from "@/components/Button";

import spotifyLogo from "@/assets/spotify.png";

export default function Login() {
  
  const handleClick = () => {
    const clientId = "5502837e8d1843c78853847792918fa0";
    const redirectUrl = "http://localhost:5173/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scopes = [
      "user-read-private", 
      "user-read-email", 
      "user-read-playback-state", 
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played"
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(" ")}
    &response_type=token&show_dialog=true`;
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
