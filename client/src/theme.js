export const themeSettings = (mode) =>{
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark')
            ? {
                background: '#141625',
                navbar: "#373B53",
                multi:{
                    invoice: "#1E2139",
                    purple: '#7C5DFA',
                    purpleH: '#9277FF',
                    red: '#EC5757',
                    redH: '#9277FF'
                },
                text: {
                    primary: '#FFFFFF',
                    secondary: '#FFFFFF'
                },
                widget: '#1E2139'
            }
            : {
                background: '#F8F8FB',
                navbar: "#373B53",
                multi:{
                    invoice: "#FFFFFF",
                    purple: '#7C5DFA',
                    purpleH: '#9277FF',
                    red: '#EC5757',
                    redH: '#9277FF'
                },
                text: {
                    primary: '#0C0E16',
                    secondary: '#858BB2'
                },
                widget: '#FFFFFF'
            }
        },
        typography:{
            fontFamily: ['League Spartan', 'sans-serif'].join(','),
            fontSize: 15,
            h1:{
                fontFamily: ["League Spartan", "sans-serif"].join(","),
                fontSize: 36,
            },
            h2:{
                fontFamily: ["League Spartan", "sans-serif"].join(","),
                fontSize: 24,
            },
            p:{
                fontFamily: ["League Spartan", "sans-serif"].join(","),
                fontSize: 13,
            },
        }
    }
}