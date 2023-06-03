import { Box } from "@mui/material";
import headerPicture from '../images/headerPicture.png'
import careLogo from '../images/careLogo.png'
import AnimatedTitle from "./AnimatedTitle";
import SalesButton from "./SalesButton";

export default function Header(){

    return(
        <>
            <Box sx={{paddingY:'2em'}}>
                <Box sx={{width:'100%', display:'flex', marginY:'1em', justifyContent:'center'}}>
                    <Box component='img' src={careLogo} width='52px' height='52px' sx={{zIndex:'1', position:{md:'fixed', sm:'block'}}}/>
                </Box>
                <AnimatedTitle/>
                <Box component='img' src={headerPicture} width='100%' sx={{opacity:'0.4',display:{md:'block', xs:'none', sm:'none'}}}/>
                <Box sx={{ width:'100%', display:'flex',justifyContent:'center'}}>
                    <SalesButton/>
                </Box>

            </Box>
        </>
    )
}