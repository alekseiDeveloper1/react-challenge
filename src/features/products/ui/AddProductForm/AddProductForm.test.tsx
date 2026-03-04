import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AddProductForm } from './AddProductForm';

describe('AddProductForm', () => {
  it('renders the form correctly', () => {
    const handleClose = jest.fn();
    const handleAddProduct = jest.fn();
    render(
      <AddProductForm onClose={handleClose} onAddProduct={handleAddProduct} />,
    );

    expect(screen.getByText('Добавить товар')).toBeInTheDocument();
    expect(screen.getByLabelText('Наименование')).toBeInTheDocument();
    expect(screen.getByLabelText('Цена')).toBeInTheDocument();
    expect(screen.getByLabelText('Вендор')).toBeInTheDocument();
    expect(screen.getByLabelText('Артикул')).toBeInTheDocument();
  });

  it('submits the form with valid data', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const handleClose = jest.fn();
    const handleAddProduct = jest.fn();
    render(
      <AddProductForm onClose={handleClose} onAddProduct={handleAddProduct} />,
    );

    fireEvent.change(screen.getByLabelText('Наименование'), {
      target: { value: 'Тестовый товар' },
    });
    fireEvent.change(screen.getByLabelText('Цена'), {
      target: { value: '100' },
    });
    fireEvent.change(screen.getByLabelText('Вендор'), {
      target: { value: 'Тестовый вендор' },
    });
    fireEvent.change(screen.getByLabelText('Артикул'), {
      target: { value: 'TEST-123' },
    });

    fireEvent.click(screen.getByText('Добавить'));

    await waitFor(() => {
      expect(handleAddProduct).toHaveBeenCalledWith({
        name: 'Тестовый товар',
        price: 100,
        vendor: 'Тестовый вендор',
        article: 'TEST-123',
      });
      expect(handleClose).toHaveBeenCalled();
      expect(alertMock).toHaveBeenCalledWith(
        'Товар "Тестовый товар" успешно добавлен!',
      );
    });
    alertMock.mockRestore();
  });

  it('shows validation errors for empty fields', async () => {
    const handleClose = jest.fn();
    const handleAddProduct = jest.fn();
    render(
      <AddProductForm onClose={handleClose} onAddProduct={handleAddProduct} />,
    );

    fireEvent.click(screen.getByText('Добавить'));

    expect(
      await screen.findByText('Наименование обязательно'),
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Цена должна быть положительной'),
    ).toBeInTheDocument();
    expect(await screen.findByText('Вендор обязателен')).toBeInTheDocument();
    expect(await screen.findByText('Артикул обязателен')).toBeInTheDocument();
  });
});
