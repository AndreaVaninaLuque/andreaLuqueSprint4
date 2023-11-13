import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";

describe('<Footer />', () => {
  test('Se debería renderizar correctamente el componente', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  test('Se debería renderizar el texto de derechos de autor', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/all rights reserved 2023 - amazing events - ©/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
