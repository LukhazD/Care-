import { Box, Typography } from "@mui/material";
import newsPicture from '../../assets/images/newsPicture.png';
import mobilePicture from '../../assets/images/mobilePicture.png';

export default function PromoSection(){
    return(
        <>
            <Box sx={{height:'fit-content', width:'100%', 
                    justifyContent:
                    {
                        md:'center',
                        lg:'center',
                        xs:'flex-end', 
                        sm:'flex-end'
                    }, 
                    display:'flex', 
                    alignItems:'center'}}>
                <Typography 
                variant="h2" 
                sx={{
                    zIndex:'1', 
                    color:'#2E1E3C', 
                    fontSize:{md:'72px'},
                    position:'absolute', 
                    height:'fit-contet', 
                    width:'9em',
                    alignItems:'center', 
                    justifyContent:{md:'center'},
                    display:'flex',
                    userSelect:'none'
                    }}>
                    Book a policy with our holiday promo
                </Typography>

                <Box 
                component='img' 
                src={newsPicture} 
                sx={{
                    maxHeight:'60vh', 
                    width:'100%', 
                    zIndex:'-1', 
                    height:'fit-content',
                    display:{md:'block', xs:'none', sm:'none'}}}/>

                <Box 
                component='img' 
                src={mobilePicture} 
                sx={{
                    maxHeight:'60vh', 
                    width:'100%', 
                    zIndex:'-1', 
                    height:'fit-content',
                    display:{md:'none', sm:'block'}}}/>
            </Box>
        </>
    )
}