import React, { useState } from "react";
import Youtube, { YouTubeProps } from "react-youtube";

// helper functions
import {
  IYoutubeProps, ITrackName,
  youtubeUrlParser, AddPlaylist, toggleAddPlaylist,
  tempList
} from "./MusicHelper";




// TODO support playlists, elements on the right being videos
    // TODO way to add a playlist
    // TODO can parse it and display names of videos in playlist



// TODO can click on said videos to change to them
// TODO some kind of menu system to change between playlists
// TODO add/remove/alter playlists?
// TODO elements on the right could be video "tags" or whatever those are
//      timestamps or those
// TODO possibly scan the comments if there is no ready
//
// TODO audio on
// TODO make it the correct size
//      later make it scale with screen size






const YoutubeVideo = ({ videoUrl }: IYoutubeProps): JSX.Element => {

  console.log("Trying to render the yt video");
  const videoId = youtubeUrlParser(videoUrl);

  if (videoId === "error") {
    return (
      <h1>Error loading youtube video</h1>
    );
  }

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      // TODO for testing purposes lol
      autoplay: 0,
      controls: 0,
      loop: 1,
      // TODO this will be useful
      // playlist: []
    },
  };

  return (
  <>
    <Youtube videoId={videoId} opts={opts} />
  </>
  );
};






// the button controlling the input form. The jsx element
// both the button and the form
const MusicControl = (): JSX.Element => {

  const [showAddPlaylist, setShowAddPlaylist] = useState(false);
  console.log("Showing add playlist form:", showAddPlaylist);

  // if the input is showing, display "hide" on the button, not "add playlist"
  // as that closes the input bar
  const buttonName = showAddPlaylist ? "Hide": "Add playlist";

  return (
    <>
      <button className="musicControl" onClick={() => toggleAddPlaylist(showAddPlaylist, setShowAddPlaylist)}>{buttonName}</button>
      {showAddPlaylist ? (
        <AddPlaylist />
      ) : (
        null
      )}
    </>
  );
};






// The list of songs displayed next to the video
const Track = ({ name }: ITrackName) => {
  return <p className="track">{name}</p>;
};

const MusicList = () => {
  // no duplicate names!!
  const listOfTracks = tempList;
  return (
  <>
    <div className="tracks">
      {listOfTracks.map(track => <Track name={track} key={track}/>)}
    </div>
  </>
  );};




// the complete music component
// format being roughtly
// YT video     MusicList
//              MusicControl
export const Music = () => {
  return (
    <>
    <div className="musicwrapper">
      <div className="music">
        {/* <MusicImage /> */}
        <YoutubeVideo videoUrl={"https://www.youtube.com/watch?v=g9gHC2quF3A"}/>
        <MusicList />
      </div>
      <MusicControl />
    </div>
    </>
  );
};
