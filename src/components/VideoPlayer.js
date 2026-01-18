import React from "react";
import ActionBar from "./ActionBar";

const VideoPlayer = ({ searchParams }) => {
  return (
    <div>
      <div className="flex flex-col w-full aspect-video bg-black rounded-lg overflow-hidden">
        <iframe
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg w-full h-full"
        ></iframe>
      </div>
      <div className="flex justify-between items-center mt-3">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <img src="/user-icon.png" alt="channel logo" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm font-semibold">Channel Name</p>
            <p className="text-xs text-gray-500">1.2M subscribers</p>
          </div>
          <button className="ml-4 px-4 py-2 rounded-full bg-black text-white text-sm font-medium">
            Subscribe
          </button>
        </div>

        {/* RIGHT */}
        <ActionBar />
      </div>
    </div>
  );
};

export default VideoPlayer;
