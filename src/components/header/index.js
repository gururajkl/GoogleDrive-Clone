import React, { Component } from "react";
import Gdrive from "../../media/gdrive.png";
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import '../../styles/Header.css';

const index = ({userPhoto}) => {
  return (
    <div className="header">
      <div className="header_logo">
          <img src={Gdrive} alt="gdrive-logo"></img>
          <span>Drive</span>
      </div>
      <div className="header_searchContainer">
          <div className="header_searchBar">
                <SearchIcon />
                <input type="text" placeholder="Search in Drive"/>
                <ExpandMoreIcon />
          </div>
      </div>
      <div className="header_icons">
          <span>
              <HelpOutlineIcon />
              <SettingsIcon />
          </span>
          <AppsIcon />
          <img src={userPhoto} alt="User Photo" ></img>
      </div>
    </div>
  );
};

export default index;
