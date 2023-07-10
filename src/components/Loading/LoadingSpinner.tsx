const LoadingSpinner: React.FC = () => {
    return (
        <>
            <div className="spinner"></div>
            <style jsx>{`
                .spinner {
                    border: 16px solid #f3f3f3;
                    border-radius: 50%;
                    border-top: 16px solid blue;
                    border-right: 16px solid green;
                    border-bottom: 16px solid red;
                    border-left: 16px solid pink;
                    width: 120px;
                    height: 120px;
                    animation: spin 2s linear infinite;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </>
    );
};

export default LoadingSpinner;
