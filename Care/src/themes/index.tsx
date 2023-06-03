import { createTheme } from "@mui/material";

const theme = createTheme();

theme.typography.h2 = {
    fontFamily: [
        'Rubik',
    ].join(','),
    [theme.breakpoints.up('md')]:{
        fontSize:'92px',
        fontWeight:'500'
    },
    [theme.breakpoints.up('sm')]:{
        fontSize:'42px'
    },
}
theme.typography.h3 = {
    [theme.breakpoints.up('md')]:{
        fontSize:'42px'
    },
    [theme.breakpoints.up('sm')]:{
        fontSize:'32px'
    },
    fontFamily: [
        'Rubik',
    ].join(',')
}
theme.typography.body1 = {
    [theme.breakpoints.up('md')]:{
        fontSize:'28px',
        fontWeight:'400'
    },
    [theme.breakpoints.up('sm')]:{
        fontSize:'16px'
    },
    fontFamily: [
            'Rubik',
        ].join(',')
}

theme.typography.body2 = {
    [theme.breakpoints.up('md')]:{
        fontSize:'22px',
        fontWeight:'400'
        
    },
    [theme.breakpoints.up('sm')]:{
        fontSize:'16px'
    },
    fontFamily: [
        'Rubik',
    ].join(',')
}
export {theme}