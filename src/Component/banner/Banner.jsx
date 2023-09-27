import { Box, Container } from '@mui/material'
import React from 'react';
import baner from "../IMG/Group-baner.png"

const Banner = () => {
  return (
    <>
    <Container maxWidth="xl">
        <Box 
        sx={{
            background:"black",
            display: { xs: 'none', md: 'flex' },
        }}>
        {/* Banner */}
<img src={baner} alt="" />
        </Box>
    </Container>
    </>
  )
}

export default Banner