import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import React from 'react';
import { CommonButton } from '../../../StyledComponents/CommonButton';

const Pricing = () => {
    const cardArray = [
        {
            heading:"Starter Package",
            price:'1,25,000*',
            bType:"outlined",
            content:[
                "Up to 5 Pages / Modules",
                "Responsive Design",
                "Basic Features",
                "1 Month Support"
            ]
        },
        {
            heading:"Business Package",
            price:"2,75,000*",
            bType:"contained",
            content:[
                "Up to 15 Pages / Modules",
                "Advanced Features",
                "Third Party Interations",
                "3 Month Support"
            ]
        },
        {
            heading:"Enterprise Package",
            price:"5,00,000*",
            bType:"outlined",
            content:[
                "Unlimited Pages / Modules",
                "Custom Integrations",
                "Scalable Architecture",
                "6 Months Support"
            ]
        },
    ]
    return (
        <Box sx={{display:"flex",flexDirection:"column",gap:2,mt:2,px:{xs:1,lg:14}}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Typography sx={{fontWeight:600,textAlign:"center"}} >Web Application Development Packages</Typography>
                <Typography>Flexible pricing optons for startups,growing businesses and enterprises.</Typography>
            </Box>
            <Grid container spacing={2} >
                {
                    cardArray.map((item,index) => {
                        return(
                            <Grid size={{xs:12,sm:6,nd:4}} key={index}>
                                <Card  sx={{height:"100%"}}>
                                    <CardContent sx={{height:"100%"}}>
                                        <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                                            <Box sx={{display:"flex",flexDirection:"column",alignSelf:"center"}}>
                                                <Typography sx={{fontWeight:600}}>{item.heading}</Typography>
                                                <Typography sx={{fontSize:"2rem",fontWeight:600}}>₹{item.price}</Typography>
                                                <Typography sx={{fontSize:"0.7rem"}}>Onwards</Typography>
                                            </Box>
                                            <Box sx={{px:7,display:"flex",flexDirection:"column",gap:1}}>
                                               {
                                                item.content.map((subitem,subindex) => {
                                                    return (
                                                        <Box key={subindex} sx={{display:"flex",alignItems:"center",gap:1}}>
                                                            <DoneOutlinedIcon sx={{fontSize:"0.7rem",fontWeight:600}}/>
                                                            <Typography sx={{fontSize:"0.7rem"}}>{subitem}</Typography>
                                                        </Box>
                                                    )
                                                })
                                               }
                                                <CommonButton sx={{width:"100%"}} variant={item.bType}>Get Started</CommonButton>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )

                })
                }
            </Grid>
            <Box sx={{alignSelf:"center"}}>
                <Typography sx={{fontSize:"0.7rem"}}>*Prices are indicative Final cost depends on projects requirements</Typography>
            </Box>
        </Box>
    );
}

export default Pricing;
