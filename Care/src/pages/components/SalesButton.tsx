import { Box, Button, Typography } from "@mui/material";

export default function SalesButton(){
    return(
    <>        <Button sx={{
            width:'fit-content',
            height:'fit-content',
            color:'#FFFFFF',
            '&:hover':{
                color:"#2E1E3C"
            }, 
            fontWeight:'400',
            backgroundColor:'#2E1E3C', 
            paddingY:'1em', 
            paddingX:'3em',
            borderRadius:'6px'}}>
            <Typography>
                Contact sales!
            </Typography>
        </Button>
    </>)
}