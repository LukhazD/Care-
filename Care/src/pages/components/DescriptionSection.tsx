import { Stack } from '@mui/material'
import Description from './Description'
import ReferenceImage from './ReferenceImage'
import ipad from '../../assets/images/ipad.png'
export default function DescriptionSection(){
    return(
        <>
        <Stack sx={{
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            gap:13
        }}>
            <Description/>
            <ReferenceImage image={ipad}/>
        </Stack>
        </>
    )
}