import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders label and input', () => {
    render(<Input id="email" label="Email" />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('calls onChange', () => {
    const handleChange = jest.fn();
    render(<Input id="email" label="Email" onChange={handleChange} />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'test@mail.com' },
    });

    expect(handleChange).toHaveBeenCalled();
  });
});
