import React from 'react';

const Stats = ({ daysSinceStart, daysToGo, percentageElapsed }) => {
  return (
    <div>
      <h2>Stats:</h2>
      <p>Days Since Long Distance: {daysSinceStart}</p>
      <p>Days Till We Meet: {daysToGo}</p>
      <p>Percentage Elapsed: {percentageElapsed.toFixed(2)}%</p>
    </div>
  );
};

export default Stats;
