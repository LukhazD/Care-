import { ThemeProvider } from "@emotion/react";
import Header from "./components/Header";
import {theme} from '../themes/index'
import PromoSection from "./components/PromoSection";
import InsuranceTypes from "./components/InsuranceTypes";

export default function Landing(){
    return(
        <>
            <ThemeProvider theme={theme}>
                <Header/>
                <PromoSection/>
                <InsuranceTypes/>
            </ThemeProvider>
        </>
    )
}