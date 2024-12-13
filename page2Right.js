import React from 'react';

const Page2Right = ({ card }) => {
  return (
    <div>
      <h2>Page 2 Right</h2>
      {card ? (
        <div>
          <p>ID: {card.id}</p>
          <p>Status: {card.status}</p>
          <p>Vendor: {card.vendorName}</p>
        </div>
      ) : (
        <p>No card data available</p>
      )}
    </div>
  );
};

export default Page2Right;
