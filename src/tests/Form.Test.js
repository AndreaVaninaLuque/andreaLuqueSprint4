import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../components/Form";

describe('<Form />', () => {
  test('Se debería renderizar correctamente el componente', () => {
    render(<Form />);
    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
  });

  test('Se deberían renderizar los campos de formulario', () => {
    render(<Form />);
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/e-mail/i);
    const messageTextarea = screen.getByLabelText(/message/i);

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageTextarea).toBeInTheDocument();
  });

  test('Se debería poder escribir en los campos de formulario', () => {
    render(<Form />);
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/e-mail/i);
    const messageTextarea = screen.getByLabelText(/message/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageTextarea, { target: { value: 'This is a test message' } });

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(messageTextarea).toHaveValue('This is a test message');
  });

  test('Se debería llamar a la función onSubmit al enviar el formulario', () => {
    const handleSubmitMock = jest.fn();
    render(<Form onSubmit={handleSubmitMock} />);
    const formElement = screen.getByRole('form');
    fireEvent.submit(formElement);

    expect(handleSubmitMock).toHaveBeenCalled();
  });
});
