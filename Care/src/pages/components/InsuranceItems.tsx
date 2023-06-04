import { Box } from "@mui/material"
import { ReactElement } from "react"


interface Iprops{
    items:ReactElement[]
}

export default function InsuranceItems(props:Iprops){
    return(
        <>
            {
                props.items.map((data)=>{
                    return(
                        <Box sx={{padding:'2em', borderRadius:'6px', border:'solid 4px #4B2E6D'}}>
                            {
                                data
                            }
                        </Box>
                    )
                })
            }
        </>
    )
}