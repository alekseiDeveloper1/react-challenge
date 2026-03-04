import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LoginForm } from './LoginForm';

const mockMutate = jest.fn();
jest.mock('@/features/auth/hooks/useAuth', () => ({
  useAuth: () => ({
    mutate: mockMutate,
    isPending: false,
    error: null,
  }),
}));

const queryClient = new QueryClient();

const renderComponent = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <LoginForm />
    </QueryClientProvider>,
  );

describe('LoginForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render form fields and submit button', () => {
    renderComponent();
    expect(screen.getByLabelText(/логин/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/пароль/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /войти/i })).toBeInTheDocument();
  });

  test('should show validation errors on submitting empty form', async () => {
    renderComponent();
    fireEvent.click(screen.getByRole('button', { name: /войти/i }));

    expect(await screen.findByText(/логин обязателен/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Пароль должен содержать минимум 6 символов/i),
    ).toBeInTheDocument();
    expect(mockMutate).not.toHaveBeenCalled();
  });

  test('should call mutate function with form data on successful submission', async () => {
    renderComponent();

    fireEvent.input(screen.getByLabelText(/логин/i), {
      target: { value: 'testuser' },
    });
    fireEvent.input(screen.getByLabelText(/пароль/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByRole('button', { name: /войти/i }));

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledTimes(1);
      expect(mockMutate).toHaveBeenCalledWith({
        username: 'testuser',
        password: 'password123',
        remember: false,
      });
    });
  });
});
