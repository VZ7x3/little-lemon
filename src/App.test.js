import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import BookingPage from './Components/BookingPage';
import Main from "./Components/Main";
import BookingForm from "./Components/BookingForm"

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.findByText("Choose time");
  expect(headingElement).toBeInTheDocument();
})
