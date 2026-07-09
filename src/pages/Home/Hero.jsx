import Box from '@mui/material/Box';
import React from 'react';
import HomeBanner from "../../assets/Images/HomeBanner2.png"

const Hero = () => {
    return (
        <Box sx={{height:"90vh"}}>
            <Box component={'img'} src={HomeBanner} sx={{width:"100%",height:"100%"}}/>
        </Box>
    );
}

export default Hero;
