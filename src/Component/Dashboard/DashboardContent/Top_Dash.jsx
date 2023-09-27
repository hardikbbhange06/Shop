import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@material-ui/core";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Top_Dash() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        display: { xs: "none", md: "flex" } , 

        // justifyContent: "space-between",
        "& > :not(style)": {
          m: 1,
          //   width: 128,
          //   height: 128,
        },
      }}
    >
      <Box
        sx={{
            display: { xs: "none", md: "flex" } , 
          display: "flex",
          width: "173px",
          height: "38px",
          border: "2px solid  rgba(162, 166, 176, 1)",
        }}
      >
        <Typography
          style={{
            fontWeight: 600,
            fontSize: "13px",
            justifyContent: "center",
            textAlign: "center",
            padding: "15px",
            paddingTop: "8px",
          }}
        >
          CUSTOM PCS (24)
        </Typography>
        <span
          style={{
            paddingTop: "6px",
            color: "red",
          }}
        >
          <CancelIcon />
        </span>
      </Box>

      <Box
        sx={{
          display: "flex",

          width: "204px",
          height: "38px",
          border: "2px solid  rgba(162, 166, 176, 1)",
        }}
      >
        <Typography
          style={{
            fontWeight: 600,
            fontSize: "13px",
            justifyContent: "center",
            textAlign: "center",
            padding: "15px",
            paddingTop: "8px",
          }}
        >
          HP/COMPAQ PCS (24)
        </Typography>
        <span
          style={{
            paddingTop: "6px",
            color: "red",
          }}
        >
          <CancelIcon />
        </span>
      </Box>
      <Box
        sx={{
          width: "91.1px",
          height: "38px",
          border: "2px solid  rgba(162, 166, 176, 1)",
        }}
      >
        <Typography
          style={{
            fontWeight: 600,
            fontSize: "13px",
            justifyContent: "center",
            textAlign: "center",
            padding: "15px",
            paddingTop: "8px",
          }}
        >
Clear All
        </Typography>
      </Box>
    </Box>
  );
}
