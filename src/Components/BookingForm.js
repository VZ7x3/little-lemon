import React from 'react'
import {useState} from "react"; 
import { submitAPI } from './Api';

export default function BookingForm({availableTimes,handleDateChange }) {

    const [date, setDate] = useState(""); 
    const [time, setTime] = useState(''); 
    const [guests, setGuests] = useState(""); 
    const [ocassion, setOcassion] = useState("Leave Empty");
    const clearForm =()=>{
        setDate("");
        setTime("");
        setGuests("");
        setOcassion("Leave Empty")};

        const handleDateChangeUpdate = (e) => {
            const selectedDate = e.target.value;
            setDate(selectedDate);
            handleDateChange(selectedDate);
          };

        const getIsFormValid = () => { 
            return (
              date &&
              time &&
              guests &&
              ocassion
            );
          };
          

    const handleSubmit = (e) => {
        e.preventDefault(); 
        clearForm();
        };
    console.log(availableTimes)
    console.log([date,time,guests,ocassion])

  return (
    
    <form class = 'form' onSubmit={submitAPI([date,time,guests,ocassion])}>
    
    <label htmlFor="res-date">Choose date</label>
    <input type="date" id="res-date" value={date} onChange = {handleDateChangeUpdate} min={new Date().toISOString().split('T')[0]} ></input>
    <label htmlFor="res-time">Choose time</label>
    <select id="res-time " value={time} onChange = {e=>{setTime(e.target.value)}}>
    {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
    </select>
    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange = {e=>{setGuests(e.target.value)}}></input>
    <label htmlFor="occasion">Occasion</label>
    <select id="occasion" value={ocassion} onChange = {e=>{setOcassion(e.target.value)}}>
        <option>Leave Empty</option>
       <option>Birthday</option>
       <option>Anniversary</option>

    </select>
    <div class = 'finishreservecontainer'>
    <input type="submit" value="Make Your Reservation" class = 'finishreserve' disabled={!getIsFormValid()}></input></div>
 </form>
  )
};
