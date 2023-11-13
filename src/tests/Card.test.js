import {render, screen, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom"
import Card from "../components/Card"
import { BrowserRouter, Link } from "react-router-dom";

describe('<Card />',() => {
    test('Debería renderizar el componente', () => {

        render(<BrowserRouter><Card event={{name: "Ejemplo name", description: "Ejemplo desc"}} /></BrowserRouter>)

        let nameElement = screen.getByText("Ejemplo name")

        expect(nameElement).toBeInTheDocument()
    })
 
})