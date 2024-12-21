// src/ReusableComponent.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  height: ${(props) => props.height || 'auto'};
  //padding: 10px; /* Add padding */
  overflow: hidden;
  box-sizing: border-box; /* Ensure padding is included in the height */
`;

const Header = styled.div`
  background-color: rgba(188, 221, 244, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: ${(props) => props.headerHeight || 'auto'};
`;

const Title = styled.div`
  font-weight: 500;
  line-height: 40px;
  color: rgba(23, 25, 31, 1);
`;

const Content = styled.div`
  padding: 10px;
`;

const Hoc = ({ title, icon, height, headerHeight, children }) => {
  return (
    <CardContainer height={height}>
      <Header headerHeight={headerHeight}>
        <Title>{title}</Title>
        <img src={icon} alt="icon" />
      </Header>
      <Content>{children}</Content>
    </CardContainer>
  );
};

export default Hoc;
