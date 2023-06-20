import React from 'react'
import HeroBooking from './HeroBooking'
import BookingForm from './BookingForm'
export default function BookingPage({availableTimes,handleDateChange}) {
  return (
    <>
  
    <HeroBooking />
    <BookingForm availableTimes={availableTimes} handleDateChange={handleDateChange} />

    
    </>
  )
}
