import React from "react";
import "./App.css";
import MyCalendar from "./Components/Calendar";
import Paper from "./Components/Paper";
import SideMenu from "./Components/SideMenu";
import TopMenu from "./Components/TopMenu";
import { Grid, Box, Typography } from "@mui/material";

function App() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ width: "240px", backgroundColor: "#43425d" }}>
        <Box sx={{ padding: "16px", color: "white" }}>
          <Typography variant="h6">IMPEKABLE</Typography>
        </Box>
        <SideMenu />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <TopMenu />
        <Box sx={{ backgroundColor: "#f0f0f7", p: 2, flexGrow: 1 }}>
          <h4>Calendar</h4>
          <Paper>
            <MyCalendar />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
