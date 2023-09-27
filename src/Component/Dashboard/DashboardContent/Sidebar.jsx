import React, { useState } from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import InboxIcon from "@material-ui/icons/Inbox";
import MailIcon from "@material-ui/icons/Mail";
import "./Sidebar.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import DashboardContent from "./DashboardContent";
import CircleIcon from '@mui/icons-material/Circle';

const Sidebar = () => {
    const [visible, setVisible] = useState(false);

  const [activeSection, setActiveSection] = useState("Dashboard");


  const handleToggleSidebar = () => {
    setVisible(prevVisible => !prevVisible);
  };
  const handleItemClick = (section) => {
    setActiveSection(section);
    // Add logic to navigate to the corresponding section based on the selected item
    // For simplicity, we'll just log the selected section for now
    console.log("Selected section:", section);
  };

  return (
    <>
      <>
        <Box  variant="permanent">
          <div 
            style={{
              display: "flex",
              //   border:"2px solid red"
              //   justifyContent:"space-between"
            }}
          >
            <div className="dash">
              <span style={{ justifyContent: "center", display: "flex" }}>
                <ChevronLeftIcon /> Back
              </span>
              <List
                style={{
                  justifyContent: "center",
                  backgroundColor: "rgba(245, 247, 255, 1)",
                  width:"215px",
                }}
              >
                <Typography
                  style={{
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "24px",
                    textAlign: "center",
                  }}
                >
                  Filters
                </Typography>
                <ListItem>
                  <Stack direction="row">
                    <Button variant="outlined">Clear Filter</Button>
                  </Stack>
                </ListItem>

                <ListItem style={{ justifyContent: "space-between" }}>
                  <ListItemText primary="Category" />
                  <ListItemIcon style={{ justifyContent: "end" }}>
                    <ArrowDropUpIcon />
                  </ListItemIcon>
                </ListItem>

                <ListItem style={{ justifyContent: "space-between" }}>
                  <ListItemText primary="CUSTOM PCS" />
                  <ListItemIcon style={{ justifyContent: "end" }}>
                    15
                  </ListItemIcon>
                </ListItem>

                <ListItem style={{ justifyContent: "space-between" }}>
                  <ListItemText primary="MSI ALL-IN-ONE PCS" />
                  <ListItemIcon style={{ justifyContent: "end" }}>
                    45
                  </ListItemIcon>
                </ListItem>

                <ListItem style={{ justifyContent: "space-between" }}>
                  <ListItemText primary="HP/COMPAQ PCS" />
                  <ListItemIcon
                    style={{ marginLeft: "20px", justifyContent: "end" }}
                  >
                    1
                  </ListItemIcon>
                </ListItem>





                <ListItem style={{ justifyContent: "space-between" }}>
                  <ListItemText primary="Price" />
                  <ListItemIcon style={{ justifyContent: "end" }}>
                    <ArrowDropUpIcon />
                  </ListItemIcon>
                </ListItem>



                <ListItem style={{ justifyContent: "space-between" }}>
                  <ListItemText primary="$0.00 - $1,000.00  " />
                  <ListItemIcon
                    style={{ marginLeft: "20px", justifyContent: "end" }}
                  >
                    19
                  </ListItemIcon>
                </ListItem>

                <ListItem style={{ justifyContent: "space-between" }}>
                  <ListItemText primary="$1,000.00 $2,000.00 " />
                  <ListItemIcon
                    style={{ marginLeft: "20px", justifyContent: "end" }}
                  >
                    21
                  </ListItemIcon>
                </ListItem>

                <ListItem style={{ justifyContent: "space-between" }}>
                  <ListItemText primary="$2,000.00 - $3,000.00  " />
                  <ListItemIcon
                    style={{ marginLeft: "20px", justifyContent: "end" }}
                  >
                    9
                  </ListItemIcon>
                </ListItem>

                <ListItem style={{ justifyContent: "space-between" }}>
                  <ListItemText primary="$3,000.00 $4,000.00 " />
                  <ListItemIcon
                    style={{ marginLeft: "20px", justifyContent: "end" }}
                  >
                    6
                  </ListItemIcon>
                </ListItem>

                <ListItem style={{ justifyContent: "space-between" }}>
                  <ListItemText primary="$4,000.00 $5,000.00 " />
                  <ListItemIcon
                    style={{ marginLeft: "20px", justifyContent: "end" }}
                  >
                    3
                  </ListItemIcon>
                </ListItem>


                <ListItem style={{ justifyContent: "space-between" }}>
                  <ListItemText primary="$5,000.00 - $6,000.00 " />
                  <ListItemIcon
                    style={{ marginLeft: "20px", justifyContent: "end" }}
                  >
                    1
                  </ListItemIcon>
                </ListItem>


                <ListItem style={{ justifyContent: "space-between" }}>
                  <ListItemText primary="$6,000.00 - 7,000.00" />
                  <ListItemIcon
                    style={{ marginLeft: "20px", justifyContent: "end" }}
                  >
                    1
                  </ListItemIcon>
                </ListItem>


                <ListItem style={{ justifyContent: "space-between" }}>
                  <ListItemText primary="$7,000.00 And Above" />
                  <ListItemIcon
                    style={{ marginLeft: "20px", justifyContent: "end" }}
                  >
                    1
                  </ListItemIcon>
                </ListItem>


                <ListItem style={{ justifyContent: "space-between" }}>
                  <ListItemText primary="Color" />
                  <ListItemIcon style={{ justifyContent: "end" }}>
                    <ArrowDropUpIcon />
                  </ListItemIcon>
                </ListItem>

                <ListItem style={{ justifyContent: "space-between" }}>
                  <ListItemIcon
                  >
                    <span style={{ color: 'rgba(0, 0, 0, 1)' }}>
                    <CircleIcon/>
                    </span>
                    <span style={{ color: 'rgba(219, 0, 0, 1)',border:"1px solid blue", borderRadius:"100%", }}>
                    <CircleIcon/>

                    </span>

                  </ListItemIcon>
                </ListItem>



























                <ListItem button onClick={() => handleItemClick("Dashboard")}>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button onClick={() => handleItemClick("Inbox")}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button onClick={() => handleItemClick("Mail")}>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mail" />
                </ListItem>
              </List>
            </div>
            <div>{/* <DashboardContent /> */}</div>
          </div>
        </Box>
      </>
    </>
  );
};

export default Sidebar;
