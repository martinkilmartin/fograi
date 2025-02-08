import React, { useEffect, useState } from 'react';

interface LoadingSpinnerProps {
  isError?: true;
}

const getEmojiBySeed = (seed: number, isError?: true): string => {
  const loadingEmojis = [
    '⏳', // Hourglass Not Done
    '⌛', // Hourglass Done
    '🔄', // Counterclockwise Arrows
    '🔃', // Clockwise Arrows
    '🌀', // Cyclone
    '🌪️', // Tornado
    '🌫️', // Fog
    '⚙️', // Gear (Processing)
    '🔧', // Wrench
    '🛠️', // Hammer and Wrench
    '📡', // Satellite Antenna (Fetching)
    '📶', // Network Signal
    '🛸', // Flying Saucer (In Progress)
    '🚀', // Rocket (Launching)
    '🔍', // Magnifying Glass (Searching)
    '📊', // Bar Chart (Processing Data)
    '📤', // Outbox Tray (Sending)
  ];

  const errorEmojis = [
    '😢', // Crying Face
    '😞', // Disappointed Face
    '🙈', // See-No-Evil Monkey
    '🚫', // Prohibited
    '⚠️', // Warning Sign
    '❗', // Exclamation Mark
    '🔥', // Fire (Something went wrong)
    '🤯', // Exploding Head
    '💥', // Collision (Crash)
    '🛑', // Stop Sign
    '📛', // Name Badge (Alert)
    '⚡', // High Voltage (Error)
    '🧨', // Bomb
    '🔴', // Red Circle
    '🤕', // Face with Head-Bandage
    '😬', // Grimacing Face
    '🥵', // Hot Face (Overloaded)
  ];
  const index = seed % loadingEmojis.length; // Ensure index stays within bounds
  return isError ? errorEmojis[index] : loadingEmojis[index];
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isError }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isEven = seconds % 2 === 0;
  const emoji = getEmojiBySeed(seconds, isError);

  return (
    <>
      <div className="spinner-wrapper">
        <div className="spinner"></div>
        <div className="timer">{isEven ? emoji : seconds}</div>
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
