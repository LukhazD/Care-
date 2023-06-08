import { Box } from "@mui/material";
import headerPicture from '../../assets/images/headerPicture.png'
import careLogo from '../../assets/images/careLogo.png'
import AnimatedTitle from "./AnimatedTitle";
import SalesButton from "./SalesButton";

export default function Header(){

    return(
        <>
            <Box>
                <Box sx={{width:'100%', height:'52px', display:'flex', marginY:'1em', justifyContent:'center'}}>
                    <Box 
                    component='img' 
                    src={careLogo} 
                     
                    sx={{
                        zIndex:'1', 
                        width:'52px',
                        height:'52px',
                        position:{md:'absolute', sm:'block'},
                        userSelect:'none'
                    }}
                        />
                </Box>
                <AnimatedTitle/>
                <Box 
                component='img' 
                src={headerPicture} 
                sx={{
                    zIndex:'-1',
                    width:'100%' ,
                    userSelect:'none',
                    opacity:'0.4',
                    display:{md:'block', xs:'none', sm:'none'}}}/>
                <Box sx={{ width:'100%', display:'flex',justifyContent:'center'}}>
                    <SalesButton/>
                </Box>

            </Box>
        </>
    )
}