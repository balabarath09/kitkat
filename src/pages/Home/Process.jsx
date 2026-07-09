import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const Process = () => {

    const serviceArray = [
        {
            icon:ApartmentOutlinedIcon,
            text:"Retail & E-commerce",
            color:"#378E9D"
        },
        {
            icon:CheckroomOutlinedIcon,
            text:"Textile & Manufacturing",
            color:"#D5BC74"
        },
        {
            icon:MedicalServicesOutlinedIcon,
            text:"Health & Medical",
            color:"#5C96A8"
        },
        {
            icon:HomeOutlinedIcon,
            text:"Real Estate & Matrimonial",
            color:"#F73455"
        },
        {
            icon:SchoolOutlinedIcon,
            text:"Education & Training",
            color:"#1A7CAD"
        },
        {
            icon:LocalShippingOutlinedIcon,
            text:"Logistics & Transportation",
            color:"#8275C0"
        },
        {
            icon:AccountBalanceWalletOutlinedIcon,
            text:"Finance & Microfinance",
            color:"#75B35C"
        },
        {
            icon:AddchartOutlinedIcon,
            text:"And Many More",
            color:"#516B93"
        },
    ]

    const processArray = [
        {
            icon:SearchIcon,
            color:"",
            step:1,
            title:"Discovery",
            text:"Understanding your goals and requirements"
        },
        {
            icon:CreateOutlinedIcon,
            color:"#FE8240",
            step:2,
            title:"Design",
            text:"Wiredframes & prototypes for your approval"
        },
        {
            icon:CodeOutlinedIcon,
            color:"",
            step:3,
            title:"Development",
            text:"Agile development with regular updates"
        },
        {
            icon:VerifiedUserOutlinedIcon,
            color:"",
            step:4,
            title:"Testing",
            text:"Regular testing for bug-free delivery"
        },
        {
            icon:RocketLaunchOutlinedIcon,
            color:"",
            step:5,
            title:"Launch",
            text:"Deploying your solution to the world"
        },
        {
            icon:HeadsetMicOutlinedIcon,
            color:"",
            step:6,
            title:"Support",
            text:"Ongoing support & continuos improvement"
        }
    ]
    return (
        <Box sx={{mt:4}}>
            <Grid container sx={{px:8}}>
                <Grid size={8} sx={{px:3}}>
                    <Box sx={{display:"flex",gap:1.5}}>
                        {
                            processArray.map((item,index) => {
                                const Icon = item.icon

                                return(
                                    <Box sx={{display:"flex"}}>

                                        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:1}}>
                                            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:item.color,p:1.5,borderRadius:50}}>
                                                <Icon/>
                                            </Box>
                                            <Typography sx={{textAlign:"center",fontSize:"14px",fontWeight:"600"}}>{item.step}</Typography>
                                            <Typography sx={{textAlign:"center",fontSize:"14px",fontWeight:"600"}}>{item.title}</Typography>
                                            <Typography sx={{textAlign:"center",fontSize:"13px"}}>{item.text}</Typography>
                                        </Box>
                                        {
                                            index !== processArray.length -1 && (
                                                <EastOutlinedIcon sx={{mt:1.5}}/>
                                            )
                                        }
                                    </Box>
                              
                                   
                                )
                            })
                        }
                    </Box>
                </Grid>
                <Grid size={4} sx={{px:3}}>
                    <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                        <Typography component={"h1"} variant='h6' sx={{fontWeight:600}}>Industries We Serve</Typography>
                        <Box>
                            <Grid container spacing={1}>
                                {
                                    serviceArray.map((item,index) => {
                                        const Icon = item.icon

                                        return (
                                            <Grid size={6} key={index}>
                                                <Box sx={{display:"flex",alignItems:"center",gap:1.5}}>
                                                    <Icon sx={{fontSize:"28px",color:item.color}}/>
                                                    <Typography sx={{fontSize:"12px"}}>{item.text}</Typography>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Process;
