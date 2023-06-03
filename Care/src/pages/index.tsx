import { ThemeProvider } from "@emotion/react";
import Header from "./components/Header";
import {theme} from '../themes/index'

export default function Landing(){
    return(
        <>
        <ThemeProvider theme={theme}>
            <Header/>
        </ThemeProvider>

        </>
    )
}