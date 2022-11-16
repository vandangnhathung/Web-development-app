import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import AppleIcon from "@mui/icons-material/Apple";
const Header = () => {
  return (
    <div className="w-full flex justify-between p-3 rounded-lg shadow-sm border">
      <AccountCircleIcon></AccountCircleIcon>
      <AppleIcon></AppleIcon>
      <ChatIcon></ChatIcon>
    </div>
  );
};

export default Header;
