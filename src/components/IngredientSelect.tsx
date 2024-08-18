import React, { Dispatch, SetStateAction } from 'react';
import Select, { MultiValue, StylesConfig } from 'react-select';
import { IngredientOption } from '../types'; // Corrigir o caminho conforme necessário
import { customSelectStyles } from '../styles/customSelectStyles'; // Corrigir o caminho conforme necessário

interface IngredientSelectProps {
    options: { value: string; label: string; }[];
    value: MultiValue<IngredientOption>;
    onChange: Dispatch<SetStateAction<MultiValue<IngredientOption>>>;
}

const IngredientSelect: React.FC<IngredientSelectProps> = ({ options, value, onChange }) => {
    return (
        <Select
            isMulti
            options={options}
            value={value}
            onChange={onChange}
            placeholder="Selecione ingredientes..."
            components={{ 
                IndicatorSeparator: () => null, // Remove the separator
                DropdownIndicator: () => null // Remove the indicator
            }}
            styles={customSelectStyles} // Usando os estilos customizados
        />
    );
};

export default IngredientSelect;
