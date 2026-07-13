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
import SouthIcon from '@mui/icons-material/South';

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
            color:"#055DD8",
            step:1,
            title:"Discovery",
            text:"Understanding your goals and requirements"
        },
        {
            icon:CreateOutlinedIcon,
            color:"#5EA936",
            step:2,
            title:"Design",
            text:"Wiredframes & prototypes for your approval"
        },
        {
            icon:CodeOutlinedIcon,
          color:"#FE8240",
            step:3,
            title:"Development",
            text:"Agile development with regular updates"
        },
        {
            icon:VerifiedUserOutlinedIcon,
            color:"#6851D8",
            step:4,
            title:"Testing",
            text:"Regular testing for bug-free delivery"
        },
        {
            icon:RocketLaunchOutlinedIcon,
            color:"#07419E",
            step:5,
            title:"Launch",
            text:"Deploying your solution to the world"
        },
        {
            icon:HeadsetMicOutlinedIcon,
            color:"#25A59E",
            step:6,
            title:"Support",
            text:"Ongoing support & continuos improvement"
        }
    ]
    return (
        <Box sx={{mt:4}}>
            <Grid container sx={{px:{xs:1,lg:8}}}>
                <Grid size={{xs:12,lg:8}} sx={{display:"flex",justifyContent:"center",ps:3,pt:3,borderTop:"1px solid #EBF0F3",borderRight:"1px solid #EBF0F3"}}>
                    <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                        {
                            processArray.map((item,index) => {
                                const Icon = item.icon

                                return(
                                    <Box sx={{display:"flex",justifyContent:"center",mt:{xs:1,md:0}}} key={index}>
                                        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:{xs:0.5,lg:1}}}>
                                            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:item.color,p:1.5,borderRadius:50}}>
                                                <Icon/>
                                            </Box>
                                            <Typography sx={{textAlign:"center",fontSize:"14px",fontWeight:"600"}}>{item.step}</Typography>
                                            <Typography sx={{textAlign:"center",fontSize:"14px",fontWeight:"600"}}>{item.title}</Typography>
                                            <Typography sx={{textAlign:"center",fontSize:"13px"}}>{item.text}</Typography>
                                        {
                                            index !== processArray.length && (
                                                <SouthIcon
                                                    sx={{
                                                        display:{md:"none"},
                                                        visibility: index === processArray.length - 1 ? "hidden" : "visible"
                                                    }}
                                                    />
                                            )
                                        }
                                        </Box>
                                        {
                                            index !== processArray.length && (
                                                <EastOutlinedIcon
                                                    sx={{
                                                        display:{xs:"none",md:"block"},
                                                        mt: 1.5,
                                                        visibility: index === processArray.length - 1 ? "hidden" : "visible"
                                                    }}
                                                    />
                                            )
                                        }
                                    </Box> 
                                )
                            })
                        }
                    </Box>
                </Grid>
                <Grid size={{xs:12,lg:4}} sx={{px:{xs:0,lg:3},pt:3,borderTop:"1px solid #EBF0F3"}}>
                    <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                        <Typography component={"h1"} variant='h6' sx={{fontWeight:600,textAlign:{xs:"center",lg:"start"}}}>Industries We Serve</Typography>
                        <Box sx={{width:{xs:"100%",sm:"75%",md:"50%",lg:"100%"},m:"auto"}}>
                            <Grid container spacing={1}  sx={{border:{xs:"2px solid #EBF0F3",lg:0},p:{xs:2,lg:0},borderRadius:{xs:2,lg:0}}}>
                                {
                                    serviceArray.map((item,index) => {
                                        const Icon = item.icon

                                        return (
                                            <Grid size={6} key={index}>
                                                <Box sx={{display:"flex",alignItems:"center",gap:1.5}}>
                                                    <Icon sx={{fontSize:"1.7rem",color:item.color}}/>
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
            </Grid>
        </Box>
    );
}

export default Process;
