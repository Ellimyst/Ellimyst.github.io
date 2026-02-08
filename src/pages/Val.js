import React from 'react';

const Val = () => {
  return (
    <div className="text">
      <p className="title">Dear Sura</p>
      <div>
        Will you by my valentine?
      </div>
      <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnY4bGFwd2gzN3ljeDF1d3A5cmduOG5vZWJvbnc1NmlhMGo4Y3BjZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PireEGYkQrPiXNgxaX/giphy.gif" alt="Valentine" />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', marginTop: '20px' }}>
        <button>Yes</button>
        <button>Yes</button>
      </div>
    </div>
  );
};

export default Val;
