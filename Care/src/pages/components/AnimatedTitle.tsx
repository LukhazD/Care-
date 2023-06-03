import { Box, Typography } from "@mui/material";

export default function AnimatedTitle(){
    return(
    <>
        <Box sx={{
            height:{md:'22em', sm:'20em'}, 
            width:{md:'60em', sm:'100%'}, 
            padding:'1em', 
            marginY:'1.5em',
            position:{md:'fixed', sm:'block'},
            display:'flex',
            zIndex:'2',
            justifyContent:{xs:'center', md:'unset'},
            alignItems:{md:'center', xs:'center'}}}>
            <Typography variant="h2" sx={{color:'#2E1E3C', fontSize:{md:'82px'}}}>
                Keep them Something
            </Typography>
        </Box>
    </>)
}