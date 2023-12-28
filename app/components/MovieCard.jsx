import React from "react";
import { BiCameraMovie } from "react-icons/bi";

export const MovieCard = ({ movie }) => {
  const getYearFromDate = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength - 3) + "..."
      : text;
  };
  return (
    <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 transition duration-150  hover:scale-105 cursor-pointer">
      <img
        className="object-fit object-top w-full h-44 xl:h-56 md:h-48 sm:h-44"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
            : "https://via.placeholder.com/400"
        }
        alt={movie.original_title}
      />
      <div className="flex items-center px-6 py-3 bg-gray-900">
        <BiCameraMovie className="h-7 w-7" />

        <h1 className="mx-3 font-semibold text-white">
          {getYearFromDate(movie.release_date)}
        </h1>
      </div>

      <div className="px-6 py-2">
        <h1 className="text-sm  font-medium text-gray-800 dark:text-white/60">
          {truncateText(movie.original_title, 30)}
        </h1>
      </div>
    </div>
  );
};

export default MovieCard;
