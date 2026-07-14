import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import SouthIcon from '@mui/icons-material/South';

const Process = () => {

    const processArray = [
        {
            icon:SearchIcon,
            color:"#055DD8",
            title:"1.Requirement Analysis",
            text:"We understand your goals, users and worldfows to deline the right solution"
        },
        {
            icon:CreateOutlinedIcon,
            color:"#5EA936",
            title:"2.UI/UX Design",
            text:"We design intuitive, responsive interfaces that offer great user experience."
        },
        {
            icon:CodeOutlinedIcon,
            color:"#FE8240",
            title:"3.Development",
            text:"Our developers build clean, scalable and secure applications susing the latest technologies."
        },
        {
            icon:VerifiedUserOutlinedIcon,
            color:"#6851D8",
            title:"4.Testing & QA",
            text:"We perform rigorous testing to ensure quality, security and performance."
        },
        {
            icon:RocketLaunchOutlinedIcon,
            color:"#07419E",
            title:"5.Deployment & Support",
            text:"We deploy your application and provide ongoing support for continuous growth."
        }
    ]
    return (
        <Box sx={{mt:4}}>
            <Grid container sx={{px:{xs:1,lg:8}}}>
                <Grid size={12} sx={{display:"flex",justifyContent:"center",ps:3,pt:3,borderTop:"1px solid #EBF0F3",borderRight:"1px solid #EBF0F3"}}>
                    <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                        {
                            processArray.map((item,index) => {
                                const Icon = item.icon

                                return(
                                    <Box sx={{display:"flex",justifyContent:"center",mt:{xs:1,md:0}}} key={index}>
                                        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:{xs:0.5,lg:1}}}>
                                            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",border:`1px solid ${item.color}`,p:1.5,borderRadius:50}}>
                                                <Icon sx={{color:item.color}}/>
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
            </Grid>
        </Box>
    );
}

export default Process;
