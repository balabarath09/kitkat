import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import KitKatLogo from "../assets/Images/KitKatLogo.png"
import { CommonButton } from '../StyledComponents/CommonButton';
import CustomizedMenus from '../StyledComponents/Dropdown';

const Navbar = () => {
    return (
        <>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",px:3,py:2,height:"10vh"}}>
            <Box component={"img"} src={KitKatLogo}  sx={{height:"50px"}}/>
            <Box sx={{display:"flex",gap:"10px",alignItems:"center"}}>
                    <Typography>Home</Typography>
                    <Typography>About Us</Typography>
                    {/* <Typography>Services</Typography> */}
                    <CustomizedMenus/>
                    <Typography>Training</Typography>
                    <Typography>Portfolio</Typography>
                    <Typography>Blog</Typography>
                    <Typography>Contact Us</Typography>
            </Box>
            <Box sx={{display:"flex",alignItems:"center",gap:"10px"}}>
                <Box sx={{display:"flex",gap:"5px",alignItems:"center"}}>
                    <CallIcon/>
                    <Typography>+ 91 93638 39353</Typography>
                </Box>
                <CommonButton variant="contained">Get Free Quote</CommonButton>

            </Box>
        </Box>
        </>
    );
}

export default Navbar;
