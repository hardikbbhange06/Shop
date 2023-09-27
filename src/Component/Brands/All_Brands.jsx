import React from "react";
import Box from "@mui/material/Box";
import img1 from "../IMG/Frame1 (1).png"
import img2 from "../IMG//Frame1 (2).png"

import img3 from "../IMG/Frame1 (3).png"

import img4 from "../IMG/Frame1 (4).png"

import img5 from "../IMG/Frame1 (5).png"
import img6 from "../IMG/Frame1(6).png"
import "./Brands"



const All_Brands = () => {
  return (
    <Box
      sx={{
        // display: 'flex',
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "200px",
          // height: 128,
        },
      }}
    >
      <Box
        sx={{
        //   border: "2px solid red",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "80px",
            height: "75px",
          },
        }}
      >
      
        <img src={img1} sx={{ border: "2px solid red" }} alt=""></img>
       
        <img src={img2} sx={{ border: "2px solid red" }} alt=""></img>
        <img src={img3} sx={{ border: "2px solid red" }} alt=""></img>
        <img src={img4} sx={{ border: "2px solid red" }} alt=""></img>
        <img src={img5} sx={{ border: "2px solid red" }} alt=""></img>
        <img src={img6} sx={{ border: "2px solid red" }} alt=""></img>

       
       
        {/* <Box sx={{ border: "2px solid red" }} ></Box> */}
      </Box>
    </Box>
  );
};

export default All_Brands;
