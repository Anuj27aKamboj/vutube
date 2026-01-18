import React from "react";

const Comment = ({ data }) => {
  const { author, avatar, text, likes, time } = data;
  return (
    <div className="flex gap-3 mt-4 ml-2">
      <img className="w-8 h-8 rounded-full mr-2" src={avatar} alt="user" />
      <div>
        <p className="text-md font-semibold">
          {author} <span className="text-xs ml-1 text-stone-500">{time}</span>
        </p>
        <p className="text-sm">{text}</p>
        <p className="mt-1 flex text-xs">
          <span className="flex mr-5"><img
            className="w-4 h-4 rounded-full mr-2"
            src="/like-icon.png"
            alt="like"
          />
          {likes}</span>
          <span className="flex"><img
            className="w-4 h-4 rounded-full mr-2 rotate-180"
            src="/like-icon.png"
            alt="like"
          />
          0</span>
        </p>
      </div>
    </div>
  );
};

export default Comment;
