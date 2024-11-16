import React, { useState } from 'react';
import moment from 'moment-timezone';
import HomeLink from '../components/HomeLink';
import './Time.css';

const Time = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [convertedDateTime, setConvertedDateTime] = useState('');

  const handleDateTimeChange = (type, value) => {
    if (type === 'date') {
      setSelectedDate(value);
    } else {
      setSelectedTime(value);
    }

    // Only convert if both date and time are selected
    if ((type === 'date' ? value : selectedDate) && (type === 'time' ? value : selectedTime)) {
      const dateTimeString = `${type === 'date' ? value : selectedDate}T${type === 'time' ? value : selectedTime}`;
      
      // Create a moment object with the selected datetime in IST
      const istDateTime = moment.tz(dateTimeString, 'Asia/Kolkata');
      
      // Convert to Pacific Time
      const pacificDateTime = istDateTime.clone().tz('America/Los_Angeles');
      
      // Format the converted datetime
      setConvertedDateTime({
        date: pacificDateTime.format('MMM D, YYYY'),
        time: pacificDateTime.format('hh:mm A'),
        zone: pacificDateTime.format('z')
      });
    }
  };

  return (
    <div className="text">
      <HomeLink />
      <div className="time-converter">
        <h1 className="title">Time Converter</h1>
        
        <div className="datetime-input-container">
          <div className="input-group">
            <label htmlFor="ist-date">Select Date:</label>
            <input
              type="date"
              id="ist-date"
              value={selectedDate}
              onChange={(e) => handleDateTimeChange('date', e.target.value)}
              className="date-input"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="ist-time">Select Time:</label>
            <input
              type="time"
              id="ist-time"
              value={selectedTime}
              onChange={(e) => handleDateTimeChange('time', e.target.value)}
              className="time-input"
            />
          </div>
        </div>

        {convertedDateTime && (
          <div className="time-result">
            <div className="time-display">
              <span className="time-label">IST:</span>
              <div className="datetime-value">
                <span className="date-value">
                  {moment(selectedDate).format('MMM D, YYYY')}
                </span>
                <span className="time-value">
                  {moment(selectedTime, 'HH:mm').format('hh:mm A')}
                </span>
              </div>
            </div>
            
            <div className="time-display">
              <span className="time-label">Pacific:</span>
              <div className="datetime-value">
                <span className="date-value">{convertedDateTime.date}</span>
                <span className="time-value">{convertedDateTime.time}</span>
                <span className="timezone-label">{convertedDateTime.zone}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Time;
