import { Button, Typography } from "@mui/material";

export default function SalesButton(){
    return(
    <>        
        <Button 
            variant='contained' 
            sx={{
            backgroundColor:'#2E1E3C', 
             '&:focus':{backgroundColor:'#2E1E3C'}}}>
            <Typography sx={{paddingY:'0.5em', 
            paddingX:'1.5em',}}>
                Contact sales!
            </Typography>
        </Button>
    </>)
}