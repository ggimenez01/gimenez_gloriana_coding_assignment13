import React, { useState } from 'react';

type DropdownProps = {
  options: string[];
  defaultOption?: string;
  backgroundColor?: string;
  disabled?: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultOption,
  backgroundColor,
  disabled,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    defaultOption
  );

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select
      role="listbox"
      value={selectedOption}
      onChange={handleOptionChange}
      disabled={disabled}
      style={{ backgroundColor }}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
