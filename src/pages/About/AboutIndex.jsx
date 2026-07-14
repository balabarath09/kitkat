import Box from '@mui/material/Box';
import AboutHero from '../../assets/Images/AboutHero.jpg'
import React from 'react';
import AboutSectionOne from './AboutSectionOne';
import AboutSectionTwo from './AboutSectionTwo';

const AboutIndex = () => {
    return (
        <Box>
            <Box component={'img'} src={AboutHero} sx={{width:"100%",height:"70vh"}}/>
            <AboutSectionOne/>
            <AboutSectionTwo/>
        </Box>
    );
}

export default AboutIndex;
