import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";

interface Iprops{
    image:string
}

export default function ReferenceImage(props:Iprops){

    return(
        <>
        <Stack sx={{display:{ sm:'flex',xs:'none'}}}>

        <motion.div
        animate={{
            // x:[0, 1, 0],
            y:[0, 13, 0],
            x:[0, -8, 0]
        }}
        transition={
            {duration:7.5,
            repeat:Infinity,
            ease:'easeInOut'}
        }
        initial={{
            y:0,
            x:0
        }}>

            <Box sx={{
                border:'solid 6px rgba(75, 46, 109, 0.7)', 
                borderRadius:'6px',
                width:'379px', 
                height:'360px', 
                zIndex:'-1'
                }}/>
        </motion.div>
        <motion.div
        animate={{
            // x:[0, 1, 0],
            y:[0,-12,0],
            x:[0, 12, 0]
        }}
        transition={
            {duration:7.5,
            repeat:Infinity,
            ease:'easeInOut'}
        }
        initial={{
            y:-7,
            x:0
        }}
        style={{width:'fit-content', height:'fit-content', position:'absolute'}}>

            <Box component='img' src={props.image} sx={{ zIndex:'1', borderRadius:'6px', border:'solid 6px rgba(75, 46, 109, 0.7)'}}/>
        </motion.div>
        </Stack>
        </>
    )
}