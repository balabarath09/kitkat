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
                <Grid size={{xs:12,md:7}} sx={{height:"100"}} >
                    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",gap:1}}>
                        <Typography component={"h1"} variant='h4' sx={{fontWeight:600}}>What is Web Application Devlopment?</Typography>
                        <Typography component={"p"} variant='p' sx={{fontSize:"18px"}}>Web application development involves designing, building and deploying software that runs inside a browser rather than requiring installation. A web application differs from a static website because it processes data, manages user accounts and performs dynamic business logic.</Typography>
                        <Typography>Businesses commission custom web application development to replace spreadsheets, manual processes and disconnected tools with one centralised, accessible platform. Companies across Coimbatore increasingly hire web application developers to buiid portals, dashboards, booking systems and customer-facing tools that scale with demand.</Typography>
                        <Typography>A well-built web application improves operational efficiency, reduces manual errors and gives management real-time visibility into performance.</Typography>
                    </Box>
                </Grid>
                <Grid size={{xs:12,md:5}} sx={{p:{sm:2}}}>
                    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",gap:1,backgroundColor:"#F9F8F8",p:4,borderRadius:4}}>
                        <Typography component={"h1"} variant='h5'>Why Choose Kitkat in Coimbatore?</Typography>
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
            </Grid>
        </Box>
    );
}

export default WhyKitkat;