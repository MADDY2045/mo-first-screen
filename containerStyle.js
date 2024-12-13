import React from 'react';
import styled from 'styled-components';

// Define the styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => props.dynamicHeight || '100vh'};
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Left = styled.div`
  width: 30%;
  border-right: 1px solid #ccc;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ccc;
  }
`;

const Right = styled.div`
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const withLayout = (LeftComponent, RightComponent, dynamicHeight) => {
  return function WithLayoutComponent(props) {
    return (
      <Container dynamicHeight={dynamicHeight ? `${dynamicHeight}px` : '100vh'}>
        <Content>
          <Left>
            <LeftComponent {...props} />
          </Left>
          <Right>
            <RightComponent {...props} />
          </Right>
        </Content>
      </Container>
    );
  };
};

export default withLayout;
