import { render, screen, fireEvent } from '@testing-library/react'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('renders with label', () => {
    render(<Checkbox id="remember" label="Remember me" />)

    expect(screen.getByLabelText('Remember me')).toBeInTheDocument()
  })

  it('calls onChange', () => {
    const handleChange = jest.fn()
    render(<Checkbox id="remember" label="Remember me" onChange={handleChange} />)

    fireEvent.click(screen.getByLabelText('Remember me'))
    expect(handleChange).toHaveBeenCalled()
  })
})

