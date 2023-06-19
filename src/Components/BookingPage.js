import React from 'react'
import HeroBooking from './HeroBooking'
import BookingForm from './BookingForm'
export default function BookingPage({availableTimes,handleDateChange}) {
  return (
    <>
  
    <HeroBooking />
    <div class='bookingform'>
    <h1 class="reservetitle">Reserve a Table</h1>
    <BookingForm availableTimes={availableTimes} handleDateChange={handleDateChange} />
    </div>
    
    </>
  )
}
