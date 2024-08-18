import { createTheme } from '@mui/material/styles';

// Define uma paleta de cores com uma temática culinária para o modo claro
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#FF8C66', // Cor peach
        },
        secondary: {
            main: '#FFD700', // Cor goldenrod
        },
        background: {
            default: '#FAFAFA', // Fundo branco neve
            paper: '#F0F0F0', // Papel cinza claro
        },
        text: {
            primary: '#333333', // Texto principal escuro
            secondary: '#666666', // Texto secundário mais claro
        },
        action: {
            active: '#FF8C66', // Cor ativa igual à primária
            hover: '#FF8C66',
            selected: '#FF8C66',
            disabled: '#B0B0B0', // Cor de desativado
            disabledBackground: '#E0E0E0', // Fundo desativado
        },
    },
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif', // Ou 'Roboto', Arial, sans-serif
        h1: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '1.75rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        button: {
            fontSize: '0.875rem',
            // Remove o negrito do texto do botão
            fontWeight: 400,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },
    },
});

export default theme;
