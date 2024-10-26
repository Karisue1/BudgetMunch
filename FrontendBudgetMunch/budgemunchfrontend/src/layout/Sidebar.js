import React, {useState}  from 'react';
import { Link,useNavigate, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import { Route } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoToggle } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { IoLogInSharp } from "react-icons/io5";
import { FaFaceGrinHearts } from "react-icons/fa6";

export const Sidebar = [
    {
        title:'Home',
        path: '/',
        icon: <IoHomeSharp size={50}/>,
        cName: 'nav-text'
    },   
    {
        title:'Login',
        path: '/login',
        icon: <IoLogInSharp size={50}/>,
        cName: 'nav-text'
    },
    {
        title:'Profile',
        path: '/profile',
        icon: <FaRegUserCircle size={50}/>,
        cName: 'nav-text'
    },
    {
        title:'Favorites',
        path: '/favorites',
        icon: <FaFaceGrinHearts size={50}/>,
        cName: 'nav-text'
    },

]
