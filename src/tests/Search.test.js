import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../components/Search";

describe('<Search />', () => {
  test('Se debería renderizar correctamente el componente', () => {
    render(<Search />);
    const searchContainer = screen.getByTestId('search-container');
    expect(searchContainer).toBeInTheDocument();
  });

  test('Se debería renderizar el input de búsqueda', () => {
    render(<Search />);
    const searchInput = screen.getByPlaceholderText(/buscar/i);
    expect(searchInput).toBeInTheDocument();
  });

  test('Se debería llamar a la función onSearch al escribir en el input', () => {
    const onSearchMock = jest.fn();
    render(<Search onSearch={onSearchMock} />);
    const searchInput = screen.getByPlaceholderText(/buscar/i);

    fireEvent.change(searchInput, { target: { value: 'Event' } });

    expect(onSearchMock).toHaveBeenCalledWith('Event');
  });
});
