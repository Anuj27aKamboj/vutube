import React from "react";

const ActionBar = () => {
  return (
    <div className="flex gap-2">
      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <span className="flex"><img
            className="w-6 h-6 rounded-full mr-2"
            src="/like-icon.png"
            alt="like"
          />
          12K</span> 
      </button>
      <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <span className="flex"><img
            className="w-6 h-6 rounded-full mr-2"
            src="/share-icon.png"
            alt="like"
          />
          Share</span> 
      </button>
      <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <span className="flex"><img
            className="w-6 h-6 rounded-full mr-2"
            src="/download-icon.png"
            alt="like"
          />
          Save</span> 
      </button>
    </div>
  );
};

export default ActionBar;
