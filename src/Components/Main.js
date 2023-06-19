import React from 'react'
import { fetchAPI
 } from './Api';
  import {useReducer, useEffect } from "react"; 
  import BookingPage from './BookingPage';
  import HomePage from './HomePage';
  import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
export default function Main() {
    function initializeTimes(date) {

        return [
          
          ...fetchAPI(new Date(date))
        ];
      }

      function updateTimes(state, action) {
        switch (action.type) {
          case 'update':
            return action.availableTimes;
          default:
            return state;
        }
      }
     console.log(updateTimes)
      const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
   
    
      const handleDateChange = (selectedDate) => {
        dispatch({ type: 'update', availableTimes: initializeTimes(selectedDate) });
      };
  return (
    <> 
    <Routes>
    <Route exact path='/' element={< HomePage/>}></Route>
    <Route exact path='/reservations' element={< BookingPage availableTimes={availableTimes} handleDateChange={handleDateChange} />}></Route>
    </Routes>
 </>
  )
}
