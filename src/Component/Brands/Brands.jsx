import React from "react";
import "./Brands.css";
import { Box, Button, Container, Typography } from "@material-ui/core";
import All_Brands from "./All_Brands";

const BrandItem = () => (
  <Box
    sx={{
      border: "2px solid red",
      m: 1,
      width: 128,
      height: 128,
    }}
  />
);

const Brands = () => {
  return (
    <Container>
      <Box
        className="Brands"
        sx={{
          display: { xs: "none", md: "flex" }, // Hide on xs, display on md
        }}
      >
        <Box>
          <Box
            sx={{

              width: "233px",
              height: "100px",
              bgcolor: "rgba(162, 166, 176, 1)",
            }}
          >
            <p
              style={{
                width: "233px",
                height: "50px",
                textAlign: "center",
              }}
            >
              Brands
            </p>
            <Button
              style={{
                width: "200px",
                height: "37px",
                borderRadius: "50px",
                border: "2px solid rgba(162, 166, 176, 1)",
              }}
            >
              All Brands
            </Button>
          </Box>
          <Box>
            <All_Brands/>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Brands;
