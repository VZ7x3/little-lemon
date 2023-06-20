import App from './App';
import { render, screen,fireEvent } from '@testing-library/react';
import Hero from './Components/Hero';
import BookingForm from "./Components/BookingForm"
import { BrowserRouter } from "react-router-dom";
import {handleDateChange,initializeTimes} from './Components/Main.js'
import fetchAPI from './Components/Api'

test('Renders the BookingForm heading', () => {
  render(<BrowserRouter><BookingForm /></BrowserRouter>);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

//describe("Test function - yourFunc", () => {
//test("",()=>{
 //const times = initializeTimes('01-22-2024')
 //expect(times).toBeInstanceOf(Array)
//})})

