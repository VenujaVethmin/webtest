import React from "react";

export default function Card({ url, artist, source_url }) {
  return (
    <div>
      <img className="photo-image" src={url} alt={artist} />
      <h1>Artist: {artist}</h1>
      <h1>Source: {source_url}</h1>
    </div>
  );
}
