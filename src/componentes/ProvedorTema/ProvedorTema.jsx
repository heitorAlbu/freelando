import { ThemeProvider } from '@emotion/react'

const tema = {
    cores: {
        primarias: {
            a: '#5754ED',
            b: '',
            c: ''
        },
        secundarias: {
            a: '#EBEAF9',
            b: '',
            c: ''
        },
        neutras: {
            a: '#373737'
        },
    },
    espacamentos: {
        xs: '8px',
        s: '16px',
        l: '32px'

    }

}

export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>
}