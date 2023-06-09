import { Box, Button, Typography } from "@mui/material";

export default function SalesButton(){
    return(
    <>        <Button sx={{
            color:'#FFFFFF',
            '&:hover':{
                color:"#2E1E3C"
            }, 
            backgroundColor:'#2E1E3C', 
            paddingY:'1em', 
            paddingX:'3em',
            borderRadius:'6px', '&:focus':{backgroundColor:'#2E1E3C'}}}>
            <Typography>
                Contact sales!
            </Typography>
        </Button>
    </>)
}