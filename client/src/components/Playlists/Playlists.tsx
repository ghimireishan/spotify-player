import React from "react";
import axios, { AxiosError } from "axios";
import { useStateProvider } from "@/utils/StateProvider";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../Loading/Loading";
import PlaylistDetail from "./PlaylistDetail"; 

interface SpotifyUser {
    display_name: string;
    id: string;
    images: SpotifyImage[];
    name: string;
}

  interface SpotifyImage {
    height: number;
    url: string;
    width: number;
}

export default function Playlists() {
    const [{token}, dispatch] = useStateProvider();

    const getPlaylists = async () => {
        const res = await axios.get("https://api.spotify.com/v1/me/playlists?limit=50&offset=1", {
            headers : {
                    "Authorization" : `Bearer ${token}`,
                    "Content-Type" : "application/json"
                }
        }); 
        const playlists = res.data.items.map(({name, id, images, owner: {display_name}}) => {
            return {name, id, images, display_name};
        });
        return playlists;
    };

    const { isLoading, isError, data, error } = useQuery(["playlists"], getPlaylists);

    if (isError) {
        return (
            <div>
                <p className="mb-6">{error?.message}<br /> Couldn't fetch Playlists</p>
            </div>
            
        );
    }

    return (
        <div className="flex flex-col items-center justify-center">
            {isLoading ? <Loading /> : 
                data && <div className="flex flex-col self-start overflow-y-auto gap-y-8 max-h-[60vh] scrollbar">
                    {data.map((playlist: SpotifyUser) => {
                        const {name, id, images, display_name} = playlist;

                        return <div key={id} className="flex items-center gap-x-6">
                            <img src={images[0] && images[0].url} alt="Playlist image" className="w-[80px] h-[80px] rounded-full"/>
                            
                            <div className="basis[50%]">
                                <p className="text-lg">{name}</p>
                                <p className="text-sm text-gray-500">{display_name}</p>
                            </div>
                        </div>;
                    })}
                </div>
            }
        </div>
  );
}