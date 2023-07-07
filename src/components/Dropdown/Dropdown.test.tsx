import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  it('renders options correctly', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    render(<Dropdown options={options} />);
    const dropdownElement = screen.getByRole('listbox');
    expect(dropdownElement).toBeInTheDocument();

    options.forEach((option) => {
      const optionElement = screen.getByText(option);
      expect(optionElement).toBeInTheDocument();
    });
  });

  it('sets default option correctly', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const defaultOption = 'Option 2';
    render(<Dropdown options={options} defaultOption={defaultOption} />);
    const dropdownElement = screen.getByRole('listbox');
    expect(dropdownElement).toHaveValue(defaultOption);
  });

  it('changes selected option on user interaction', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    render(<Dropdown options={options} />);
    const dropdownElement = screen.getByRole('listbox');

    act(() => {
      userEvent.selectOptions(dropdownElement, 'Option 3');
    });

    expect(dropdownElement).toHaveValue('Option 3');
  });

  it('applies custom styles', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const backgroundColor = '#f2f2f2';
    render(<Dropdown options={options} backgroundColor={backgroundColor} />);
    const dropdownElement = screen.getByRole('listbox');
    expect(dropdownElement).toHaveStyle(`background-color: ${backgroundColor}`);
  });

  it('disables dropdown when disabled prop is true', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    render(<Dropdown options={options} disabled />);
    const dropdownElement = screen.getByRole('listbox');
    expect(dropdownElement).toBeDisabled();
  });
});
