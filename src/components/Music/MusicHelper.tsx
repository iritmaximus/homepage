import React, { useState } from "react";

// placeholder for videos
import gif from "../../assets/lofihiphop.gif";

// type definitions
export type MusicControlState = React.Dispatch<React.SetStateAction<boolean>>
export type NewPlaylistState = React.Dispatch<React.SetStateAction<string>>
export type InputEvent = React.ChangeEvent<HTMLInputElement>


// interface definitions
// no duplicate names yet
export interface ITrackName {
  name: string,
  key: string
}
export interface IYoutubeProps {
  videoUrl: string
}

export const tempList = [
  "Some jazzy music",
  "Some more jazzy music",
  "Some chill music",
  "Very chill",
  "HC vibez",
  "Nintendo music",
  "Zelda music",
  "Winter nintendo music",
  "Calm nintendo music"
];



export const LofiVideo = (): JSX.Element => {
  return (
  <>
    <div className="gif">
      <img src={gif} alt="Chill gif" />
    </div>
  </>
  );
};




export const youtubeUrlParser = (url:string): string => {

  if (url) {
    try {
      const urlId = url.split("v=")[1].split("&")[0];
      console.info(url, "->", urlId);
      return urlId;
    } catch (e) {
      console.error("Incorrect url");
      return "error";
    }
  }

  console.error("Incorrect url");
  return "error";
};






// Adds a playlist to being played
// asks the user for input through an ugly input form
// and parses that input to find the youtube video (playlist)
//
// TODO switch the video playing to the first song on the playlist
export const AddPlaylist = (): JSX.Element => {

  const [newPlaylist, setNewPlaylist] = useState("");

  const updatePlaylist = (e: InputEvent) => {
    setNewPlaylist(e.target.value);
  };

  const handleClick = () => {
    const youtubeId = youtubeUrlParser(newPlaylist);
    console.log(newPlaylist);
    console.log(youtubeId);
  };

  return (
    <>
      <input type="text" placeholder="Playlist id" onChange={updatePlaylist}/>
      <button onClick={handleClick}>Add button</button>
    </>
  );
};

// toggles the visibility of the input form
export const toggleAddPlaylist = (show: boolean, setShow: MusicControlState) => {
  setShow(!show);
};
