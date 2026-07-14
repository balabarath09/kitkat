import React from 'react';
import Hero from './Hero';
import Box from '@mui/material/Box';
import Info from './Info';
import WhyKitkat from './WhyKitkat';
import Services from './Services';
import Process from './Process';

const WebAppIndex = () => {
    return (
        <Box>
            <Hero/>
            <Info/>
            <WhyKitkat/>
            <Services/>
            <Process/>
        </Box>
    );
}

export default WebAppIndex;
