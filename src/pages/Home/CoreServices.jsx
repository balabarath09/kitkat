import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
import StayCurrentPortraitOutlinedIcon from '@mui/icons-material/StayCurrentPortraitOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import { color } from '@mui/system';
import Button from '@mui/material/Button';
import { CommonButton } from '../../StyledComponents/CommonButton';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const CoreServices = () => {

    const cardArray = [
        {
            icon:PersonalVideoOutlinedIcon,
            heading:"Website Development",
            text:"Responsive,fast & SEO friendly websites",
            color:"#0749C4"
        },
        {
            icon:StayCurrentPortraitOutlinedIcon,
            heading:"Mobile App Development",
            text:"Android,iOS & cross-platform apps that users love",
            color:"#4E9D2C"
        },
        {
            icon:CodeOutlinedIcon,
            heading:"Custom Software Development",
            text:"Tailored software solutions to automate your business",
            color:"#FE6F1C"
        },
        {
            icon:SchoolOutlinedIcon,
            heading:"Software Training",
            text:"Practical training with placement support for your career",
            color:"#664BD5"
        },
        {
            icon:CampaignOutlinedIcon,
            heading:"Digital Marketing Services",
            text:"SEO,SMM,Ads & contentto grow your brand",
            color:"#F73455"
        },
        {
            icon:CloudOutlinedIcon,
            heading:"IT Solutions",
            text:"ERP,CRM,HRM,Hostingand many more solutions",
            color:"#189292"
        }
        
    ]
    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:2,mt:2}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Typography sx={{fontWeight:600}}>Our Core Services</Typography>
                <Box component={"div"} sx={{width:"35px",height:"2px",backgroundColor:"#0749C4"}}></Box>
            </Box>
            <Grid container sx={{px:{xs:1,lg:8}}} spacing={2} >
                {
                    cardArray.map((item,index) => {

                        const Icon = item.icon

                        return(
                            <Grid size={{xs:6,sm:4,nd:3,lg:2}} key={index}>
                                <Card sx={{height:"100%"}}>
                                    <CardContent sx={{height:"100%"}}>
                                        <Box sx={{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
                                            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:2,height:"60%"}}>
                                                <Icon sx={{color:item.color}}/>
                                                <Typography sx={{textAlign:"center",fontWeight:"bold"}}>{item.heading}</Typography>
                                            </Box>
                                            <Typography sx={{textAlign:"center",fontSize:"12px",height:"40%"}}>{item.text}</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )

                })
                }
            </Grid>
            <CommonButton variant='contained' endIcon={<EastOutlinedIcon/>}>Explore All Services</CommonButton>
        </Box>
    );
}

export default CoreServices;
