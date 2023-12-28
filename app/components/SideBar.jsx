"use client";
import React, { useEffect, useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { RiMemoriesLine } from "react-icons/ri";
import { RiDashboardFill } from "react-icons/ri";
import { MdOutlineUpcoming } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaRegGrinStars } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";

import MovieCard from "./MovieCard";

const API_KEY = "bbfffe4ac469f4a5f2f2da89d8f4f461";
const API_URL = "https://api.themoviedb.org/3";

export const SideBar = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("popular"); // Default category

  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        `${API_URL}/movie/${selectedCategory}?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();

      console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryClick = (category) => {
    console.log("Selected Category:", category);
    setSelectedCategory(category);
    fetchPopularMovies();
  };

  useEffect(() => {
    fetchPopularMovies();
  }, [selectedCategory]);

  const [open, setOpen] = useState(true);

  const Menu = [
    {
      title: "Popular",
      icon: <FaRegGrinStars />,

      path: "popular",
    },

    {
      title: "Upcoming",
      icon: <MdOutlineUpcoming />,
      path: "upcoming",
    },
    { title: "Top Rated", icon: <RiMemoriesLine />, path: "top_rated" },
  ];

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <div className="flex overflow-hidden">
        <div
          className={`sticky left-0 top-0 z-20 dark:bg-gray-900 h-screen p-5 pt-8    ${
            open ? "w-48" : "w-20"
          } duration-300 relative`}
        >
          <BsArrowLeftShort
            className={`bg-white text-dark-purple text-2xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex">
            <img
              src="logo-icon.svg"
              alt="logo-icon"
              className={`text-white origin-left font-medium text-xl font-sans duration-300 border border-amber-600 rounded-md pr-1 pl-1 ${
                open && "hidden"
              }`}
            />

            <h1
              className={`text-white orgin-left font-medium text-xl font-sans duration-300 ${
                !open && "scale-0"
              }`}
            >
              <img src="logo.svg" alt="logo" className="w-30 h-30" />
            </h1>
          </div>
          <div
            className={`flex items-center rounded-md bg-light-white mt-6 ${
              !open ? "px-3" : "px-2"
            }  py-2`}
          >
            <BsSearch
              className={`text-white text-md block float-left  ${
                open && "mr-2"
              }`}
            />
            <input
              type={"text"}
              placeholder="Search"
              value={searchQuery}
              className={`text-md bg-transparent w-full text-white focus: outline-none ${
                !open && "hidden"
              }`}
              onChange={(e) => handleSearch(e.target.value)}
              required
            />
          </div>
          <ul className="pt-2">
            {Menu.map(
              (menu, index) => (
                (
                  <li className="text-white">
                    {" "}
                    <TbCategory />
                    hello{" hello "}
                  </li>
                ),
                (
                  <li
                    key={index}
                    className={`text-gray-300 text-xs flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
                ${menu.spacing ? "mt-2" : "mt-1"}
                ${selectedCategory === menu.path ? "bg-gray-500" : ""}
                 `}
                    onClick={() => handleCategoryClick(menu.path)}
                  >
                    <span className="text-xl block float-left">
                      {menu.icon ? menu.icon : <RiDashboardFill />}
                    </span>
                    <span
                      className={`text-sm font-medium flex-1 duration-200 ${
                        !open && "hidden"
                      }`}
                    >
                      {menu.title}
                    </span>
                  </li>
                )
              )
            )}
          </ul>
        </div>
        <div className="flex flex-col flex-1 w-0 overflow-hidden">
          <main className="relative flex-1 overflow-y-auto focus:outline-none">
            <div className="py-4 ">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8 sticky top-0 z-10">
                <div className="backdrop-contrast-200 dark:bg-gray-900/90 sm:flex-col md:flex-col xl:flex items-center justify-center p-2 rounded shadow-md">
                  <h1
                    className={`flex text-amber-600 justify-center font-serif font-semibold sm:text-sm md:text-base lg:text-lg xl: text-lg
                  `}
                  >
                    L
                    <CiHeart className="h-5 w-5 text-white" />
                    VELY MOVIES
                  </h1>
                  <div
                    className={`flex items-center rounded-md bg-light-white mt-2 border border-amber-600  ${
                      open ? "hidden" : "px-2"
                    }  py-2`}
                  >
                    <BsSearch
                      className={`text-white text-xl lg:text-base block float-left  ${
                        open && "mx-2"
                      }`}
                    />
                    <input
                      type={"text"}
                      placeholder="Search"
                      value={searchQuery}
                      className={`text-md px-2 text-gray-300 bg-transparent search w-screen focus:outline-none ${
                        open ? "hidden" : ""
                      }`}
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8 ">
                <div className="py-4">
                  <div className="rounded-lg h-96">
                    <div className="dark:text-gray-100">
                      <div className="container mx-auto px-4 py-4  lg:px-8 lg:pt-8 md:pt-6  sm:pt-2">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                          {filteredMovies?.length > 0 ? (
                            <>
                              {filteredMovies.map((movie, index) => (
                                <MovieCard key={index} movie={movie} />
                              ))}
                            </>
                          ) : (
                            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                              <h2 className="p-4 text-red-500 text-sm font-mono">
                                No Movie found
                              </h2>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default SideBar;
