import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HerosecImage from '../../../assets/Images/HerosecImage.png'
import React from 'react';
import Typography from '@mui/material/Typography';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from '../../../StyledComponents/CommonButton';

const HeroTwo = () => {
    const serviceArray = [
        {
            text:"HealthCare",
        },
        {
            text:"Logistics & Transportation",
        },
        {
            text:"Education",
        },
        {
            text:"Finance & Banking",
        },
        {
            text:"E-Commerce",
        },
        {
            text:"Travel & Hospitality",
        },
        {
            text:"Manufaacturing",
        },
        {
            text:"Retail & Distribution",
        },
        {
            text:"Real Estate"
        },
        {
            text:"And Many More"
        }
    ]
    return (
        <Box sx={{mt:4,px:{xs:1,lg:8}}}>
            <Grid container spacing={1}>
                <Grid size={{xs:12,lg:3}} sx={{borderRadius:2}}>
                    <Box sx={{display:"flex",flexDirection:"column",gap:2,backgroundColor:"#F5F4F6",p:3,borderRadius:2}}>
                        <Typography component={"h1"} variant='h6' sx={{fontWeight:600,textAlign:{xs:"center",lg:"start"}}}>Industries We Serve</Typography>
                        <Box sx={{width:{xs:"100%",sm:"75%",md:"50%",lg:"100%"},m:"auto"}}>
                            <Grid container spacing={1}  sx={{border:{xs:"2px solid #EBF0F3",lg:0},p:{xs:2,lg:0},borderRadius:{xs:2,lg:0}}}>
                                {
                                    serviceArray.map((item,index) => {
                                        return (
                                            <Grid size={6} key={index}>
                                                <Box sx={{display:"flex",alignItems:"center",gap:1.5}}>
                                                    {/* <Icon sx={{fontSize:"1.7rem",color:item.color}}/> */}
                                                    e
                                                    <Typography sx={{fontSize:"0.6rem"}}>{item.text}</Typography>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{xs:12,lg:6}} >
                    <Grid container sx={{height:"100%"}}>
                        <Grid size={{xs:12,lg:5}}>
                            <Box component={'img'} src={HerosecImage} sx={{width:"100%",height:"100%",borderTopLeftRadius:"16px",borderBottomLeftRadius:"16px"}}/>
                        </Grid>
                        <Grid size={{xs:12,lg:7}}>
                            <Box sx={{height:"100%",display:"flex",flexDirection:"column",gap:2,p:4,backgroundColor:"#F5F4F6",borderTopRightRadius:"16px",borderBottomRightRadius:"16px"}}>
                                <Typography component={'h1'} variant='h5' sx={{fontWeight:600}}>Business Management Dashboard</Typography>
                                <Typography>A comprehensive dashboard for a leading Coimbatore-based enterprise to manage operations,analytics and reporting in real time.</Typography>
                                <CommonButton sx={{alignSelf:"start"}} endIcon={<EastOutlinedIcon/>}>View Case Study</CommonButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{xs:12,md:12,lg:3}} >
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column",gap:2,p:4,backgroundColor:"#001E4E",color:"white",borderRadius:2}}>
                        <Typography component={'h1'} variant='h5' sx={{fontWeight:600}}>Have a Project in Mind?</Typography>
                        <Typography>Let's build something powerful together share your idea and get free consultation from our experts.</Typography>
                        <CommonButton sx={{alignSelf:"start",backgroundColor:"white",color:"#265CEC"}} variant='contained' endIcon={<EastOutlinedIcon/>}>Get a Free Consultation</CommonButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HeroTwo;
