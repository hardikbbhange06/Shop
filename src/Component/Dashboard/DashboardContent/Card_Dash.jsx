import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import img1 from "../../IMG/image-1.png";
import StarIcon from "@mui/icons-material/Star";
import "./Sidebar.css";

export default function Card_Dash() {
  const dataArray = [
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
    {
      name: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      imgSrc: img1,
      reviewIcon: "icon1.png",
      age: "$124",

      address: "$540",
      // reviewIcon: "icon1.png",
    },
  ];

  return (
    <Box
      classname="BOX_2525"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "234px",
          padding: 1,
          // border: "2px solid red",
        },
        "@media (max-width: 600px)": {
          "& > :not(style)": {
            width: "133px",
          },
        },
      }}
    >
      {dataArray.map((data, index) => (
        <Box classname="BOX-2525" key={index}>
          <Box
            sx={{
              width: "81px",
              height: "26px",
              padding: "2px",
            }}
          >
            <span style={{ color: "rgba(120, 169, 98, 1)", display: "flex" }}>
              <CheckCircleIcon />
              <Typography>in stock</Typography>
            </span>
          </Box>
          <Box
            sx={
              {
                //                backgroundColor:"#f2efef",
              }
            }
          >
            <img
              style={{
                height: "141px",
                width: "141px",
                //   padding:"5px",
              }}
              src={data.imgSrc}
              alt=""
            />
          </Box>

          <Box>
            <span>
            <span style={{color:"#f57c00",}}>
            <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
             
              <StarIcon />
              
            </span>
            
            <span style={{
              padding:"10px",
              paddingBottom:"5px",
            }}  > Reviews (4)</span>
          </Box>

          <Box> 
          <Typography variant="body1"> {data.name}</Typography>
         </Box>


          {/* Replace with actual image source */}
          {/* Use the review icon specific to this data */}
          <Typography variant="body1"> <span style={{color:"green"}}>
         
          {data.age}
          </span> </Typography>
          <Typography variant="body1"> {data.address}</Typography>
        </Box>
      ))}
    </Box>
  );
}
