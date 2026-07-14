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
import { CommonButton } from '../../../StyledComponents/CommonButton';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';


const WebDesignAndDevelopmentService = () => {
    const cardArray = [
        {
            icon:PersonalVideoOutlinedIcon,
            heading:"Responsive Website Design",
            text:"Mobile-first designs that adapt perfectly across all devices for a seamless user experience.",
            color:"#0749C4"
        },
        {
            icon:StayCurrentPortraitOutlinedIcon,
            heading:"Custom Website Development",
            text:"Bespoke websites coded to match your business processes, branding and customer journey.",
            color:"#4E9D2C"
        },
        {
            icon:CodeOutlinedIcon,
            heading:"WordPress Website Development",
            text:"Secure, scalable WordPress websites with custom themes, plugins and speed optimisation.",
            color:"#FE6F1C"
        },
        {
            icon:SchoolOutlinedIcon,
            heading:"CMS Website Development",
            text:"Easy-to-manage websites that let you update content, images and offers independently.",
            color:"#664BD5"
        },
        {
            icon:CampaignOutlinedIcon,
            heading:"E-Commerce & Business Website Development",
            text:"Conversion-focused websites with payment gateway, inventory and analytics integration.",
            color:"#F73455"
        },
        {
            icon:CloudOutlinedIcon,
            heading:"Website Redesign Services",
            text:"Modernise your outdated website with a fresh design, better UX and improved performance",
            color:"#189292"
        },
        {
            icon:CloudOutlinedIcon,
            heading:"Corporate & Professional Website Design",
            text:"Clean, credible and professional websites that build trust and strengthen your brand.",
            color:"#189292"
        },
        {
            icon:CloudOutlinedIcon,
            heading:"Website Design & Maintenance",
            text:"Keep your website secure, updated and fast with our reliable maintenance plans.",
            color:"#189292"
        }
    ]
    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:2,mt:2}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Typography sx={{fontWeight:600}}>Our Website Design and Development Services</Typography>
                <Box component={"div"} sx={{width:"35px",height:"2px",backgroundColor:"#0749C4"}}></Box>
            </Box>
            <Grid container sx={{px:{xs:1,lg:8},borderRadius:2}} >
                {
                    cardArray.map((item,index) => {

                        const Icon = item.icon

                        return(
                            <Grid size={{xs:6,sm:4,nd:3,lg:3}} key={index} sx={{border:"1px solid #94A3B8",p:0.3}}>
                                <Card  elevation={0} sx={{height:"100%",borderRadius:0,boxShadow:0}}>
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
        </Box>
    );
}

export default WebDesignAndDevelopmentService;
