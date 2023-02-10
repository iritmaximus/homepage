import { YouTubeProps } from "react-youtube";

export interface IYoutubeProps {
  videoUrl: string
}


export const opts: YouTubeProps["opts"] = {
  playerVars: {
    autoplay: 0,
    controls: 0,
    loop: 1,
  },
};






export const testThings = () => {
  fetchVideoDesc("https://www.youtube.com/watch?v=JJCFQtTPq_8");
};


export const youtubeUrlParser = (url:string): string | null => {
  if (url) {
    try {
      const urlId = url.split("v=")[1].split("&")[0];
      console.info(url, "->", urlId);
      return urlId;
    } catch (e) {
      console.error("Incorrect url,", e);
      return null;
    }
  }
  throw "No url given";
  return null;
};


const YOUTUBE_API_KEY = process.env.REACT_APP_API_KEY;
if (YOUTUBE_API_KEY == undefined) {
  console.error("Youtube API key not defined");
  process.exit(1);
}
const YOUTUBE_FETCH_PARS = ["snippet"];

const createApiUrlFromId = (videoId: string): string | null => {
  const apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=${YOUTUBE_FETCH_PARS}&id=${videoId}&key=${YOUTUBE_API_KEY}`;
  return apiUrl;
};
const createApiUrlFromUrl = (videoUrl: string): string | null => {
  const videoId = youtubeUrlParser(videoUrl);
  const apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=${YOUTUBE_FETCH_PARS}&id=${videoId}&key=${YOUTUBE_API_KEY}`;
  return apiUrl;
};


const fetchVideoDesc = async (videoIdentification: string) => {
  let videoApi;
  if (videoIdentification.length < 15) {
    videoApi = createApiUrlFromId(videoIdentification);
  } else {
    videoApi = createApiUrlFromUrl(videoIdentification);
  }

  if (videoApi == null) {
    return null;
  }
  const response = await fetch(videoApi);
  const data = await response.json();

  const description = data.items[0].snippet.description;
  const parsedSongs = parseVideoDescSongs(description);
  if (!parsedSongs) { return null; }
  console.info("list of songs:", parsedSongs);


  return;
};

const parseVideoDescSongs = (description: string): string[] | null => {
  try {
    const descList: string[] = description.split("\n");
    const songList: string[] = descList.filter(row => /^[0-9]{1,2}:[0-9]+/.test(row));
    return songList;
  } catch (e) {
    console.error("Error reading description for songs", e);
    return null;
  }
};
