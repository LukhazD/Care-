import { Box, Stack, Typography} from "@mui/material"
import { motion } from "framer-motion"
import { useState } from "react"


interface Iprops{
    items:{
        element: JSX.Element,
        info?:string
    }[],
}

export default function InsuranceItems(props:Iprops){
    const [show, setShow] = useState({})
    return(
        <>

            {
                props.items.map((data)=>{
                    return(
                        <Box>
                            <motion.div
                            whileHover={{
                                transform:'rotate(30deg)'
                            }}
                            transition={{
                                duration:1,
                                type:'spring'
                            }}
                            animate={show}
                            onTapStart={()=>{setShow({
                                opacity:0,
                                transitionEnd:{
                                    display:'none'
                                }
                            })}}
                            >
                                <Box sx={{padding:'2em', zIndex:'1', position:'absolute', backgroundColor:'#FFF', borderRadius:'6px', border:'solid 5px #4B2E6D'}}>
                                    {
                                        data.element
                                    }
                                </Box>
                            </motion.div>
                            <Stack sx={{
                                height:'136px',
                                width:'128px', 
                                color:'#FFFFFF', 
                                backgroundColor:'#4B2E6D', 
                                borderRadius:'6px', 
                                zIndex:'-1',
                                alignItems:'center',
                                justifyContent:'center'}}>
                                    <Typography variant='body2' >

                                    {
                                        data.info
                                    }
                                    </Typography>
                            </Stack>
                        </Box>
                    )
                })
            }
        </>
    )
}