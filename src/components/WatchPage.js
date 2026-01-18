import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoPlayer from "./VideoPlayer";

const WatchPage = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div
      className={`absolute transition-all flex flex-col pt-5 duration-200 w-full h-screen ${
        isMenuOpen ? "pl-60" : "pl-20"
      }`}
    >
      <div className="flex justify-center">
        <div className="flex w-full max-w-[1600px] px-6">
          {/* LEFT */}
          <div className="w-[75%] pr-6">
            <VideoPlayer searchParams={searchParams} />
          </div>

          {/* RIGHT */}
          <div className="w-[25%] aspect-video">
            <LiveChat />
          </div>
        </div>
      </div>
      <div className="px-10 w-[75%]">
        {" "}
        {/* Comments Container */}
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
