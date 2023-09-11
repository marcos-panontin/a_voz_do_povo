import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Counter from './Counter';

const ProgressBar2D = ({ progressPercentage, winningOption }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(progressPercentage);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [progressPercentage]);

  return (
    <div className="h-3 w-80 rounded-md bg-gray-300 shadow-lg">
      <div
        style={{
          width: `${width}%`,
          marginRight: winningOption === 'option0' ? 'auto' : '0',
          marginLeft: winningOption === 'option0' ? '0' : 'auto',
        }}
        className="h-full bg-blue-600 rounded-md transition-width duration-700 ease-in-out"
      >
      </div>
    </div>
  );
};

ProgressBar2D.propTypes = {
  progressPercentage: PropTypes.number.isRequired,
  winningOption: PropTypes.string.isRequired,
};

export default ProgressBar2D;
