import Box from '@mui/material/Box';
import React from 'react';
import HomeBanner from "../../assets/Images/HomeBanner.png"
import { CommonButton } from '../../StyledComponents/CommonButton';
import Typography from '@mui/material/Typography';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SupportIcon from '@mui/icons-material/Support';
import FactoryIcon from '@mui/icons-material/Factory';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StarIcon from '@mui/icons-material/Star';

const Hero = () => {
        const trainingArray = [
        {
            icon:ModelTrainingIcon,
            text:"Website Development",
            color:"#055DD8"
        },
        {
            icon:AccountTreeIcon,
            text:"Mobile App Development",
            color:"#5EA936",
        },
        {
            icon:SupportIcon,
            text:"Custom Software Development",
            color:"#FE8240"
        },
    ]
    return (
        // <Box sx={{height:"90vh"}}>
        //     <Box component={'img'} src={HomeBanner} sx={{width:"100%",height:"100%"}}/>
        // </Box>
                <Box className="hero-container" component={'div'} sx={{height:"90vh",display:"flex",flexDirection:"column",justifyContent:"center",gap:10}}>
                    <Box sx={{width:"45vw",display:"flex",flexDirection:"column",justifyContent:"space-between",px:2,gap:5}}>
                        <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                            <Typography component={"h1"} variant="h4" sx={{fontWeight:900}}>Best Software Development  Company in <span style={{color:"#FD7A25"}}>Coimbatore</span></Typography>
                            <Typography component={"p"} variant="p" >We build websites ,mobile apps and custom software thathelp business grow,automate and scale.</Typography>
                        </Box>
                        <Box sx={{display:"flex",justifyContent:"space-between",gap:2}}>
                            {
                                trainingArray.map((item,index) => {
                                    const Icon = item.icon
        
                                    return(
                                       <Box key={index} sx={{display:"flex",gap:1,alignItems:"center"}}>
                                            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:item.color,p:1.5,borderRadius:50}}>
                                                <Icon/>
                                            </Box>
                                          <Typography component={"p"} variant='p' sx={{fontSize:"16px"}}>{item.text}</Typography>
                                       </Box>
                                        
                                    )
                                })
                            }
                        </Box>
                        <Box sx={{display:"flex",gap:3}}>
                            <CommonButton variant='contained' endIcon={<EastOutlinedIcon/>}>Get a Free Consultation</CommonButton>
                            <CommonButton sx={{color:"green"}} variant='outlined' startIcon={<WhatsAppIcon/> }>Chat on Whatsapp</CommonButton>
                        </Box>
                    </Box>
                    <Box sx={{display:"flex",justifyContent:"end",px:10}}>
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#032451",width:"20vw",borderRadius:"5px",p:1.5,gap:1}}>
                            <StarIcon sx={{color:"#FBC21D",fontSize:"32px"}}/>
                            <Typography sx={{color:"white"}}>10+ Years of Excellence Delivering Digital Success</Typography>
                        </Box>
                    </Box>
                </Box>
    );
}

export default Hero;
