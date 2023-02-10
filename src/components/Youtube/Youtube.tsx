import React from "react";
import Youtube from "react-youtube";


import {
  youtubeUrlParser,
  IYoutubeProps,
  opts
} from "./youtubeHelper";


export const YoutubeVideo = ({ videoUrl }: IYoutubeProps): JSX.Element => {
  console.log("Trying to render the yt video");
  const videoId = youtubeUrlParser(videoUrl);
  if (videoId == null) {
    return (
      <h1>Error loading youtube video...</h1>
    );
  }
  return (
  <>
    <Youtube videoId={videoId} opts={opts} />
  </>
  );
};
