import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
      <p className="hidden w-1/3 py-6 text-sm md:inline-block">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="px-3 py-1 text-xl text-black bg-white rounded-lg md:py-4 md:px-12 hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="hidden p-4 px-12 mx-2 text-xl text-white bg-gray-500 bg-opacity-50 rounded-lg md:inline-block">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
