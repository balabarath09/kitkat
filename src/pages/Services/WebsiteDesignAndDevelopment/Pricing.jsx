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
            price:'12,999',
            bType:"outlined",
            content:[
                "Up to 5 Pages",
                "Responsive Design",
                "Basic SEO",
                "Contact Form",
                "1 Month Support"
            ]
        },
        {
            heading:"Business Package",
            price:"24,999",
            bType:"contained",
            content:[
                "Up to 10 Pages",
                "CMS/WordPress",
                "Advanced SEO",
                "Speed Optimisation",
                "3 Month Support"
            ]
        },
        {
            heading:"Enterprise Package",
            price:"49,999",
            bType:"outlined",
            content:[
                "Unlimited Pages",
                "Custom Development",
                "Advanced Integrations",
                "Priority Support",
                "6 Months Support"
            ]
        },
    ]
    return (
        <Box sx={{display:"flex",flexDirection:"column",gap:2,mt:2,px:{xs:1,lg:14}}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Typography sx={{fontWeight:600,textAlign:"center"}} >Our Website Design and Development Services</Typography>
                <Box component={"div"} sx={{width:"35px",height:"2px",backgroundColor:"#0749C4"}}></Box>
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
