import React from 'react';

const Page2Left = ({ goToNext, goToPrevious }) => {
  return (
    <div>
      <h2>Page 2 Left</h2>
      <button onClick={goToPrevious}>Go to Previous Page</button>
      <button onClick={goToNext}>Go to Next Page</button>
    </div>
  );
};

export default Page2Left;
