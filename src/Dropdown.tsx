import React from 'react';
import styled from 'styled-components';

const StyledDropdown = styled.select`
  /* Styles for dropdown */
`;

const Dropdown = ({ options, onChange }) => (
  <StyledDropdown onChange={onChange}>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledDropdown>
);

export default Dropdown;
