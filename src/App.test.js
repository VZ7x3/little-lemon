import App from './App';
import { render, screen,fireEvent } from '@testing-library/react';
import Hero from './Components/Hero';
import BookingForm from "./Components/BookingForm"
import { BrowserRouter } from "react-router-dom";

test('Renders the BookingForm heading', () => {
  render(<BrowserRouter><BookingForm /></BrowserRouter>);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

