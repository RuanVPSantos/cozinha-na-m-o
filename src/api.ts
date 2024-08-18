import { MultiValue } from 'react-select';
import { IngredientOption } from './types';

export const fetchRecipe = async (selectedIngredients: MultiValue<IngredientOption>) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            q: selectedIngredients.map(option => option.value)
        })
    });

    if (!response.ok) {
        throw new Error('Erro na requisição');
    }
    const resp = await response.json();
    return resp;
};
