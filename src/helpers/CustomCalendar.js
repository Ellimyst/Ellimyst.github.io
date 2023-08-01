// CustomCalendar.js
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../pages/CalendarPage.css'; // Import the CSS file for custom styling

const CustomCalendar = ({ startDate, endDate, currentDate }) => {
  const dateIsHighlighted = date => date >= startDate && date <= endDate;

  const tileClassName = ({ date }) => {
    if (isCurrentDate(date)) {
      return 'current-date';
    }
    if (dateIsHighlighted(date)) {
      if (date < currentDate) {
        return 'past-date'; // Customize the background color for the days that have passed
      }
      return 'future-date'; // Customize the background color for the days that are yet to come
    }
  };

  const isCurrentDate = date =>
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear();

  return <Calendar tileClassName={tileClassName} value={currentDate} />;
};

export default CustomCalendar;
