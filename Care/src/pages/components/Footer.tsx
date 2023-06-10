import { Box, Stack, Typography } from "@mui/material";
import facebook from '../../assets/images/facebook.png';
import tiktok from '../../assets/images/tiktok.png';
import instagram from '../../assets/images/instagram.png';
import youtube from '../../assets/images/youtube.png';

export default function Footer(){
    return(
        <>
        <Stack sx={{
            width:'100%', 
            justifyContent:'center', 
            // alignItems:'center',
            color:'#FFFFFF', 
            backgroundColor:'#2E1E3C',
            flexDirection:'row',
            gap:9,
            padding:'5em',
            flexWrap:'wrap'}}>

            <Box>
            <Typography variant='body2'>
                    About us
                </Typography>
                <Typography>
                    Products
                </Typography>
                <Typography>
                    Disclaimer
                </Typography>
                <Typography>
                    Careers
                </Typography>
                <Typography>
                    Who we are
                </Typography>
            </Box>
            <Box sx={{ width:'fit-content'}}>
                <Typography variant='body2'>
                    Contact
                </Typography>
                <Typography>
                    + (000) 000-0000
                </Typography>
                <Typography>
                email@example.com
                </Typography>
            </Box>
            <Box sx={{flexDirection:'row', display:'flex', height:'100%', width:'fit-content'}}>
                <Box component='img' src={facebook} sx={{maxHeight:'27.54px'}}/>
                <Box component='img' src={tiktok} sx={{maxHeight:'27.54px'}}/>
                <Box component='img' src={instagram} sx={{maxHeight:'27.54px'}}/>
                <Box component='img' src={youtube} sx={{maxHeight:'27.54px'}}/>
            </Box>
        </Stack>
        </>
    )
}