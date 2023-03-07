import React from 'react';

const Spinner: React.FC = () => (
  <div>
    <div style={{
      border: '20px solid #FFF',
      borderTop: '20px solid #e01de0',
      borderRadius: '50%',
      width: '120px',
      height: '120px',
      animation: 'spin 1.2s linear infinite',
    }}>
    <style>
    {`
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    `}
    </style>
    </div>
  </div>
)

export default Spinner;
