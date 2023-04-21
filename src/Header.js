import React from "react";
//import * as React from "react";
import { Avatar } from "@mui/material";
import "./Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Stack from "@mui/material/Stack";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <Stack direction="row" spacing={2}>
          <Avatar
            className="header-avatar"
            alt={user?.displayName}
            src={user?.photoURL}
          />
        </Stack>

        <AccessTimeIcon />
        {/* Avatars for logged in user */}
        {/* Time icon */}
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder="Search you tube" />
        {/* Search icon */}
        {/* input */}
      </div>
      <div className="header_right">
        <HelpOutlineIcon />
        {/*Help icon */}
      </div>
    </div>
  );
}

export default Header;
