import React from 'react';

const Page3Left = ({ goToPrevious }) => {
  return (
    <div>
      <h2>Page 3 Left</h2>
      <button onClick={goToPrevious}>Go to Previous Page</button>
    </div>
  );
};

export default Page3Left;
