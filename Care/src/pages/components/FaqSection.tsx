import { Stack, Typography} from "@mui/material";
import FaqItems from "./FaqItems";
import ReferenceImage from "./ReferenceImage";
import couple from '../../assets/images/couple.png'

export default function FaqSection(){
    const FAQ=[
        {questions:'About care',
        description:"Well, here would be some text... But this is a sample so... No",
        showInfo:false}, 

        {questions:'How long would it take to get my policy?',
        showInfo:false,
        description:"Well, here would be some text... But this is a sample so... No"}, 

        {questions:'I need more information', 
        showInfo:false,
        description:"Well, here would be some text... But this is a sample so... No"}, 

        {questions:'Legal and security', 
        showInfo:false,
        description:"Well, here would be some text... But this is a sample so... No"}]
    return(
        <>
            <Stack sx={{
                justifyContent:'center', 
                alignItems:'center',
                width:'100%',
                gap:14, 
                flexDirection:'row'}}>
                <ReferenceImage image={couple}/>
                <Stack sx={{width:'fit-content', gap:1}}>
                    <Typography variant='h2'>
                        Frequent questions
                    </Typography>
                    <FaqItems questions={FAQ}/>
                </Stack>
            </Stack>
        </>
    )
}