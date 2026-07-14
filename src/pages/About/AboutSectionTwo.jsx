import Typography from '@mui/material/Typography';
import SkillsImage from '../../assets/Images/SkillsImage.jpg'
import MissionImage from '../../assets/Images/MissionImage.jpg'
import VisionImage from '../../assets/Images/VisionImage.jpg'
import OfferingImage from '../../assets/Images/OfferingImage.jpg'
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const AboutSectionTwo = () => {
    return (
        <Box sx={{display:"flex",flexDirection:"column",gap:6,px:{xs:1,lg:16}}}>
            <Grid container spacing={{xs:2,lg:10}}>
                <Grid size={{xs:12,md:6}} sx={{display:"flex",alignItems:"center"}}>
                    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
                        <Typography component={'h1'} variant='h5' sx={{fontWeight:600}}>Our Skills</Typography>
                        <Typography sx={{textAlign:"center"}}>KITKAT was established to deliver offshore software development services and operates as a 100% software export unit. We have successfully delivered medium and large-scale projects on time and within budget using our Offshore Delivery Model, supported by strong managerial and technical expertise. With over 10+ years of experience, KITKAT has adapted to evolving technologies and understands the cross-cultural needs of region-specific customers.</Typography>
                    </Box>
                </Grid>
                <Grid size={{xs:12,md:6}} >
                    <Box component={"img"} src={SkillsImage} sx={{width:"100%"}}/>
                </Grid>
            </Grid>
            <Grid container spacing={{xs:2,lg:10}}>
                <Grid size={{xs:12,md:6}} >
                    <Box component={"img"} src={VisionImage} sx={{width:"100%"}}/>
                </Grid>
                <Grid size={{xs:12,md:6}}  sx={{display:"flex",alignItems:"center"}}>
                    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
                        <Typography component={'h1'} variant='h5' sx={{fontWeight:600}}>Our Vision</Typography>
                        <Typography sx={{textAlign:"center"}}>To be a leading information technology solutions and services provider by consistently fulfilling the needs of customers, partners, and employees. We aim to deliver efficient and effective services using the best resources available. Our offshore delivery model enables us to provide highly skilled professionals at competitive costs while meeting challenging timelines.</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={{xs:2,lg:10}}>
                <Grid size={{xs:12,md:6}}  sx={{display:"flex",alignItems:"center"}}>
                    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
                        <Typography component={'h1'} variant='h5' sx={{fontWeight:600}}>Our Mission</Typography>
                        <Typography sx={{textAlign:"center"}}>To be a leading information technology solutions and services provider by consistently fulfilling the needs of customers, partners, and employees. We aim to deliver efficient and effective services using the best resources available. Our offshore delivery model enables us to provide highly skilled professionals at competitive costs while meeting challenging timelines.</Typography>
                    </Box>
                </Grid>
                <Grid size={{xs:12,md:6}} >
                    <Box component={"img"} src={MissionImage} sx={{width:"100%"}}/>
                </Grid>
            </Grid>
            <Grid container spacing={{xs:2,lg:10}}>
                <Grid size={{xs:12,md:6}} >
                    <Box component={"img"} src={OfferingImage} sx={{width:"100%"}}/>
                </Grid>
                <Grid size={{xs:12,md:6}}  sx={{display:"flex",alignItems:"center"}}>
                    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
                        <Typography component={'h1'} variant='h5' sx={{fontWeight:600}}>Our Offerings</Typography>
                        <Typography sx={{textAlign:"center"}}>We provide end-to-end solutions ranging from hardware to software, networking to live remote support, embedded systems to project assistance. We work meticulously to deliver best-in-class services tailored to customer needs.</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AboutSectionTwo;
