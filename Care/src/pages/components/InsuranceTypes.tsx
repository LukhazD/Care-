import InsuranceItems from "./InsuranceItems"
import {PawIcon, CarIcon, BusinessIcon, HealthIcon, } from './Icons'
import { Box } from "@mui/material"

export default function InsuranceTypes(){
    const insuranceList=[
        <PawIcon/>,
        <CarIcon/>,
        <BusinessIcon/>,
        <HealthIcon/>,
    ]
    return(
        <>
            <Box gap={2.5} sx={{marginY:'3em',display:'flex', width:'100%', justifyContent:'center'}}>
                <InsuranceItems items={insuranceList}/>
            </Box>
        </>
    )
}