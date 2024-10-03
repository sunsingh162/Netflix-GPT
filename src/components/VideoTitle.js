import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen px-24 text-white bg-gradient-to-r from-black aspect-video pt-[20%]">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="w-1/4 py-4 text-sm">{overview}</p>
      <div className="p-2">
        <button className="p-3 px-8 text-xl text-black bg-white rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="p-3 px-6 mx-2 text-xl text-white bg-gray-500 bg-opacity-50 rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
