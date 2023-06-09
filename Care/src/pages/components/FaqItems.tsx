import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

interface Iprops{
  questions:{
      description?:string
      questions:string
      showInfo: boolean 
  }[],
}

export default function FaqItems(props:Iprops){

  const [showInfoArr, setShowInfoArr] = useState<boolean[]>(props.questions.map(() => false)); 
  const toggleShowInfo = (index: number) => { 
    setShowInfoArr(prev => prev.map((state, i) => i === index ? !state : state));
  }

  return(
    <>
    {
        props.questions.map((data, index)=>{
            return(
                <>
                <Box 
                onClick={() => {toggleShowInfo(index)}} 
                key={index}
                sx={{
                    border:'solid 6px #4B2E6D', 
                    borderRadius:'6px'}}>
                    <Typography 
                    variant="body2" 
                    sx={{
                        paddingY:'0.5em', 
                        paddingX:'1.3em', 
                        color:'#2E1E3C', 
                        backgroundColor:'#FFFFFF',
                        userSelect:'none'}}>
                        {data.questions}
                    </Typography>
                </Box>
                <motion.div
                animate={
                    showInfoArr[index] && data.description ? {opacity:[0, 1]}: {opacity:0}
                }>
                    {showInfoArr[index] && data.description && ( 
                      <Typography 
                      variant="body1" 
                      sx={{padding: '0.5em', userSelect:'none'}}>
                        {data.description}
                      </Typography>
                    )}
                </motion.div>
                </>
            )
        })
    }
    </>
  )
}
