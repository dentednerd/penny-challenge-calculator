import React from 'react';
import dayjs from 'dayjs';
import './App.css';
import {
  dayCount,
  currentDay,
  currentYear,
  currentSavings,
  goalPercentage
} from './calculator';

function App() {
  return (
    <div className="App">
      <h1>Penny Challenge Tracker</h1>
      <p>Today is {dayjs(currentDay).format('dddd D MMMM YYYY')}, day {dayCount} of the year so far.</p>
      <p>Today you've added £{(dayCount / 100).toFixed(2)} to your savings.</p>
      <p>Your current savings so far in {currentYear} are £{currentSavings}.</p>
      <p>Today you've reached {goalPercentage}% of your goal!</p>
    </div>
  );
}

export default App;
