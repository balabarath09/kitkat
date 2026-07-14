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
const Services = () => {
    const cardArray = [
        {
            icon:PersonalVideoOutlinedIcon,
            heading:"Custom Web Application Development",
            text:"We build tailor-made web applications that perfectly align with your business processes and goals. From idea to deployment, we handle everything.",
            color:"#0749C4"
        },
        {
            icon:StayCurrentPortraitOutlinedIcon,
            heading:"Enterprise Web Application Development",
            text:"Secure, robust and scalable enterprise applications to manage complex operations across multiple departments and user roles.",
            color:"#4E9D2C"
        },
        {
            icon:CodeOutlinedIcon,
            heading:"Progressive Web App(PWA) Development",
            text:"PWAs that deliver a native app-like experience with offfline access, fast loading and seamless performance on any device.",
            color:"#FE6F1C"
        },
        {
            icon:SchoolOutlinedIcon,
            heading:"SaaS Application Development",
            text:"End-to-end SaaS product development from MVP to full-scale platform with subscribe, manege and grow capabilities.",
            color:"#664BD5"
        },
        {
            icon:CampaignOutlinedIcon,
            heading:"Web Application Integration",
            text:"Conversion-focused websites with payment gateway, inventory and analytics integration.",
            color:"#F73455"
        },
        {
            icon:CloudOutlinedIcon,
            heading:"Maintenance & Support Services",
            text:"Integrate third-party APIs, payment gateways, CRMs and ERP systems to unify your business ecosystem.",
            color:"#189292"
        },
        {
            icon:CloudOutlinedIcon,
            heading:"Corporate & Professional Website Design",
            text:"We provide ongoing maintenance, security updates, performance tuning and support to keep your application running smoothly.",
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
                <Typography sx={{fontWeight:600,textAlign:"center"}}>Our Website Application Development Services in Coimbatore</Typography>
                <Box component={"div"} sx={{width:"35px",height:"2px",backgroundColor:"#0749C4"}}></Box>
            </Box>
            <Grid container sx={{px:{xs:1,lg:8},borderRadius:2}} spacing={1}>
                {
                    cardArray.map((item,index) => {

                        const Icon = item.icon

                        return(
                            <Grid size={{xs:6,sm:4,nd:3,lg:4}} key={index} sx={{border:"1px solid #94A3B8",borderRadius:2,p:0.3}}>
                                <Card  elevation={0} sx={{height:"100%",boxShadow:0}}>
                                    <CardContent sx={{height:"100%"}}>
                                        <Box sx={{height:"100%",display:"flex",alignItems:{xs:"start",lg:"center"},gap:2}}>
                                            <Box sx={{display:"flex",flexDirection:{xs:"column",lg:"row"},gap:2}}>
                                                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",p:2,width:"50px",height:"50px",backgroundColor:item.color,borderRadius:"100%"}}>
                                                    <Icon sx={{color:"white"}}/>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{fontWeight:"bold"}}>{item.heading}</Typography>
                                                    <Typography sx={{fontSize:"12px",height:"40%"}}>{item.text}</Typography>
                                                </Box>
                                            </Box>
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

export default Services;
