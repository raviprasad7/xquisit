import React from 'react';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  onOptionsSelected: (option: SelectOption, optionIndex: number) => void;
}

const Select: React.FC<SelectProps> = ({
  label = 'Please select an option',
  options = [],
  onOptionsSelected: handler,
}) => {
  const onOptionsSelected = (option: SelectOption, index: number) => {
    console.log('option clicked', option, index);
    handler(option, index);
  };

  return (
    <div>
      <button>{label}</button>
      <ul>
        {options.map((option, optionIndex) => (
          <li
            onClick={() => onOptionsSelected(option, optionIndex)}
            key={option.value}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
