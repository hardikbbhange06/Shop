import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { Box, Container } from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const CustomSeparator = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      href="/"
      onClick={handleClick}
      color="text.primary"
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="1"
      href="/"
      onClick={handleClick}
      color="text.primary"
    >
      Laptops
    </Link>,
    <Link
      underline="hover"
      key="1"
      href="/"
      onClick={handleClick}
      color="text.primary"
    >
      Everyday Use Notebooks
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="text.primary"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      MSI Prestige Series
    </Link>,
    <Typography key="3" color="inherit">
      Msi WS Series
    </Typography>,
  ];

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: "10px" }}>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <aside>
            <Box sx={{ mt: "10px" }}>
                <Typography
                sx={{
                    font:"poppins",
                    fontWeight:600,
                    fontSize:"32px",
                    lineHeight:"48px",
                    alignItems:"center",
                }}>
MSI PS Series (20)
                </Typography>
            </Box>
        </aside>
      </Container>
    </>
  );
};

export default CustomSeparator;
