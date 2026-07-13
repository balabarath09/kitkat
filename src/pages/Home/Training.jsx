// import Box from '@mui/material/Box';
// import React from 'react';
// import TrainingBanner from "../../assets/Images/TrainingBanner.png"
// import Typography from '@mui/material/Typography';
// import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
// import AccountTreeIcon from '@mui/icons-material/AccountTree';
// import SupportIcon from '@mui/icons-material/Support';
// import FactoryIcon from '@mui/icons-material/Factory';
// import { CommonButton } from '../../StyledComponents/CommonButton';

// const Training = () => {

//     const trainingArray = [
//         {
//             icon:ModelTrainingIcon,
//             text:"Practical Training",
//             borderRight:true
//         },
//         {
//             icon:AccountTreeIcon,
//             text:"Live Projects",
//              borderRight:true
//         },
//         {
//             icon:SupportIcon,
//             text:"Placement Support",
//              borderRight:true
//         },
//         {
//             icon:FactoryIcon,
//             text:"Industry Expert Trainers",
//              borderRight:false
//         }
//     ]
//     return (
//         <Box className="container" component={'div'} sx={{mt:4,height:"35vh",display:"flex",justifyContent:"end",alignItems:"center"}}>
//             <Box sx={{width:{xs:"40vw"},display:"flex",flexDirection:"column",justifyContent:"space-between",px:2,gap:1}}>
//                 <Typography component={"p"} variant="p" sx={{color:"#E2BE64"}}>BUILD YOUR CAREER WITH US</Typography>
//                 <Typography component={"h1"} variant="h4" sx={{color:"white"}}>Best Software Training Institute in Coimbatore with Placement</Typography>
//                 <Box sx={{display:"flex",color:"white"}}>
//                     {
//                         trainingArray.map((item,index) => {
//                             const Icon = item.icon

//                             return(
//                                <Box key={index} sx={{display:"flex",gap:3,flexDirection:"column",alignItems:"center",borderRight:item.borderRight? "1px solid white" : "",width:"25%"}}>
//                                   <Icon/>
//                                   <Typography component={"p"} variant='p' sx={{textAlign:"center",fontSize:"16px"}}>{item.text}</Typography>
//                                </Box>
                                
//                             )
//                         })
//                     }
//                 </Box>
//             </Box>
//             <Box sx={{height:"20vh",width:"2px",backgroundColor:"white"}}></Box>
//             <Box sx={{width:"20vw",px:2,display:"flex",flexDirection:"column",gap:1}}>
//                 <CommonButton variant='contained' sx={{backgroundColor:'white',color:"black"}}>View Courses</CommonButton>
//                 <Typography sx={{color:"#E2BE64"}}>Enrol in Our Next Batch and Kickstart Your Career!</Typography>
//             </Box>
//         </Box>
//     );
// }
// export default Training;

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SupportIcon from "@mui/icons-material/Support";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StarIcon from "@mui/icons-material/Star";
import HeroBanner from "../../assets/Images/HeroBanner.png";
import { CommonButton } from "../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import TrainingImg from "../../assets/Images/TrainingImg.png"
import FactoryIcon from '@mui/icons-material/Factory';
const Hero = () => {
  const trainingArray = [
    {
      icon: ModelTrainingIcon,
      text: "Website Development",
      borderRight:true,
    },
    {
      icon: AccountTreeIcon,
      text: "Mobile App Development",
      borderRight:true,
    },
    {
      icon: SupportIcon,
      text: "Custom Software Development",
      borderRight:true,
    }, 
    {
    icon:FactoryIcon,
    text:"Industry Expert Trainers",
    borderRight:false
    }
  ];

  return (
        <Box sx={{position:"relative",height:{md:"40vh"},backgroundClip:"red",mt:2}}>
            <Grid container sx={{height:"100%"}}>
                <Grid size={{ xs: 12, md: 4 }} sx={{height:"100%"}}>
                    <Box sx={{position: "relative",width: "100%",height:"100%",overflow: "hidden", }}>
                        <Box component="img" src={TrainingImg} sx={{width: "100%",height:"100%",objectFit: "cover",display: "block", }}/>

                        {/* Fade Effect */}
                        <Box sx={{position: "absolute",bottom: 0,right: 0, 
                            width:{xs:"100%",md:"180px"},
                            height: {xs:"65%",md:"100%"},
                            background: {
                            xs: "linear-gradient(to top, #0043C1 0%, #0043C1 05%, rgba(255,255,255,0.8) 50%, transparent 100%)",
                            md: "linear-gradient(to left, #0043C1 0%, #0043C1 10%, rgba(255,255,255,0.8) 50%, transparent 100%)",
                            },
                            pointerEvents: "none",
                        }}
                        />
                    </Box>
                </Grid>
                <Grid size={{xs:12,md:8}} sx={{height:{xs:"100%",md:"40vh"},display:"flex",justifyContent:"space-between",backgroundColor:"#0043C1",p:1}}>
                    <Box >
                        <Box sx={{display:"flex",height:"100%",flexDirection:{xs:"column",nd:"row"},alignItems:{nd:"center"},gap:{xs:3,nd:2}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                                <Box sx={{flexGrow:{nd:1}}}>
                                    <Typography  sx={{color:"#E2BE64",fontWeight:600,fontSize:{md:"0.8rem"}}}>BUILD YOUR CAREER WITH US</Typography>
                                    <Typography component={'h1'} variant="h3" sx={{fontSize:{md:"2rem",lg:"2.5rem"},fontWeight:"600",color:"white"}}>Best Software Training Institute in Coimbatore with Placement</Typography>
                                </Box>
                                <Box sx={{flexGrow:{nd:1}}}>
                                    <Grid container spacing={1} >
                                        {
                                            trainingArray.map((item,index) => {
                                                const Icon = item.icon
                                                return (
                                                    <Grid key={index} size={{xs:6,sm:3,nd:6}} >
                                                        <Box sx={{display:"flex",alignItems:"center",color:"white",gap:1,height:"100%"}}>
                                                            <Icon/>
                                                            <Typography>{item.text}</Typography>
                                                        </Box>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                </Box>
                            </Box>
                            <Box sx={{height:"20vh",width:"2px",backgroundColor:"white",display:{xs:"none",nd:"block",}}}></Box>
                            <Box sx={{flexGrow:{nd:1}}}>
                                <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row",nd:"column"},alignItems:"center",gap:2}}>
                                    <CommonButton variant='contained' sx={{backgroundColor:'white',color:"black",width:{nd:"100%"}}}>View Courses</CommonButton>
                                    <Typography sx={{color:"#E2BE64",textAlign:"center"}}>Enrol in Our Next Batch and Kickstart Your Career!</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Box>
  );
};

export default Hero;