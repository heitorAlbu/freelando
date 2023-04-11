import {ThemeProvider} from '@emotion/react'

const tema = {
    cores:{
        primarias :{
            a:'#5754ED',
            b:'',
            c:''
        },
        secundarias: {
            a:'#EBEAF9',
            b:'',
            c:''
        },
    },
    espacamentos:{
        s:'16px',
        l:'32px'

    }   

}

export const ProvedorTema = ({children}) =>{
    return <ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>
}