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
import AuthContext from './Auth/AuthContext'; // Import AuthContext

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext); // Use the context method
  
  useEffect(() => {
    // Example: Fetch user info from an API or local storage
    axios.get("/api/user-info")  // replace with your API endpoint
      .then(response => {
        setUserInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching user info:', error);
      });
  }, []);

  const handleLogout = () => {
    logOut(); // Call the context logout method
    navigate('/login'); // Navigate to login page
  };

  return (
    <div className="profile-container">
      <div className="profile">
        <img src={profileImage} alt="Profile" />
        <h1>Profile</h1>
        <hr />
        <div className="Profile Info">
          <div className="user-info">
            {userInfo ? (
              <>
                <IoPersonCircleSharp /> Username: {userInfo.username}
                <br />
                <IoMdPerson /> Name: {userInfo.name}
                <br />
                <MdOutlineEmail /> Email: {userInfo.email}
                <br />
              </>
            ) : (
              <p>Loading user information...</p>
            )}
            <Link to="/favorites">
              <button className="btn btn-warning"><FaHeart /> Favorites</button>
            </Link>
            <br /><br />
            <button type="button" className="btn btn-warning" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
