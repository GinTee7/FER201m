import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import '../css/navigation.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export default function Navigation(){

    return(
      <AppBar className="navigation">
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/dashboard'>DashBoard</Link></li>
        </ul>
      </AppBar>

    )
}