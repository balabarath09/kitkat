import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { CommonButton } from '../../StyledComponents/CommonButton';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Logo1 from "../../assets/Images/Logo1.jpg"
import Logo2 from "../../assets/Images/Logo2.png"
import Logo3 from "../../assets/Images/Logo3.png"
import Logo4 from "../../assets/Images/Logo4.jpg"
import Logo5 from "../../assets/Images/Logo5.png"
import Logo6 from "../../assets/Images/Logo6.png"
import Vijay from "../../assets/Images/Vijay.jpg"
const Review = () => {
// reviewData.js

const reviewData = [
        {
            id: 1,
            name: "Barath",
            company: "Sri Kumaran Textiles",
            review:
            "KitKat Software Technologies delivered our website on time with excellent quality.",
            image: Vijay,
        },
        {
            id: 2,
            name: "Bala",
            company: "Vision Matrimony",
            review:
            "Professional team with excellent support. Highly recommended.",
            image: Vijay,
        },
        {
            id: 3,
            name: "Priya",
            company: "GreenField",
            review:
            "Great experience working with the team. The project was completed before deadline.",
            image: Vijay,
        },
        ];

        const logoArray = [Logo1,Logo2,Logo3,Logo4,Logo5,Logo6]
    return (
        <Box sx={{mt:4}}>
            <Grid container sx={{px:8}}>
                <Grid size={4} sx={{display:"flex",flexDirection:"column",gap:2,px:4}}>
                    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <Typography sx={{fontWeight:800}}>What Our Clients Say</Typography>
                        <Box component={"div"} sx={{width:"35px",height:"2px",backgroundColor:"#0749C4"}}></Box>
                    </Box>
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000,
                            }}
                            loop
                              style={{
                                    width: "100%",
                                    paddingBottom: "40px",
                                    zIndex:0
                                }}
                            >
                                {
                                    reviewData.map((item,index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <Card sx={{border:"2px solid #EBF0F3",boxShadow:"0",borderRadius:4}}>
                                                    <CardContent sx={{display:"flex",flexDirection:"column"}}>
                                                        <Typography sx={{color:"blue"}}>
                                                            ❝
                                                        </Typography>
                                                        <Typography>{item.review}</Typography>
                                                        <Box sx={{display:"flex",alignItems:"center",gap:2,mt:2}}>
                                                            <Avatar src={item.image}/>
                                                            <Box>
                                                                <Typography>{item.name}</Typography>
                                                                <Typography>{item.company}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </CardContent>
                                                </Card>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                        </Swiper>
                </Grid>
                <Grid size={3} sx={{p:3,borderLeft:"1px solid #EBF0F3",borderRight:"1px solid #EBF0F3"}}>
                    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}}>
                        <Box sx={{display:"flex",alignItems:"center"}}>
                            <ShoppingBagIcon sx={{color:"#0749C4"}}/>
                            <Typography sx={{fontWeight:800}}>Google Reviews</Typography>
                        </Box>
                        <Box sx={{display:"flex",flexDirection:"column",gap:1}}>
                            <Typography component={'h1'} variant='h4' sx={{fontWeight:600}}>4.9</Typography>
                            <Box></Box>
                            <Typography component={"p"} variant='p'>Based on 120+ reviews</Typography>
                            <CommonButton variant='outlined' endIcon={<EastOutlinedIcon/>}>Read All Reviews</CommonButton>
                        </Box>
                        <Box></Box>
                    </Box>
                </Grid>
                <Grid size={5} sx={{display:"flex",flexDirection:"column"}}>
                    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <Typography sx={{fontWeight:800}}>Our Clients</Typography>
                        <Box component={"div"} sx={{width:"35px",height:"2px",backgroundColor:"#0749C4"}}></Box>
                    </Box>
                    <Grid container spacing={2} sx={{px:5,height:"50%",mt:4}}>
                        {
                            logoArray.map((item,index) => {
                                return (
                                    <Grid size={4} key={index} sx={{display:"flex",alignItems:"center",height:"50%",border:"1px solid #EBF0F3",borderRadius:3,p:1}}>
                                        <Box component={'img'} src={item} sx={{width:"100%",height:"100%"}}/>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <Box></Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Review;