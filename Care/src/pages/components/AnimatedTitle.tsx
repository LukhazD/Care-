import { Box, Typography } from "@mui/material";

export default function AnimatedTitle(){
    return(
    <>
        <Box sx={{
            height:{md:'20em', sm:'13em'}, 
            width:{md:'60em', sm:'100%', xs:'100%'}, 
            paddingX:'3em', 
            marginY:'1.5em',
            position:{md:'absolute', sm:'block'},
            display:'flex',
            zIndex:'2',
            justifyContent:{xs:'center', sm:'center', md:'unset'},
            alignItems:{md:'center', sm:'center', xs:'center'}}}>
                <Typography variant="h2" sx={{zIndex:'1', width:{md:'100%', sm:'fit-content', xs:'5.5em'}, color:'#2E1E3C'}}>
                    Keep them Something
                </Typography>
        </Box>
    </>)
}