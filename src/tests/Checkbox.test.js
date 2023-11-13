import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkbox from "../components/Checkbox";

describe('<Checkbox />', () => {
  const eventsMock = [
    { category: 'Category1' },
    { category: 'Category2' },
    { category: 'Category3' },
  ];

  const handleCategoryChangeMock = jest.fn();

  test('Se debería renderizar correctamente el componente', () => {
    render(
      <Checkbox events={eventsMock} handleCategoryChange={handleCategoryChangeMock} />
    );

    const checkboxContainer = screen.getByTestId('checkbox-container');
    expect(checkboxContainer).toBeInTheDocument();

  });

  test('Se deberían renderizar las categorías correctamente', () => {
    render(
      <Checkbox events={eventsMock} handleCategoryChange={handleCategoryChangeMock} />
    );

    const categoryLabels = screen.getAllByRole('checkbox');
    expect(categoryLabels).toHaveLength(eventsMock.length);

  });

});
