import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import { BrowserRouter as Router } from "react-router-dom";

describe('<Header />', () => {
    test('Se debería comprobar si se renderiza correctamente el componente', () => {
        render(
            <Router>
                <Header title={"Home"} description={"Esto es una prueba"} />
            </Router>
        );
        let titleElement = screen.getByRole("titulo");

        expect(titleElement).toBeInTheDocument();
    });

    test('Se debería comprobar que el título esté cambiando de acuerdo a la prop que recibe', () => {
        render(
            <Router>
                <Header title={"Nuevo Título"} description={"Esto es una prueba"} />
            </Router>
        );
        let titleElement = screen.getByRole("titulo");

        expect(titleElement).toHaveTextContent("Nuevo Título");
    });

    test('Se debería comprobar que la descripción esté cambiando de acuerdo a la prop que recibe', () => {
        render(
            <Router>
                <Header title={"Events"} description={"Nueva descripción"} />
            </Router>
        );
        let descElement = screen.getByText("Nueva descripción");

        expect(descElement).toBeInTheDocument();
    });

    test('Se debería comprobar la existencia y el contenido del botón "Home"', () => {
        render(
            <Router>
                <Header title={"Home"} description={"Esto es una prueba"} />
            </Router>
        );
        let homeButton = screen.getByRole('button', { name: /home/i });

        expect(homeButton).toBeInTheDocument();
        expect(homeButton).toHaveTextContent("Home Home");
    });

    test('Se debería comprobar la existencia y el contenido del botón "Upcoming Events"', () => {
        render(
            <Router>
                <Header title={"Home"} description={"Esto es una prueba"} />
            </Router>
        );
        let upcomingButton = screen.getByRole('button', { name: /upcoming events/i });

        expect(upcomingButton).toBeInTheDocument();
        expect(upcomingButton).toHaveTextContent("Upcoming Events");
    });
});
