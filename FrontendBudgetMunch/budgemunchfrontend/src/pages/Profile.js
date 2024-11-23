import './Profile.css';
import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import Avatar from '@sabfry/avatarium';
import profileImage from './Login/Components/Profile icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdPerson } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Navbar from '../layout/Navbar';

const Profile = () => {

  return (
    <> <div className='navebar'>
    <Navbar />
</div><div className="profile-container">
        <div className="profile">
          <img src={profileImage} alt="Profile" />
          <h1>Profile</h1>
          <hr />
          <div className="Profile Info">
            <div className="user-info">

              <>
                <IoPersonCircleSharp /> Username:
                <br />
                <IoMdPerson /> Name:
                <br />
                <MdOutlineEmail /> Email: 
                <br />
              </>

              <Link to="/favorites">
                <button className="btn btn-warning"><FaHeart /> Favorites</button>
              </Link>
              <br /><br />
              <button type="button" className="btn btn-warning">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default Profile;
