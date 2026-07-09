import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { CommonButton } from '../../StyledComponents/CommonButton';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import Grid from '@mui/material/Grid';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CompostOutlinedIcon from '@mui/icons-material/CompostOutlined';
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const ItSolution = () => {
    
    const solutionArray = [
        {
            icon:ShoppingCartOutlinedIcon,
            text:"E-Commerce Development",
            color:"#5D96E4"
        },
        {
            icon:CompostOutlinedIcon,
            text:"CRM Software",
            color:"#FE8240"
        },
        {
            icon:RecyclingOutlinedIcon,
            text:"ERP Software",
            color:"#FE8240"
        },
        {
            icon:FingerprintOutlinedIcon,
            text:"Biometric HRM",
            color:"#6A5BE8"
        },
        {
            icon:SchoolOutlinedIcon,
            text:"School ERP",
            color:"#6A5BE8"
        },
        {
            icon:SavingsOutlinedIcon,
            text:"Gold Loan Software",
            color:"#FE8240"
        },
        {
            icon:FavoriteOutlinedIcon,
            text:"Matrimonial Websites",
            color:"#E3225D"
        },
        {
            icon:MedicalServicesOutlinedIcon,
            text:"Medical Billing Software",
            color:"#3B9CD3"
        },
        {
            icon:AccountBalanceOutlinedIcon,
            text:"Mini Banking Software",
            color:"#5A46D8"
        },
        {
            icon:PersonalVideoOutlinedIcon,
            text:"Web Applications",
            color:"#45B4C2"
        },
        {
            icon:AppRegistrationOutlinedIcon,
            text:"Customised Applications",
            color:"#F8638A"
        },
        {
            icon:LanguageOutlinedIcon,
            text:"Domain & Hosting",
            color:"#3360A8"
        },
        {
            icon:TextsmsOutlinedIcon,
            text:"Bulk SMS Services",
            color:"#2F5497"
        },
        {
            icon:MemoryOutlinedIcon,
            text:"Digital Marketing",
            color:"#234B8F"
        },
        {
            icon:NoteOutlinedIcon,
            text:"Data Analytics Services",
            color:"#42A137"
        },
        {
            icon:DisplaySettingsOutlinedIcon,
            text:"SEO & SMM Services",
            color:"#5E7FB6"
        },
    ]

    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:2,mt:2}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Typography>Our Core Services</Typography>
                <Box component={"div"} sx={{width:"35px",height:"2px",backgroundColor:"#0749C4"}}></Box>
            </Box>
            <Grid container spacing={2} sx={{px:8}}>
                {
                    solutionArray.map((item,index) => {
                        const Icon = item.icon

                        return (
                            <Grid key={index} size={1.5}>
                                <Card sx={{height:"100%"}}>
                                    <CardContent>
                                        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:1}}>
                                            <Icon sx={{color:item.color}}/>
                                            <Typography sx={{textAlign:"center",fontSize:"12px"}}>{item.text}</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <CommonButton variant='outlined' endIcon={<EastOutlinedIcon/>}>View All Solutions</CommonButton>
        </Box>
    );
}

export default ItSolution;