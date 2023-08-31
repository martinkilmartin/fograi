import React, { useEffect, useState } from 'react';

const LoadingSpinner = (): JSX.Element => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []); // Run only once after the first render

  return (
    <>
      <div className="spinner-wrapper">
        <div className="spinner"></div>
        <div className="timer">{seconds}</div>
      </div>
      <style jsx>{`
        .spinner-wrapper {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          justify-content: center;
          align-items: center;
          width: 120px;
          height: 120px;
        }

        .spinner {
          border: 16px solid #f3f3f3;
          border-radius: 50%;
          border-top: 16px solid blue;
          border-right: 16px solid green;
          border-bottom: 16px solid red;
          border-left: 16px solid pink;
          width: 100%;
          height: 100%;
          animation: spin 2s linear infinite;
          position: absolute;
        }

        .timer {
          font-size: 20px;
          font-weight: bold;
          color: black;
          position: absolute;
          z-index: 1;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default LoadingSpinner;
