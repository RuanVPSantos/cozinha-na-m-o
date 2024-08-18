import React from 'react';
import Select, { MultiValue } from 'react-select';
import { IngredientOption } from '../types';

interface IngredientSelectProps {
    options: IngredientOption[];
    value: MultiValue<IngredientOption>;
    onChange: (value: MultiValue<IngredientOption>) => void;
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
            styles={{
                control: (provided) => ({
                    ...provided,
                    marginTop: 8,
                    marginBottom: 16,
                    minHeight: 56,
                    borderRadius: 8,
                }),
                menu: (provided) => ({
                    ...provided,
                    borderRadius: 8,
                }),
            }}
        />
    );
};

export default IngredientSelect;
