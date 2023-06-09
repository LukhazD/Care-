import { createTheme } from "@mui/material";

const theme = createTheme();

theme.typography.h2 = {
    fontFamily: [
        'Rubik',
    ].join(','),
    [theme.breakpoints.down('lg')]:{
        fontSize:'72px',
        fontWeight:'500'
    },
    [theme.breakpoints.up('md')]:{
        fontSize:'72px'
    },
    [theme.breakpoints.down('sm')]:{
        fontSize:'32px'
    }
}
theme.typography.h3 = {
    [theme.breakpoints.down('md')]:{
        fontSize:'42px'
    },
    [theme.breakpoints.up('md')]:{
        fontSize:'52px'
    },
    [theme.breakpoints.down('sm')]:{
        fontSize:'26px'
    },
    fontFamily: [
        'Rubik',
    ].join(',')
}
theme.typography.h4 = {
    [theme.breakpoints.up('lg')]:{
        fontSize:'42px',
        fontWeight:'400'
    },
    [theme.breakpoints.up('md')]:{
        fontSize:'200px',
        fontWeight:'400'
    },
    [theme.breakpoints.up('sm')]:{
        fontSize:'26px',
        fontWeight:'500'

    },
    fontFamily: [
            'Rubik',
        ].join(',')
}

theme.typography.body2 = {
    [theme.breakpoints.up('lg')]:{
        fontSize:'40px',
        fontWeight:'400'
        
    },
    [theme.breakpoints.up('sm')]:{
        fontSize:'20px'
    },
    fontFamily: [
        'Rubik',
    ].join(',')
}
export {theme}