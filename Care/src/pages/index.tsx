import { ThemeProvider } from "@emotion/react";
import {theme} from '../themes/index'
import { Stack } from "@mui/material";
import Header from "./components/Header";
import PromoSection from "./components/PromoSection";
import InsuranceTypes from "./components/InsuranceTypes";
import FaqSection from "./components/FaqSection";
import DescriptionSection from "./components/DescriptionSection";
import ReviewsSection from "./components/ReviewsSection";

export default function Landing(){
    return(
        <>
            <ThemeProvider theme={theme}>
                <Stack gap={7}>
                    <Header/>
                    <PromoSection/>
                    <InsuranceTypes/>
                    <FaqSection/>
                    <DescriptionSection/>
                    <ReviewsSection/>
                </Stack>
            </ThemeProvider>
        </>
    )
}