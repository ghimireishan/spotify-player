import React from "react";

interface PlaylistDetailProps {
  id: string
  name: string;
}

export default function PlaylistDetail({id, name}: PlaylistDetailProps) {
  return (
    <div>Hello you just clicked on {name} with an id of {id}.</div>
  );
}
