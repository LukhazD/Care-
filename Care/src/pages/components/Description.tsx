import { Typography, Stack } from "@mui/material";

export default function Description(){
    return(
    <>
    <Stack sx={{paddingX:'1em'}}>

        <Typography variant='h3'>
        Reasons to get an insurance
        </Typography>
        <Typography variant='body2' sx={{width:'fit-content', maxWidth:'16em'}}>
        Care can help you protect your loved ones financially if something happens to you. Get a free quote today to find the best option for you and your family.
        </Typography>
    </Stack>
    </>)
}