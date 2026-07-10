import Box from '@mui/material/Box';
import React from 'react';
import TrainingBanner from "../../assets/Images/TrainingBanner.png"
import Typography from '@mui/material/Typography';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SupportIcon from '@mui/icons-material/Support';
import FactoryIcon from '@mui/icons-material/Factory';
import { CommonButton } from '../../StyledComponents/CommonButton';

const Training = () => {

    const trainingArray = [
        {
            icon:ModelTrainingIcon,
            text:"Practical Training",
            borderRight:true
        },
        {
            icon:AccountTreeIcon,
            text:"Live Projects",
             borderRight:true
        },
        {
            icon:SupportIcon,
            text:"Placement Support",
             borderRight:true
        },
        {
            icon:FactoryIcon,
            text:"Industry Expert Trainers",
             borderRight:false
        }
    ]
    return (
        <Box className="container" component={'div'} sx={{mt:4,height:"35vh",display:"flex",justifyContent:"end",alignItems:"center"}}>
            <Box sx={{width:"40vw",display:"flex",flexDirection:"column",justifyContent:"space-between",px:2,gap:1}}>
                <Typography component={"p"} variant="p" sx={{color:"#E2BE64"}}>BUILD YOUR CAREER WITH US</Typography>
                <Typography component={"h1"} variant="h4" sx={{color:"white"}}>Best Software Training Institute in Coimbatore with Placement</Typography>
                <Box sx={{display:"flex",color:"white"}}>
                    {
                        trainingArray.map((item,index) => {
                            const Icon = item.icon

                            return(
                               <Box key={index} sx={{display:"flex",gap:3,flexDirection:"column",alignItems:"center",borderRight:item.borderRight? "1px solid white" : "",width:"25%"}}>
                                  <Icon/>
                                  <Typography component={"p"} variant='p' sx={{textAlign:"center",fontSize:"16px"}}>{item.text}</Typography>
                               </Box>
                                
                            )
                        })
                    }
                </Box>
            </Box>
            <Box sx={{height:"20vh",width:"2px",backgroundColor:"white"}}></Box>
            <Box sx={{width:"20vw",px:2,display:"flex",flexDirection:"column",gap:1}}>
                <CommonButton variant='contained' sx={{backgroundColor:'white',color:"black"}}>View Courses</CommonButton>
                <Typography sx={{color:"#E2BE64"}}>Enrol in Our Next Batch and Kickstart Your Career!</Typography>
            </Box>
        </Box>
    );
}

export default Training;
