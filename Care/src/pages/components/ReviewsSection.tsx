import { Stack, Typography, Button, Box } from "@mui/material";
import reviews from '../../assets/images/reviews.png'
export default function ReviewsSection(){
    return(
        <>
        <Stack sx={{width:'100%', justifyContent:'center'}}>
            <Box component='img' src={reviews} sx={{opacity:'0.7',display:{md:'block', sm:'none', xs:'none'}}}/>
            <Stack sx={{
                flexDirection:'column', 
                position:{md:'absolute', sm:'block'}, 
                height:'fit-content', 
                width:'100%', 
                alignItems:'center'}}>

                    <Typography variant='h2' sx={{color:'#2E1E3C'}}>
                        Check our reviews in 
                    </Typography>
                    <Typography variant='h2' sx={{color:'#72B043'}}>
                        trustpilot
                    </Typography>
                <Button 
                variant='contained' 
                sx={{
                    backgroundColor:'#72B043', 
                    '&:focus':{backgroundColor:'#72B043'}}}>
                    <Typography sx={{
                        paddingY:'0.5em', 
                        paddingX:'1.5em',}}>
                        Check reviews
                    </Typography>
                </Button>

            </Stack>
        </Stack>    
        </>
    )
}