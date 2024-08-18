import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Paper, Skeleton } from '@mui/material';
import IngredientSelect from './components/IngredientSelect';
import MarkdownViewer from './components/MarkdownViewer';
import { ingredients } from './ingredients';
import { IngredientOption } from './types';
import './styles.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.material';
import { MultiValue } from 'react-select';
import { fetchRecipe } from './api';

const App: React.FC = () => {
    const [selectedIngredients, setSelectedIngredients] = useState<MultiValue<IngredientOption>>([]);
    const [markdownContent, setMarkdownContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchInitialMarkdown = async () => {
            try {
                const text: string = "";
                setMarkdownContent(text);
            } catch (error) {
                console.error('Erro ao buscar o arquivo Markdown:', error);
            }
        };

        fetchInitialMarkdown();
    }, []);

    const handleFindRecipe = async () => {
        try {
            setLoading(true);
            setSelectedIngredients([]);

            const data = await fetchRecipe(selectedIngredients);

            // Ensure markdownContent is always a string
            setMarkdownContent(data.recipe || 'Nenhuma receita encontrada.');
        } catch (error) {
            console.error('Erro ao buscar a receita:', error);
            setMarkdownContent('Erro ao buscar a receita.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm" style={{ paddingTop: 32 }}>
                <Typography variant="h4" gutterBottom>
                    Selecione Ingredientes
                </Typography>
                <IngredientSelect
                    options={ingredients}
                    value={selectedIngredients}
                    onChange={setSelectedIngredients}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleFindRecipe}
                    fullWidth
                    style={{ marginTop: 16 }}
                >
                    Encontrar Receita
                </Button>
                {loading ? (
                    <Skeleton variant="rectangular" width="100%" height={400} style={{ marginTop: 16 }} />
                ) : (
                    <Paper style={{ padding: 16, marginTop: 16 }}>
                        <MarkdownViewer content={markdownContent} />
                    </Paper>
                )}
            </Container>
        </ThemeProvider>
    );
};

export default App;
