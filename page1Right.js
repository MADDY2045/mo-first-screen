import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components for Card
const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
`;

// Mock API call
const fetchTilesData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, status: 'Active', vendorName: 'Vendor A' },
        { id: 2, status: 'Inactive', vendorName: 'Vendor B' },
        { id: 3, status: 'Pending', vendorName: 'Vendor C' },
      ]);
    }, 1000);
  });
};

const Page1Right = ({ onCardClick }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch cards data from API
    fetchTilesData().then((data) => setCards(data));
  }, []);

  return (
    <div>
      <h2>Page 1 Right</h2>
      <div>
        {cards.map((card) => (
          <Card key={card.id} onClick={() => onCardClick(card)}>
            <p>Status: {card.status}</p>
            <p>Vendor: {card.vendorName}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page1Right;
