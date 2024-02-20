import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value: string) => {
    setDisplay(prev => prev + value);
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="shadow-2xl rounded-xl p-4 grid grid-cols-4 gap-4 bg-gray-300">
        <input 
          className="col-span-4 h-16 w-full shadow-2xl rounded-xl bg-gray-350 text-right p-4 text-4xl"
          value={display}
          disabled
        />
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map(value => (
          <button 
            key={value} 
            className="shadow-2xl rounded-full w-16 h-16 font-bold text-2xl bg-blue-200 hover:bg-blue-300"
            onClick={() => handleClick(value)}
          >
            {value}
          </button>
        ))}
        {['+', '-', '*', '/'].map(value => (
          <button 
            key={value} 
            className="shadow-2xl rounded-full w-16 h-16 font-bold text-2xl bg-green-200 hover:bg-green-300"
            onClick={() => handleClick(value)}
          >
            {value}
          </button>
        ))}
        <button 
          className="shadow-2xl rounded-full w-16 h-16 font-bold text-2xl bg-red-200 hover:bg-red-300"
          onClick={calculate}
        >
          =
        </button>
        <button 
          className="shadow-2xl rounded-full w-16 h-16 font-bold text-2xl bg-yellow-200 hover:bg-yellow-300"
          onClick={() => setDisplay('')}
        >
          C
        </button>
      </div>
    </div>
  );
};

export default App;