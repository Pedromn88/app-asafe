import { render, fireEvent } from '@testing-library/react';
import ButtonStyled from './ButtonStyled';

describe('ButtonStyled Component', () => {
    test('renders correctly with children', () => {
        const { getByText } = render(<ButtonStyled>Click Me</ButtonStyled>);
        const buttonElement = getByText(/click me/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('applies correct classes when enabled', () => {
        const { getByText } = render(<ButtonStyled>Enabled Button</ButtonStyled>);
        const buttonElement = getByText(/enabled button/i);
        expect(buttonElement).toHaveClass('bg-asafe');
        expect(buttonElement).not.toHaveClass('bg-gray-400');
    });

    test('applies correct classes when disabled', () => {
        const { getByText } = render(<ButtonStyled disabled>Disabled Button</ButtonStyled>);
        const buttonElement = getByText(/disabled button/i);
        expect(buttonElement).toHaveClass('bg-gray-400');
        expect(buttonElement).toHaveClass('cursor-not-allowed');
    });

    test('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<ButtonStyled onClick={handleClick}>Click Me</ButtonStyled>);
        const buttonElement = getByText(/click me/i);
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('does not call onClick when disabled', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<ButtonStyled onClick={handleClick} disabled>Disabled Button</ButtonStyled>);
        const buttonElement = getByText(/disabled button/i);
        fireEvent.click(buttonElement);
        expect(handleClick).not.toHaveBeenCalled();
    });
});