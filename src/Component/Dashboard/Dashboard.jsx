import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import DashboardContent from "./DashboardContent/DashboardContent";
import Sidebar from "./DashboardContent/Sidebar";
import Top_Dash from "./DashboardContent/Top_Dash";

const Dashboard = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to check if it's a small screen based on a width threshold
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 768); // Adjust the threshold as needed
  };

  useEffect(() => {
    // Check screen size when the component mounts or on window resize
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize(); // Initial check
    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {/* Conditionally render Sidebar based on screen size */}
      {isSmallScreen ? null : <Sidebar />}

      <Box
        sx={{
          // border: "2px solid red",
          width: isSmallScreen ? "100%" : "90%",
        }}
      >
        <DashboardContent sidebar={isSmallScreen ? null : <Sidebar />} />
      </Box>
     
    </Box>
  );
};

export default Dashboard;
