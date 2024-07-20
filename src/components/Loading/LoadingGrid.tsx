import React, { useEffect } from 'react';

const LoadingGrid = () => {
  useEffect(() => {
    const cubes = document.querySelectorAll('.cube');
    cubes.forEach((cube: Element, index) => { // Change the type of 'cube' parameter to 'Element'
      (cube as HTMLElement).style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  const cubes = new Array(12).fill(0);

  return (
    <div className="agnostic-loading">
      {cubes.map((_, index) => (
        <div key={index} className="cube">
          <div className="face front">N</div>
          <div className="face back">O</div>
          <div className="face left">O</div>
          <div className="face right">Z</div>
          <div className="face top">E</div>
          <div className="face bottom">!</div>
        </div>
      ))}
    </div>
  );
};

export default LoadingGrid;
