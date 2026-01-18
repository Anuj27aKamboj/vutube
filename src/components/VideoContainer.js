import React, { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    try {
      const videosData = await fetch(YOUTUBE_VIDEO_API);
      const json = await videosData.json();
      setVideosList(json.items);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="px-6 pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {videosList.map((videoItem) => (
        <Link key={videoItem.id} to={"/watch?v=" + videoItem.id}>
          <VideoCard  info={videoItem} />
        </Link>
      ))}
    </div>
    </div>
  );
};

export default VideoContainer;
