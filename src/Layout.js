// src/Layout.js
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh !important;
  width: 100vw;
  overflow: hidden;
`;

const Left = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 98vh; // Adjust to fit the new top section
`;

const TopLeftSection = styled.div`
  height: 60px;
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftSectionContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LeftSection = styled.div`
  flex: 1;
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftButton = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const RightSection = styled.div`
  height: 20px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightDynamicSection = styled.div`
  flex: 1;
  overflow-y: auto;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
`;

const RightDynamicItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: center;
`;

const Layout = () => {
  useEffect(() => {
    const handleResize = () => {
      const appElement = document.querySelector('.App');
      const containerElement = document.querySelector('.container');
      if (appElement && containerElement) {
        containerElement.style.height = `${appElement.clientHeight}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set height on initial render

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container className="container">
      <Left>
        <TopLeftSection>Top Section</TopLeftSection>
        <LeftSectionContainer>
          <LeftSection>Section 1</LeftSection>
          <LeftSection>Section 2</LeftSection>
          <LeftSection>Section 3</LeftSection>
        </LeftSectionContainer>
        <LeftButton>Left Button</LeftButton>
      </Left>
      <Right>
        <RightSection>Row 1</RightSection>
        <RightSection>Row 2</RightSection>
        <RightSection>Row 3</RightSection>
        <RightDynamicSection>
          {[...Array(50)].map((_, i) => (
            <RightDynamicItem key={i}>Dynamic Item {i + 1}</RightDynamicItem>
          ))}
        </RightDynamicSection>
      </Right>
    </Container>
  );
};

export default Layout;
