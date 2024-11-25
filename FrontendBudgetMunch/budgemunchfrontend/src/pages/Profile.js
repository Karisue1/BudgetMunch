import './Profile.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdPerson } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Navbar from '../layout/Navbar';
import profileImage from './Login/Components/Profile icon.png'; // Consider dynamic profile image later

const Profile = () => {

// i was using local storage to hold information

  // let navigate = useNavigate();
  // const [user, setUser] = useState(null);

  // const handleLogout = () => {
  //   localStorage.removeItem('user'); // Clear user data from localStorage
  //   navigate("/login"); // Redirect to login page
  // };

  // useEffect(() => {
  //   // Retrieve user data from localStorage when the component mounts
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     try {
  //       setUser(JSON.parse(storedUser)); // Parse the stored JSON object
  //     } catch (error) {
  //       console.error("Error parsing user data:", error);
  //       navigate("/profile"); // Redirect if parsing fails
  //     }
  //   } else {
  //     // Redirect to login if no user data is found in localStorage
  //     navigate("/login");
  //   }
  // }, [navigate]); // Empty dependency array means this effect runs once when the component mounts

  // if (!user) {
  //   return <div>Loading...</div>; // Show loading while the data is being fetched
  // }

//   return (
//     <>
//       <div className="navbar">
//         <Navbar />
//       </div>
//       <div className="profile-container">
//         <div className="profile">
//           {/* Profile image */}
//           <img src={profileImage} alt="Profile" className="profile-image" />

//           <h1>Profile</h1>
//           <hr />

//           <div className="profile-info">

//             {/* // info wouldn't pass through */}
//             {/* <div className="user-info">
//               <p><IoPersonCircleSharp /> Username: {user.username}</p>
//               <p><IoMdPerson /> Name: {user.name}</p>
//               <p><MdOutlineEmail /> Email: {user.email}</p>

//               <Link to="/favorites">
//                 <button className="btn btn-warning"><FaHeart /> Favorites</button>
//               </Link>
//               <br /><br />
//               <button onClick={handleLogout} type="button" className="btn btn-warning">
//                 Log Out
//               </button>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve user data from localStorage when the component mounts
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            // Redirect to login if no user data is found
            navigate("/login");
        }
    }, [navigate]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="profile-container">
                <div className="profile">
                    {/* Display Profile Image */}
                    <img src={profileImage} alt="Profile" className="profile-image" />
                    <h2>{user.name}</h2>
                    <p><strong>Name:</strong>{user.customerName}</p>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    
                </div>
            </div>
        </>
    );
};

export default Profile;
