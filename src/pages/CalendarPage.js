import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from 'moment';
import CalendarView from "../helpers/CalenderView";
import Stats from "../helpers/Stats";

const CalendarPage = ({checkAuth}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!checkAuth(0)) {
      navigate('/auth', { state: { source: 'calendar', requiredAuth: 0 } })
    }
  });
  
  // Set your startDate and endDate here
  const startDateStr = '2023-06-22';
  const endDateStr = '2023-11-30';
  const startDate = moment(startDateStr);
  const endDate = moment(endDateStr);

  // Get the current date
  const currentDate = moment(); // This will get the current date based on the user's timezone

  // Calculate stats
  const daysSinceStart = currentDate.diff(startDate, 'days');
  const daysToGo = endDate.diff(currentDate, 'days');
  const totalDays = endDate.diff(startDate, 'days');
  const percentageElapsed = (daysSinceStart / totalDays) * 100;
  
  return(
    <div className="text">
      <p className="title">Calendar</p>
      <CalendarView startDateStr={startDateStr} endDateStr={endDateStr} />
      <Stats daysSinceStart={daysSinceStart} daysToGo={daysToGo} percentageElapsed={percentageElapsed} />
    </div>
  )
};

export default CalendarPage;