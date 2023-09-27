import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@material-ui/core";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotesIcon from "@mui/icons-material/Notes";
import Sidebar from "./Sidebar";
import Top_Dash from "./Top_Dash";
import Card_Dash from "./Card_Dash";
import PaginationOutlined from "./PaginationOutlined";

const DashboardContent = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          // width:"100%",
          justifyContent: "space-between",
          "& > :not(style)": {
            // m: 1,
            //   width: 128,
            //   height: 128,
          },
        }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Typography
            style={{
              lineHeight: "27.3px",
              fontSize: "13px",
              fontWeight: 400,
              color: "rgba(162, 166, 176, 1)",
            }}
          >
            Items 1-35 of 61
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            // width:"100%",
            justifyContent: "space-between",
            "& > :not(style)": {
              m: 1,
              //   width: 128,
              //   height: 128,
            },
          }}
        >
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                width: "176px",
                height: "50px",
                border: "2px solid rgba(202, 205, 216, 1)",
                display: "flex",
              }}
              onClick={() => handleOptionSelect("Position")}
            >
              <Typography
                style={{
                  fontWeight: 600,
                  fontSize: "13px",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "15px",
                  paddingTop: "15px",
                }}
              >
                Sort By: {selectedOption || "Position"}
              </Typography>
              <span style={{ paddingTop: "13px" }}>
                <ArrowDropDownIcon />
              </span>
            </Box>

            {/* Dropdown options */}
            {selectedOption === "Position" && (
              <div>
                <button onClick={() => handleOptionSelect(10)}>10</button>
                <button onClick={() => handleOptionSelect(20)}>20</button>
                <button onClick={() => handleOptionSelect(30)}>30</button>
              </div>
            )}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                width: "250px",
                height: "50px",
                border: "2px solid rgba(202, 205, 216, 1)",
                display: "flex",
              }}
              onClick={() => handleOptionSelect("Position")}
            >
              <Typography
                style={{
                  fontWeight: 600,
                  fontSize: "13px",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "15px",
                  paddingTop: "15px",
                }}
              >
                Show: 35 per page {selectedOption || "Position"}
              </Typography>
              <span style={{ paddingTop: "13px" }}>
                <ArrowDropDownIcon />
              </span>
            </Box>

            {/* Dropdown options */}
            {selectedOption === "Position" && (
              <div>
                <button onClick={() => handleOptionSelect(10)}>10</button>
                <button onClick={() => handleOptionSelect(20)}>20</button>
                <button onClick={() => handleOptionSelect(30)}>30</button>
              </div>
            )}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                width: "110px",
                height: "50px",
                border: "2px solid rgba(202, 205, 216, 1)",
              }}
            >
              <Typography
                style={{
                  fontWeight: 600,
                  fontSize: "13px",
                  // display:"flex",

                  justifyContent: "center",
                  textAlign: "center",
                  padding: "15px",
                }}
              >
                <AppsIcon />
                <NotesIcon />
              </Typography>
            </Box>
          </Box>
          {/* small */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              // width:"100%",
              justifyContent: "space-between",
              "& > :not(style)": {
                m: 1,
                //   width: 128,
                //   height: 128,
              },
            }}
          >
            <div>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  width: "125px",
                  height: "38px",
                  border: "2px solid rgba(202, 205, 216, 1)",
                }}
                onClick={handleToggleSidebar}
              >
                <Typography
                  style={{
                    fontWeight: 600,
                    fontSize: "11px",
                    lineHeight: "16.5px",
                    color: "rgba(0, 0, 0, 1)",
                    paddingTop: "12px",
                    textAlign: "center",
                    justifyContent: "center",
                    marginLeft: "50px",
                  }}
                >
                  Filter
                </Typography>
              </Box>

              {/* Render the Sidebar based on sidebarOpen state */}
              {sidebarOpen && <Sidebar />}
            </div>

            {/* <Box
            sx={{
              width: "120px",
              height: "38px",
              border: "2px solid rgba(202, 205, 216, 1)",
            }}
          ></Box> */}

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <Box
                sx={{
                  width: "120px",
                  height: "38px",
                  border: "2px solid rgba(202, 205, 216, 1)",
                  display: "flex",
                }}
                onClick={() => handleOptionSelect("Position")}
              >
                <Typography
                  style={{
                    fontWeight: 500,
                    fontSize: "10px",
                    justifyContent: "center",
                    //   textAlign: "center",
                    //   padding: "15px",
                    paddingTop: "8px",
                    marginLeft: "10px",
                  }}
                >
                  Sort By: Position {selectedOption || "Position"}
                </Typography>
                <span style={{ paddingTop: "13px" }}>
                  <ArrowDropDownIcon />
                </span>
              </Box>

              {/* Dropdown options */}
              {selectedOption === "Position" && (
                <div>
                  <button onClick={() => handleOptionSelect(10)}>10</button>
                  <button onClick={() => handleOptionSelect(20)}>20</button>
                  <button onClick={() => handleOptionSelect(30)}>30</button>
                </div>
              )}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <Typography
                style={{
                  lineHeight: "27.3px",
                  fontSize: "13px",
                  fontWeight: 400,
                  // color: "rgba(162, 166, 176, 1)",
                }}
              >
                Items 1-35 of 61
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Top_Dash />
      </Box>
      <Box>
        <Card_Dash />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "20px",
        }}
      >
        <PaginationOutlined />
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <p>
          MSI has unveiled the Prestige Series line of business-class and gaming
          notebooks. Tuned for color accuracy, the Prestige Series also
          leverages True Color Technology, which allows users to adjust the
          display profile to best fit their computing needs. There are six
          different screen profiles, which are tuned for gaming, reducing eye
          fatigue, sRGB color accuracy, increasing clarity for words and lines,
          reducing harmful blue light, and optimizing contrast for watching
          movies. Given the various display profiles and discrete graphics chip,
          the Prestige Series notebooks can be used for various design work as
          well as for office tasks given that the screen can be adjusted for
          better clarity, color accuracy, or for eye strain reduction. Users
          working with video or 3D rendering will appreciate the "movie mode"
          for which contrast is increased. Home users or students can benefit
          from the "anti-blue" and the "office mode" options, both of which are
          designed to reduce eye strain. This is helpful when working on the
          computer for extended periods of time. Additionally, in their down
          time, students can also use the "gamer mode" to increase the screen
          brightness.
        </p>
      </Box>
      <span style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            width: "88px",
            height: "37px",
            borderRadius: "50px",
            border: "2px solid ",
            padding: "8px, 26px, 8px, 26px",
          }}
        >
          More
        </button>
      </span>
    </>
  );
};

export default DashboardContent;

// export default DashboardContent;
