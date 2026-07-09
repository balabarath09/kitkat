import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import GroupImg from "../../assets/Images/GroupImg.png"
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const WhyKitkat = () => {

    const infoArray = [
        {
            icon: AccessAlarmOutlinedIcon,
            Number: "10+",
            text: "Years of Experience",
        },
        {
            icon: BusinessCenterOutlinedIcon,
            Number: "500+",
            text: "Projects Completed",
        },
        {
            icon: GroupsOutlinedIcon,
            Number: "200+",
            text: "Happy Clients",
        },
        {
            icon: GroupsOutlinedIcon,
            Number: "15+",
            text: "Expert Professionals",
        },
    ];

    const pointsArray = [
        "Dedicated project managers with proactive communication",
        "Transparent pricingwith no hidden costs",
        "In-house teamof designers,developer & trainers",
        "Post-launch support and maintenance included",
        "Proven track record across web,mobile,ERP,CRM & training"
    ]

    return (
        <Box sx={{backgroundColor:"#F8FBFE",mt:2,py:2}}>
            <Grid container sx={{px:8}} spacing={1} >
                <Grid size={5} sx={{height:"100"}} >
                    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}}>
                        <Typography component={'p'} variant='p' sx={{color:"#F77230"}}>WHY CHOOSE KITKAT?</Typography>
                        <Typography component={"h1"} variant='h4'>Why We Are The Best IT Company in <Box sx={{color:"#0749C4"}} component={"span"}>Coimbatore</Box></Typography>
                        <Typography component={"p"} variant='p' sx={{fontSize:"18px"}}>We combine technology,transparency and dedicationto deliver solutions that create real impact foryour business</Typography>
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
                <Grid size={4.5} sx={{p:1}}>
                    <Box component={'img'} src={GroupImg} sx={{width:"100%",height:"100%",borderRadius:2}}/>
                </Grid>
                <Grid size={2.5} sx={{backgroundColor:"#042F60",borderRadius:2}}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",px:2,py:2}}>
                        {infoArray.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <Box key={index} sx={{display:"flex",alignItems:"center",gap:2,color:"white",flexGrow:1,borderRight:item.borderRight ? "2px solid white" : ""}}>
                                    <Box>
                                        <Icon />
                                    </Box>

                                    <Box>
                                        <Typography sx={{color:"#FC8B11"}}>{item.Number}</Typography>
                                        <Typography>{item.text}</Typography>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default WhyKitkat;
