import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheSearch } from "../utils/searchSlice";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store)=>store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSearchSuggestions(searchCache[searchQuery])
      }else{
        getSearchSuggestions()
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // if(!searchQuery) return;

  const getSearchSuggestions = async () => {
    try {
      const searchData = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const searchJson = await searchData.json();
      setSearchSuggestions(searchJson[1]);
      dispatch(cacheSearch({
        [searchQuery]: searchJson[1],
      }))
    } catch (err) {
      console.log(err);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="fixed w-full top-0 px-4 py-1 h-16 m-0 z-50 flex items-center justify-between bg-white border-b">
      <div className="flex items-center gap-2">
        {/* Logo Container */}
        <img
          onClick={() => toggleMenuHandler()}
          alt="menu-image"
          src="./menuImage.png"
          className="w-11 h-11 py-2 px-3 rounded-full hover:bg-gray-100 hover:cursor-pointer"
        />
        <a href="/">
          <img
            alt="app-logo"
            src="./vutube-logo.png"
            className="w-24 h-10 p-2 mx-2 my-auto hover:cursor-pointer"
          />
        </a>
      </div>
      <div className="flex flex-col w-[35%]">
        {/* Search Container */}
        <div className="flex w-full items-center">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=> setShowSuggestions(true)}
            onBlur={()=> setShowSuggestions(false)}
            className="border border-gray-300 rounded-l-full w-full px-7 py-2 focus:outline-none focus:border-blue-500"
          />
          <button className="border border-gray-400 border-l-0 rounded-r-full px-6 py-2 bg-gray-50 hover:bg-gray-200">
            <img
              alt="search-icon"
              src="./search-icon.png"
              className="w-7 h-6"
            />
          </button>
        </div>
        {showSuggestions && <div className="absolute w-[30%] mt-12 bg-white rounded-lg shadow-sm shadow-black">
          {/* Search Suggestion Container */}
          <ul className="px-2 py-2">
            {searchSuggestions.map((item) =>  <li key={item} className="flex items-center mb-1 py-2 px-2 rounded-lg hover:bg-gray-200 cursor-pointer">
               <img
              alt="search-icon"
              src="./search-icon.png"
              className="w-4 h-4 mr-2"
            />{item}</li>)}
          </ul>
        </div>}
      </div>

      <div className="flex items gap-2">
        {/* Profile Container */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition relative">
          <img
            src="./notification-icon.png"
            alt="notifications"
            className="w-6 h-6"
          />
        </button>
        <button className="w-8 h-8 my-auto mx-2 rounded-full overflow-hidden hover:opacity-90 hover:bg-gray-100 transition">
          <img
            src="./user-icon.png"
            alt="user-icon"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  );
};
