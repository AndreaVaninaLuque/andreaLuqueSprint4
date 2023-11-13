import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MoreDetails from "../components/MoreDetails";

const mockEvent = {
  capacity: 100,
  estimate: "50%",
  assistance: "70%"
};

describe('<MoreDetails />', () => {
  test('Se debería renderizar correctamente el componente con datos', () => {
    render(<MoreDetails event={mockEvent} />);
    
    const capacityElement = screen.getByText(/Capacity/i);
    const estimateElement = screen.getByText(/Estimate/i);
    const assistanceElement = screen.getByText(/Assistance/i);

    expect(capacityElement.nextSibling).toHaveTextContent('100');
    expect(estimateElement.nextSibling).toHaveTextContent('50%');
    expect(assistanceElement.nextSibling).toHaveTextContent('70%');
  });

  test('Se debería renderizar correctamente el componente sin datos', () => {
    render(<MoreDetails event={{}} />);
    
    const capacityElement = screen.getByText(/Capacity/i);
    const estimateElement = screen.getByText(/Estimate/i);
    const assistanceElement = screen.getByText(/Assistance/i);

    expect(capacityElement.nextSibling).toHaveTextContent('No description available');
    expect(estimateElement.nextSibling).toHaveTextContent('This event has already ended');
    expect(assistanceElement.nextSibling).toHaveTextContent('This event has not happened yet');
  });
});

