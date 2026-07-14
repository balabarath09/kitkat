import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import Button from '@mui/material/Button';
import { CommonButton } from '../../../StyledComponents/CommonButton';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const WhyKitkat = () => {

    const pointsArray = [
        "Engineering-le-design.Websites buid on solid,secure code",
        "Local expertise, global standards. Built for Coimbatore, benchmarked globally.",
        "Transparent website design cost. No hidden charges, no surprises.",
        "Dedicated project ownership. Single point of contact from start to finish.",
        "Long-term partnership. Ongoing maintenance and reliable support."
    ]

    return (
        <Box sx={{backgroundColor:"#F8FBFE",mt:2,py:2}}>
            <Grid container sx={{px:{xs:1,lg:8}}} spacing={1} >
                <Grid size={{xs:12,md:6,}} sx={{height:"100"}} >
                    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}}>
                        <Typography component={"h1"} variant='h4'>Why Coimbatore Business Choose Us as Their Web Development Company    </Typography>
                        <Typography component={"p"} variant='p' sx={{fontSize:"18px"}}>KitKat Software Technolgies combines creative design with deep engineering expertise.We build websitesthat not only look stunning but also deliver measurable results for your business</Typography>
                        <Box sx={{display:"flex",flexDirection:"column",gap:1}}>
                            {
                                pointsArray.map((item,index) => {
                                    return (
                                        <Box key={index} sx={{display:"flex",gap:1,alignItems:"center"}}>
                                            <Box><CheckCircleIcon sx={{color:"#0749C4",fontSize:"13px"}}/></Box>
                                            <Typography sx={{fontSize:"13px"}}>{item}</Typography>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{xs:12,md:6}} sx={{p:{sm:6}}}>
                    <Box sx={{display:"flex",flexDirection:{xs:"column",sm:"row"},height:"100%",backgroundColor:"#EFF6FD",p:{xs:3,lg:6},borderRadius:"1rem",gap:4}}>
                        <CardGiftcardOutlinedIcon sx={{fontSize:"4rem",color:"#0959E4"}}/>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:1}}>
                            <Typography sx={{fontWeight:600}} component={'h1'} variant='h6'> Ready to build a website that actually converts?</Typography>
                            <Typography sx={{fontSize:"0.8rem"}}>Request a free consultation with our web design experts in Coimbatore today no obligation, just honest advice.</Typography>
                            <CommonButton variant='contained' endIcon={<EastOutlinedIcon/>}>Get Free Consultation</CommonButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default WhyKitkat;