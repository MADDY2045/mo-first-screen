import React from 'react';

const Page1Left = ({ goToNext }) => {
  return (
    <div>
      <h2>Page 1 Left</h2>
      <button onClick={goToNext}>Go to Next Page</button>
    </div>
  );
};

export default Page1Left;
