import Box from '@mui/material/Box';
import React from 'react';
import KitKatLogo from "../assets/Images/KitKatLogo.png"
import Typography from '@mui/material/Typography';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import Grid from '@mui/material/Grid';
import { CommonButton } from '../StyledComponents/CommonButton';

const Footer = () => {

    const contactArray = [
        {
            icon:PlaceOutlinedIcon,
            text:"36,Saravanampatti Main Rd, Peelamedu, Coimbatore, TamilNadu, 641004"
        },
        {
            icon:CallOutlinedIcon,
            text:"+91 9363839353"
        },
        {
            icon:EmailOutlinedIcon,
            text:"hello@kitkat.com"
        },
        {
            icon:AccessTimeOutlinedIcon,
            text:"Mon-Sat:9:30 AM - 6:30 PM"
        }
    ]
    return (
        <Box sx={{backgroundColor:"#042046",mt:4,p:3,pb:1}}>
            <Grid container spacing={{xs:2,lg:0}} sx={{display:"flex",borderBottom:"1px solid white",pb:1}}>
                <Grid size={{xs:12,sm:6,md:5,lg:2.4}} sx={{display:"flex",flexDirection:"column",alignItems:{xs:'center',md:"start"},gap:2,px:3}}>
                    <Box component={'img'} src={KitKatLogo} sx={{height:"70px"}}/>
                    <Typography component={'p'} sx={{color:"white",fontSize:"12px",textAlign:{xs:"center",md:"start"}}}>Your trusted technology partner for web,mobile,software development and training in Coimbatore.</Typography>
                    <Box sx={{color:"white",display:"flex",gap:1}}>
                        <FacebookOutlinedIcon sx={{fontSize:"20px"}}/>
                        <AddIcCallOutlinedIcon sx={{fontSize:"20px"}}/>
                        <DownloadingOutlinedIcon sx={{fontSize:"20px"}}/>
                        <SubscriptionsOutlinedIcon sx={{fontSize:"20px"}}/>
                    </Box>     
                </Grid>
                <Box sx={{display:{xs:"none",lg:"block"},height:"125px",backgroundColor:"white",width:"1px",alignSelf:"center"}}></Box>
                <Grid size={{xs:12,sm:6,md:3,lg:2}} sx={{color:"white",px:3}}>
                    <Typography component={'h1'} variant='h6' sx={{fontSize:"16px",fontWeight:600,textAlign:{xs:"center",md:"start"}}}>Quick Links</Typography>
                    <Box sx={{display:"flex",flexDirection:"column",alignItems:{xs:"center",md:'start'},gap:1,mt:2}}>
                        <Typography sx={{fontSize:"12px"}}>About Us</Typography>
                        <Typography sx={{fontSize:"12px"}}>Services</Typography>
                        <Typography sx={{fontSize:"12px"}}>Training</Typography>
                        <Typography sx={{fontSize:"12px"}}>Products</Typography>
                        <Typography sx={{fontSize:"12px"}}>Blog</Typography>
                        <Typography sx={{fontSize:"12px"}}>Contact Us</Typography>
                    </Box>
                </Grid>
                <Box sx={{display:{xs:"none",lg:"block"},height:"125px",backgroundColor:"white",width:"1px",alignSelf:"center"}}></Box>
                <Grid size={{xs:12,sm:6,md:4,lg:2}} sx={{color:"white",px:2}}>
                    <Typography component={'h1'} variant='h6' sx={{fontSize:"16px",fontWeight:600,textAlign:{xs:"center",md:"start"}}}>Our Services</Typography>
                    <Box sx={{display:"flex",flexDirection:"column",alignItems:{xs:"center",md:'start'},gap:1,mt:2}}>
                        <Typography sx={{fontSize:"12px"}}>Website Development</Typography>
                        <Typography sx={{fontSize:"12px"}}>Mobile App Development</Typography>
                        <Typography sx={{fontSize:"12px"}}>Custom Software Development</Typography>
                        <Typography sx={{fontSize:"12px"}}>Software Training</Typography>
                        <Typography sx={{fontSize:"12px"}}>Digital Marketing</Typography>
                        <Typography sx={{fontSize:"12px"}}>IT Solutions</Typography>
                    </Box>
                </Grid>
                <Box sx={{display:{xs:"none",lg:"block"},height:"125px",backgroundColor:"white",width:"1px",alignSelf:"center"}}></Box>
                <Grid size={{xs:12,sm:6,lg:2.5}} sx={{color:"white",px:3}}>
                    <Typography component={'h1'} variant='h6' sx={{fontSize:"16px",fontWeight:600,textAlign:{xs:"center",md:"start"}}}>Contact Us</Typography>
                    <Box sx={{display:"flex",flexDirection:"column",alignItems:{xs:"center",md:'start'},gap:1,mt:2}}>
                        {
                            contactArray.map((item,index) => {
                                const Icon = item.icon 
                                return (
                                    <Box key={index} sx={{display:"flex",gap:1,alignItems:"center"}}>
                                        <Icon sx={{fontSize:"12px"}}/>
                                        <Typography sx={{fontSize:"12px",width:"100%",textAlign:{xs:"center",md:"start"}}}>{item.text}</Typography>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Grid>
                <Box sx={{display:{xs:"none",lg:"block"},height:"125px",backgroundColor:"white",width:"1px",alignSelf:"center"}}></Box>
                <Grid size={{xs:12,md:6,lg:3}} sx={{px:3,color:"white",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}}>
                    <Typography component={'h1'} variant='h6' sx={{fontSize:"16px",fontWeight:600,textAlign:{xs:"center",lg:"start"}}}>Our Location</Typography>
                    <Box>
                    <iframe style={{borderRadius:"10px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3231196547968!2d76.97610157363856!3d11.01436565476266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8584d03d410a3%3A0x79e8132c3d3cdf88!2sKitkat%20Software%20Technologies!5e0!3m2!1sen!2sin!4v1783683945560!5m2!1sen!2sin" width="100%" loading="lazy" ></iframe>
                    <Box sx={{display:"flex",justifyContent:"center"}}>
                        <CommonButton variant='contained' sx={{backgroundColor:"#FA761E"}}>Get Directions</CommonButton>
                    </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{mt:1,color:"white",display:"flex",flexDirection:{xs:"column",sm:"row"},gap:{xs:1,sm:0},alignItems:"center",justifyContent:"space-between"}}>
                <Box sx={{display:"flex",alignItems:"center"}}>
                    <CopyrightOutlinedIcon sx={{fontSize:"10px"}}/>
                    <Typography sx={{fontSize:"10px"}}>2024 KitKat Software Technologies.All Rights are Reserved</Typography>
                </Box>
                <Box sx={{display:"flex",alignItems:"center"}}>
                    <Typography sx={{fontSize:"10px"}}>Privacy Policy | Terms & conditions</Typography>
                    <Typography sx={{fontSize:"10px"}}>hello@kitkat.com</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;