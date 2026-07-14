import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';

const Contact = () => {
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
        <Box sx={{backgroundColor:"#385076",display:"flex",flexDirection:"column",gap:3}}>
            <iframe style={{height:"40vh"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3231196547968!2d76.97610157363856!3d11.01436565476266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8584d03d410a3%3A0x79e8132c3d3cdf88!2sKitkat%20Software%20Technologies!5e0!3m2!1sen!2sin!4v1783683945560!5m2!1sen!2sin" width="100%" loading="lazy" ></iframe>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Box >
                    <Typography component={'h1'} variant='h4' sx={{fontWeight:600,color:"#23C2CD"}}>Get in Touch With Kitkat Software Technologies</Typography>
                </Box>
                <Box sx={{display:"flex",flexDirection:"column",alignItems:{xs:"center",md:'start'},gap:1,mt:2}}>
                    {
                        contactArray.map((item,index) => {
                            const Icon = item.icon 
                            return (
                                <Box key={index} sx={{display:"flex",gap:1,alignItems:"center",color:"white"}}>
                                    <Icon sx={{fontSize:"12px"}}/>
                                    <Typography component={'h1'} variant='h6' sx={{width:"100%",textAlign:{xs:"center",md:"start"}}}>{item.text}</Typography>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",gap:2,alignItems:"center"}}>
                <Typography component={'h1'} variant='h5' sx={{color:"white"}}>Register For More Information</Typography>
                <Box component={'form'} sx={{display:"flex",flexDirection:"column",gap:2}}>
                    <Box>
                        <Typography sx={{color:"white"}}>Name</Typography>
                        <TextField fullWidth placeholder='Enter Your Name' sx={{'& input::placeholder':{color:"white"},backgroundColor:"#545D84",border:"2px solid #888DA9"}}/>
                    </Box>
                    <Box>
                        <Typography sx={{color:"white"}}>Email</Typography>
                        <TextField fullWidth placeholder='Enter Your Name' sx={{'& input::placeholder':{color:"white"},backgroundColor:"#545D84"}}/>
                    </Box>
                    <Box>
                        <Typography sx={{color:"white"}}>Mobile Number</Typography>
                        <TextField fullWidth placeholder='Enter Your Name' sx={{'& input::placeholder':{color:"white"},backgroundColor:"#545D84"}}/>
                    </Box>
                    <Box>
                        <Typography sx={{color:"white"}}>Message</Typography>
                        <TextField fullWidth placeholder='Enter Your Name' sx={{'& input::placeholder':{color:"white"},backgroundColor:"#545D84"}}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;
