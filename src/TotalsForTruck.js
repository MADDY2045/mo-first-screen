// src/TotalsForTruck.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { totalsData } from './data';

const LabelValueContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  position: relative;
  left: 8px;
  top: 5px;
`;

const LabelValuePair = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%; /* Adjust width for three columns */
  margin-bottom: 40px; /* Add spacing between rows */
  justify-content: space-between;
`;

const Label = styled.div`
  font-weight: 600;
`;

const Value = styled.div`
  font-weight: 500;
`;

const TotalsForTruck = () => {
  const [units, setUnits] = useState(totalsData[0].value); // Example state

  // Sample function to update units (demonstration purposes)
  // eslint-disable-next-line
  const updateUnits = (newUnits) => {
    setUnits(newUnits);
  };

  return (
    <LabelValueContainer>
      {totalsData.map((item, index) => (
        <LabelValuePair key={index}>
          <Label>{item.label}</Label>
          <Value>{item.label === 'Units' ? units : item.value}</Value>
        </LabelValuePair>
      ))}
    </LabelValueContainer>
  );
};

export default TotalsForTruck;
