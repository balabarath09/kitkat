import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HerosecImage from '../../../assets/Images/HerosecImage.png'
import React from 'react';
import Typography from '@mui/material/Typography';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from '../../../StyledComponents/CommonButton';

const HeroTwo = () => {
    return (
        <Box sx={{mt:4,px:{xs:1,lg:8}}}>
            <Grid container >
                <Grid size={{xs:12,sm:6,md:3}}>
                    <Box component={'img'} src={HerosecImage} sx={{width:"100%",height:"100%",borderTopLeftRadius:{xs:0,lg:"16px"},borderBottomLeftRadius:{xs:0,lg:"16px"}}}/>
                </Grid>
                <Grid size={{xs:12,sm:6,md:4.5}}>
                    <Box sx={{display:"flex",flexDirection:"column",gap:2,p:4,backgroundColor:"#F5F4F6"}}>
                        <Typography component={'h1'} variant='h5' sx={{fontWeight:600}}>Our Work Speaks for Itself</Typography>
                        <Typography>We've helped start-ups, SMEs and global brands create impactful websites that drive real results.</Typography>
                        <CommonButton sx={{alignSelf:"start"}} endIcon={<EastOutlinedIcon/>}>View Our Portfolio</CommonButton>
                    </Box>
                </Grid>
                <Grid size={{xs:12,sm:12,md:4.5}}>
                    <Box sx={{display:"flex",flexDirection:"column",gap:2,p:4,backgroundColor:"#001E4E",color:"white",borderTopRightRadius:{xs:0,lg:"16px"},borderBottomRightRadius:{xs:0,lg:"16px"}}}>
                        <Typography component={'h1'} variant='h5' sx={{fontWeight:600}}>Have a Project in Mind?</Typography>
                        <Typography>Let's build a website that helps your business grow. Get a free quote from our experts today.</Typography>
                        <CommonButton sx={{alignSelf:"start",backgroundColor:"white",color:"#265CEC"}} variant='contained' endIcon={<EastOutlinedIcon/>}>Request a Free Quote</CommonButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HeroTwo;
