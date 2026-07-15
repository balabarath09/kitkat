import React from 'react';
import Hero from './Hero';
import Box from '@mui/material/Box';
import Info from './Info';
import WhyKitkat from './WhyKitkat';
import Services from './Services';
import Process from './Process';
import HeroTwo from './HeroTwo';
import Pricing from './Pricing';
import Faq from './Faq';
import Technology from './Technology';

const WebAppIndex = () => {
    return (
        <Box>
            <Hero/>
            <Info/>
            <WhyKitkat/>
            <Services/>
            <Process/>
            <Technology/>
            <HeroTwo/>
            <Pricing/>
            <Faq/>
        </Box>
    );
}

export default WebAppIndex;
