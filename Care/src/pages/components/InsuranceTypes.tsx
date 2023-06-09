import InsuranceItems from "./InsuranceItems"
import {PawIcon, CarIcon, BusinessIcon, HealthIcon, } from './Icons'
import { Stack, Typography} from "@mui/material"

export default function InsuranceTypes(){
    const insuranceList=[
        {
            element:<PawIcon/>,
            info:'Pets'
        },
        {
            element:<CarIcon/>,
            info:'Vehicles'
        },
        {
            element:<BusinessIcon/>,
            info:'Business'
        },
        {
            element:<HealthIcon/>,
            info:'Health'
        },
    ]
    return(
        <>
        <Stack sx={{alignItems:'center', width:'100%', justifyContent:'center', gap:3}}>

            <Typography variant='h2'>
                        Our services offer
            </Typography>
            <Stack gap={2.5} sx={{
                flexWrap:'wrap', 
                flexDirection:'row',
                width:'100%',
                justifyContent:'center'
                }}>
                    
                <InsuranceItems items={insuranceList}/>
            </Stack>
        </Stack>
        </>
    )
}