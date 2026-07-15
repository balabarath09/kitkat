import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import ReactLogo from "../../../assets/Images/ReactLogo.svg"
import NextjsLogo from "../../../assets/Images/NextjsLogo.svg"
import NodejsLogo from "../../../assets/Images/NodejsLogo.svg"
import LaravelLogo from "../../../assets/Images/LaravelLogo.svg"
import PHPLogo from "../../../assets/Images/PHPLOGO.svg"
import MySqlLogo from "../../../assets/Images/MySqlLogo.svg"
import MongoDBLogo from "../../../assets/Images/MongoDBLogo.svg"
import AWSLogo from "../../../assets/Images/AWSLogo.svg"
import DockerLogo from "../../../assets/Images/DockerLogo.svg"
import FirebaseLogo from "../../../assets/Images/FirebaseLogo.svg"

function Technology() {
    const techArray = [
        {
            img:ReactLogo,
            tech:"React.js"
        },
        {
            img:NextjsLogo,
            tech:"Next.js"
        },
        {
            img:NodejsLogo,
            tech:"Node.js"
        },
        {
            img:LaravelLogo,
            tech:"Laravel"
        },
        {
            img:PHPLogo,
            tech:"PHP"
        },
        {
            img:MySqlLogo,
            tech:"MySQL"
        },
        {
            img:MongoDBLogo,
            tech:"MongoDB"
        },
        {
            img:AWSLogo,
            tech:"AWS"
        },
        {
            img:DockerLogo,
            tech:"Docker"
        },
        {
            img:FirebaseLogo,
            tech:"Firebase"
        },
    ]
  return (
    <Box sx={{mt:4,px:{lg:8},display:"flex",flexDirection:"column",gap:1}}>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Typography sx={{fontWeight:600,textAlign:"center"}}>Technologies We Use</Typography>
        </Box>
        <Grid container columns={10} spacing={2}>
            {
                techArray.map((item,index) => {
                    return (
                        <Grid size={{xs:5,sm:3.3,md:2,lg:1}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:1,alignItems:"center"}}>
                                <Box component={"img"} src={item.img} sx={{width:"100%",height:"50px"}}/>
                                <Typography>{item.tech}</Typography>
                            </Box>
                        </Grid>
                    )
                })
            }
        </Grid>
    </Box>
  )
}

export default Technology