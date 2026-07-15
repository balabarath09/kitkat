import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import StarIcon from "@mui/icons-material/Star";
import CustomHero from "../../../assets/Images/CustomHero.png";
import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
const Hero = () => {
  const trainingArray = [
    {
      icon: SentimentSatisfiedAltOutlinedIcon,
      number:"150+",
      text: "Tailored Solutions",
      color: "#055DD8",
      borderRight:true,
      jsx:"end",
      jss:"end",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: Groups2OutlinedIcon,
      number:"10+",
      text: "Scalable & Secure",
      color: "#FE8240",
      borderRight:false,
      jsx:"end",
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
    {
      icon: BusinessCenterOutlinedIcon,
      number:"30+",
      text: "On-time Delivery",
      color: "#5EA936",
      borderRight:false,
      jss:"start",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: GppGoodOutlinedIcon,
      number:"98%",
      text: "Ongoing Support",
      color: "#0b0908",
      borderRight:false,
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
  ];

  return (
        <Box sx={{position:"relative"}}>
            <Grid container>
                <Grid size={{xs:12,md:5}}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column"}}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,p:{xs:2,lg:1},pl:{xs:2,lg:6},gap:{xs:2,lg:0}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{lg:"2.5rem"},fontWeight:"600"}}>Custom Software <Box component={'span'} sx={{color:"#FD7A25"}}>Development Company</Box> In Coimbatore</Typography>
                                <Typography >We build scalable, secure and high-performance custom software that streamlines your operations and drives real business growth.Bespoke solutions. Built around your business.</Typography>
                            </Box>
                            <Grid container spacing={1}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Grid key={index} size={{xs:item.xs,lg:item.nd}} sx={{display:"flex",}}>
                                                <Box sx={{width:{},display:"flex",gap:1,alignItems:"center",px:{sm:1.5,md:0}}}>
                                                    <Icon sx={{fontSize:{xs:"1rem",sm:"1.5rem",lg:"1rem"}}}/>
                                                    <Box sx={{display:"flex",flexDirection:"column"}}>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.8rem"},fontWeight:600}}>{item.number}</Typography>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.6rem"}}}>{item.text}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <Box sx={{display:"flex",gap:3}}>
                                <CommonButton endIcon={<EastOutlinedIcon/>} variant="contained" sx={{fontSize:"0.51rem"}}>Request a Free Consultation</CommonButton>
                                <CommonButton startIcon={<ImportantDevicesOutlinedIcon/>} variant="outlined" sx={{fontSize:"0.55rem"}}>View Our Case Studies</CommonButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Box sx={{position: "relative",width: "100%",height: "100%",overflow: "hidden", }}>
                        <Box component="img" src={CustomHero} sx={{width: "100%",height: "100%",objectFit: "cover",display: "block", }}/>

                        {/* Fade Effect */}
                        <Box sx={{position: "absolute",top: 0,left: 0, 
                            width:{xs:"100%",md:"180px"},
                            height: {xs:"100px",md:"100%"},
                            background: {
                            xs: "linear-gradient(to bottom, white 0%, white 20%, rgba(255,255,255,0.8) 50%, transparent 100%)",
                            md: "linear-gradient(to right, white 0%, white 20%, rgba(255,255,255,0.8) 50%, transparent 100%)",
                            },
                            pointerEvents: "none",
                        }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
  );
};

export default Hero;