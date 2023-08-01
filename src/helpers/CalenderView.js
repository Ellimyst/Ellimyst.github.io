// CalendarView.js
import React from 'react';
import CustomCalendar from './CustomCalendar';

const CalendarView = ({ startDateStr, endDateStr }) => {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const currentDate = new Date(); // This will get the current date based on the user's timezone

  return (
    <div>
      <h2>Calendar View</h2>
      <CustomCalendar startDate={startDate} endDate={endDate} currentDate={currentDate} />
    </div>
  );
};

export default CalendarView;
