import React from 'react';
import Hero from './Hero';
import Box from '@mui/material/Box';
import ServiceInfo from './ServiceInfo';
import WhyKitkat from './WhyKitkat';
import WebDesignAndDevelopmentService from './WebDesignAndDevelopment.Service';
import Process from './Process';
import HeroTwo from './HeroTwo';
import Faq from './Faq';
import Pricing from './Pricing';

const Index = () => {
    return (
        <Box>
            <Hero/>
            <ServiceInfo/>
            <WhyKitkat/>
            <WebDesignAndDevelopmentService/>
            <Process/>
            <HeroTwo/>
            <Pricing/>
            <Faq/>
        </Box>
    );
}

export default Index;
