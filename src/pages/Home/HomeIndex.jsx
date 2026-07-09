import React from 'react';
import Hero from './Hero';
import Box from '@mui/material/Box';
import CompanyInfo from './CompanyInfo';
import CoreServices from './CoreServices';
import WhyKitkat from './WhyKitkat';
import ItSolution from './ItSolution';
import Process from './Process';

const HomeIndex = () => {
    return (
        <Box>
            <Hero/>
            <CompanyInfo/>
            <CoreServices/>
            <WhyKitkat/>
            <ItSolution/>
            <Process/>
        </Box>
    );
}

export default HomeIndex;
