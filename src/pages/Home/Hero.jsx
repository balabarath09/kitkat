// import Box from '@mui/material/Box';
// import React from 'react';
// import HomeBanner from "../../assets/Images/HomeBanner.png"
// import { CommonButton } from '../../StyledComponents/CommonButton';
// import Typography from '@mui/material/Typography';
// import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
// import AccountTreeIcon from '@mui/icons-material/AccountTree';
// import SupportIcon from '@mui/icons-material/Support';
// import FactoryIcon from '@mui/icons-material/Factory';
// import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import StarIcon from '@mui/icons-material/Star';

// const Hero = () => {
//         const trainingArray = [
//         {
//             icon:ModelTrainingIcon,
//             text:"Website Development",
//             color:"#055DD8"
//         },
//         {
//             icon:AccountTreeIcon,
//             text:"Mobile App Development",
//             color:"#5EA936",
//         },
//         {
//             icon:SupportIcon,
//             text:"Custom Software Development",
//             color:"#FE8240"
//         },
//     ]
//     return (
//         // <Box sx={{height:"90vh"}}>
//         //     <Box component={'img'} src={HomeBanner} sx={{width:"100%",height:"100%"}}/>
//         // </Box>
//                 <Box className="hero-container" component={'div'} sx={{height:"90vh",display:"flex",flexDirection:"column",justifyContent:"space-between",pb:2,pt:10}}>
//                     <Box sx={{width:"45vw",display:"flex",flexDirection:"column",justifyContent:"space-between",px:2,gap:5}}>
//                         <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
//                             <Typography component={"h1"} variant="h4" sx={{fontWeight:900}}>Best Software Development  Company in <span style={{color:"#FD7A25"}}>Coimbatore</span></Typography>
//                             <Typography component={"p"} variant="p" >We build websites ,mobile apps and custom software thathelp business grow,automate and scale.</Typography>
//                         </Box>
//                         <Box sx={{display:"flex",justifyContent:"space-between",gap:2}}>
//                             {
//                                 trainingArray.map((item,index) => {
//                                     const Icon = item.icon
        
//                                     return(
//                                        <Box key={index} sx={{display:"flex",gap:1,alignItems:"center"}}>
//                                             <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:item.color,p:1.5,borderRadius:50}}>
//                                                 <Icon/>
//                                             </Box>
//                                           <Typography component={"p"} variant='p' sx={{fontSize:"16px"}}>{item.text}</Typography>
//                                        </Box>
                                        
//                                     )
//                                 })
//                             }
//                         </Box>
//                         <Box sx={{display:"flex",gap:3}}>
//                             <CommonButton variant='contained' endIcon={<EastOutlinedIcon/>}>Get a Free Consultation</CommonButton>
//                             <CommonButton sx={{color:"green",border:"1px solid green"}} variant='outlined' startIcon={<WhatsAppIcon/> }>Chat on Whatsapp</CommonButton>
//                         </Box>
//                     </Box>
//                     <Box sx={{display:"flex",justifyContent:"end",px:10}}>
//                         <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#032451",width:"20vw",borderRadius:"5px",p:1.5,gap:1}}>
//                             <StarIcon sx={{color:"#FBC21D",fontSize:"32px"}}/>
//                             <Typography sx={{color:"white"}}>10+ Years of Excellence Delivering Digital Success</Typography>
//                         </Box>
//                     </Box>
//                 </Box>
//     );
// }

// export default Hero;

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
const Hero = () => {
  const trainingArray = [
    {
      icon: ModelTrainingIcon,
      text: "Website Development",
      color: "#055DD8",
      xs:6
    },
    {
      icon: AccountTreeIcon,
      text: "Mobile App Development",
      color: "#5EA936",
      xs:6
    },
    {
      icon: SupportIcon,
      text: "Custom Software Development",
      color: "#FE8240",
      xs:8
    },
  ];

  return (
//     <Box
//       sx={{
//         minHeight: "90vh",
//         display: "flex",
//         flexDirection: {
//           xs: "column",
//           md: "row",
//         },
//       }}
//     >
//       {/* Left Side */}

//       <Box
//         sx={{
//           width: {
//             xs: "100%",
//             md: "50%",
//           },
//           backgroundColor: "#fff",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           px: {
//             xs: 3,
//             sm: 5,
//             md: 8,
//           },
//           py: {
//             xs: 6,
//             md: 0,
//           },
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: 4,
//             width: "100%",
//           }}
//         >
//           <Box>
//             <Typography
//               component="h1"
//               sx={{
//                 fontWeight: 900,
//                 lineHeight: 1.2,
//                 fontSize: {
//                   xs: "2rem",
//                   sm: "2.7rem",
//                   md: "3.4rem",
//                 },
//               }}
//             >
//               Best Software Development Company in{" "}
//               <Box component="span" sx={{ color: "#FD7A25" }}>
//                 Coimbatore
//               </Box>
//             </Typography>

//             <Typography
//               sx={{
//                 mt: 2,
//                 color: "#555",
//                 lineHeight: 1.8,
//                 fontSize: {
//                   xs: "15px",
//                   md: "17px",
//                 },
//               }}
//             >
//               We build websites, mobile apps and custom software that help
//               businesses grow, automate and scale.
//             </Typography>
//           </Box>

//           {/* Services */}

//           <Box
//             sx={{
//               display: "flex",
//               flexWrap: "wrap",
//               gap: 3,
//             }}
//           >
//             {trainingArray.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <Box
//                   key={index}
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 1.5,
//                     width: {
//                       xs: "100%",
//                       sm: "45%",
//                       lg: "30%",
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: 55,
//                       height: 55,
//                       borderRadius: "50%",
//                       bgcolor: item.color,
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       color: "#fff",
//                     }}
//                   >
//                     <Icon />
//                   </Box>

//                   <Typography fontWeight={500}>
//                     {item.text}
//                   </Typography>
//                 </Box>
//               );
//             })}
//           </Box>

//           {/* Buttons */}

//           <Box
//             sx={{
//               display: "flex",
//               gap: 2,
//               flexDirection: {
//                 xs: "column",
//                 sm: "row",
//               },
//             }}
//           >
//             <CommonButton
//               variant="contained"
//               endIcon={<EastOutlinedIcon />}
//             >
//               Get a Free Consultation
//             </CommonButton>

//             <CommonButton
//               variant="outlined"
//               startIcon={<WhatsAppIcon />}
//               sx={{
//                 color: "green",
//                 borderColor: "green",
//                 "&:hover": {
//                   borderColor: "green",
//                 },
//               }}
//             >
//               Chat on WhatsApp
//             </CommonButton>
//           </Box>

//           {/* Experience */}

//           <Box
//             sx={{
//               background: "#032451",
//               color: "#fff",
//               borderRadius: 2,
//               p: 2,
//               display: "flex",
//               alignItems: "center",
//               gap: 2,
//               width: {
//                 xs: "100%",
//                 sm: "380px",
//               },
//             }}
//           >
//             <StarIcon
//               sx={{
//                 color: "#FBC21D",
//                 fontSize: 35,
//               }}
//             />

//             <Typography>
//               10+ Years of Excellence Delivering Digital Success
//             </Typography>
//           </Box>
//         </Box>
//       </Box>

//       {/* Right Side */}

// <Box
//   sx={{
//     width: {
//       xs: "100%",
//       md: "50%",
//     },
//     minHeight: {
//       xs: "350px",
//       md: "90vh",
//     },
//     position: "relative",
//     overflow: "hidden",
//   }}
// >
//   <Box
//     component="img"
//     src={HeroBanner}
//     alt="Hero"
//     sx={{
//       width: "100%",
//       height: "100%",
//       objectFit: "cover",
//       display: "block",
//     }}
//   />

//   {/* Fade Effect */}
//   <Box
//     sx={{
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "120px", // Increase/decrease for stronger fade
//       height: "100%",
//      background:
//   "linear-gradient(to right, #fff 0%, #fff 20%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0.5) 70%, transparent 100%)",
//       pointerEvents: "none",
//     }}
//   />
// </Box>
//     </Box>
        <Box sx={{position:"relative"}}>
            <Grid container>
                <Grid size={{xs:12,md:4.5}}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column"}}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,pl:{xs:2,lg:4},p:{xs:2,lg:0},gap:{xs:2,lg:0}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{lg:"2.5rem"},fontWeight:"600"}}>Best Software Development Company in <Box component={'span'} sx={{color:"#FD7A25"}}>Coimbatore</Box></Typography>
                                <Typography >We build websites, mobile apps and custom software that help businesses grow, automate and scale.</Typography>
                            </Box>
                            {/* <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:2}}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Box sx={{display:"flex",gap:1,alignItems:"center"}}>
                                                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:item.color,p:1.5,borderRadius:50}}>
                                                    <Icon/>
                                                </Box>
                                                <Typography>{item.text}</Typography>
                                            </Box>
                                        )
                                    })
                                }
                            </Box> */}
                            <Grid container spacing={1}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Grid size={{xs:4}} sx={{}}>
                                                <Box sx={{display:"flex",gap:1,alignItems:"center"}}>
                                                    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:item.color,p:{xs:1,lg:1.5},borderRadius:50}}>
                                                        <Icon sx={{fontSize:{xs:"1rem"}}}/>
                                                    </Box>
                                                    <Typography sx={{fontSize:{xs:"0.55rem"}}}>{item.text}</Typography>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                        <Box sx={{display:"flex",justifyContent:"end",px:10,position:"absolute",bottom:5,right:0,zIndex:1}}>
                            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#032451",borderRadius:"5px",p:{xs:1,lg:1.5},gap:1}}>
                                <StarIcon sx={{color:"#FBC21D",fontSize:{xs:"1rem",lg:"32px"}}}/>
                                <Typography sx={{color:"white",fontSize:{xs:"0.8rem"}}}>10+ Years of Excellence Delivering Digital Success</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, lg: 7.5 }}>
                    <Box sx={{position: "relative",width: "100%",height: "100%",overflow: "hidden", }}>
                        <Box component="img" src={HeroBanner} sx={{width: "100%",height: "100%",objectFit: "cover",display: "block", }}/>

                        {/* Fade Effect */}
                        <Box sx={{position: "absolute",top: 0,left: 0, 
                            width:{xs:"100%",lg:"180px"},
                            height: {xs:"100px",lg:"100%"},
                            background: {
                            xs: "linear-gradient(to bottom, white 0%, white 20%, rgba(255,255,255,0.8) 50%, transparent 100%)",
                            lg: "linear-gradient(to right, white 0%, white 20%, rgba(255,255,255,0.8) 50%, transparent 100%)",
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