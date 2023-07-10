const LoadingGrid = () => {
    const cells = new Array(6).fill(0);
    return (
        <div className="loading-grid">
            {cells.map((cell, index) => (
                <div key={index} className="loading-cell">
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                    <div className="loading-text"></div>
                </div>
            ))}
            <style jsx>{`
          .loading-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(800px, 1fr));
            gap: 1em;
          }
          .loading-cell {
            width: 100%;
            height: 200px;
            padding: 1em;
            background-color: #f3f3f3;
            display: flex;
            flex-direction: column;
            gap: 0.5em;
          }
          .loading-text {
            width: 100%;
            height: 1em;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
          }
          @keyframes loading {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
        `}</style>
        </div>
    );
};

export default LoadingGrid;