import React from "react";

const VideoCard = ({ info }) => {
  const formatViews = (views) => {
  const units = ["", "K", "M", "B"];
  let unitIndex = 0;

  while (views >= 1000 && unitIndex < units.length - 1) {
    views /= 1000;
    unitIndex++;
  }

  return `${views % 1 === 0 ? views : views.toFixed(1)}${units[unitIndex]}`;
};
  // console.log(info);
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className="cursor-pointer p-3 rounded-lg hover:bg-gray-200">
      <img
        alt="thumbnails"
        src={thumbnails?.standard?.url}
        className="w-full rounded-lg aspect-video object-cover"
      />
      <div className="flex gap-3 mt-3">
        <img className="w-9 h-9 rounded-full" src={thumbnails.default.url} alt="channel"/>
        <div>
          <h1 className="text-md font-semibold leading-snug line-clamp-2">
        {title}
      </h1>
      <h3 className="mt-1 text-sm text-gray-600">{channelTitle}</h3>
      <h3 className="text-sm text-gray-600">{formatViews(statistics.viewCount)} views</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
