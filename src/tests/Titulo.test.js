import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Titulo from "../components/Titulo";
import { BrowserRouter as Router } from "react-router-dom";

describe('<Titulo />', () => {
  test('Se debería renderizar correctamente el componente', () => {
    render(
      <Router>
        <Titulo leftLink="/" rightLink="/next">
          Mi Título
        </Titulo>
      </Router>
    );

    const titleElement = screen.getByText('Mi Título');
    const leftLinkElement = screen.getByLabelText('left-link');
    const rightLinkElement = screen.getByLabelText('right-link');    


    expect(titleElement).toBeInTheDocument();
    expect(leftLinkElement).toBeInTheDocument();
    expect(rightLinkElement).toBeInTheDocument();
  });
});
