import './Profile.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Avatar from '@sabfry/avatarium';
import profileImage from './Login/Components/Profile icon.png';
import { Link } from 'react-router-dom';
import { IoMdPerson } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile">
          <img src={profileImage} alt="Profile"/>
          <h1>Profile</h1>
          <hr />
          <div className="Profile Info">
            <div className="user-info">
              <IoPersonCircleSharp />Username: LuffyPirateKing
              <br></br>
              <IoMdPerson />Name: Monkey D Luffy
              <br></br>            
              <MdOutlineEmail />Email: Kingofthepirate@gmail.com
              <br></br>
              <button to="/favorites" className="btn btn-warning"><FaHeart />  Favorites</button>
              <br></br><br></br>
              <button type="submit" className="btn btn-warning">
                Log Out
              </button>
            </div>
          </div>

        </div>
      </div>
  );
    
}
export default Profile;