import React from "react";
import UndoIcon from "@mui/icons-material/Undo";
import ClearIcon from "@mui/icons-material/Clear";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
const Footer = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="cursor-pointer rounded-full shadow-2xl p-4">
        <UndoIcon className="text-yellow-300"></UndoIcon>
      </div>
      <div className="cursor-pointer rounded-full shadow-2xl p-4">
        <ClearIcon className="text-red-500"></ClearIcon>
      </div>
      <div className="cursor-pointer rounded-full shadow-2xl p-4">
        <StarRateIcon className="text-blue-500"></StarRateIcon>
      </div>
      <div className="cursor-pointer rounded-full shadow-2xl p-4">
        <FavoriteIcon className="text-green-500"></FavoriteIcon>
      </div>
      <div className="cursor-pointer rounded-full shadow-2xl p-4">
        <FlashOnIcon className="text-purple-500"></FlashOnIcon>
      </div>
    </div>
  );
};

export default Footer;
