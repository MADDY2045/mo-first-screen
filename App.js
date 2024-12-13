import React, { useState } from 'react';
import withLayout from './components/layouts/withLayout';
import Page1Left from './components/pages/Page1Left';
import Page1Right from './components/pages/Page1Right';
import Page2Left from './components/pages/Page2Left';
import Page2Right from './components/pages/Page2Right';
import Page3Left from './components/pages/Page3Left';
import Page3Right from './components/pages/Page3Right';

// Function to create dynamic page components using the HOC
const createPageComponent = (leftComponent, rightComponent, height) => {
  return withLayout(leftComponent, rightComponent, height);
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const goToPrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setCurrentPage(1); // Navigate to Page 2
  };

  const pages = [
    createPageComponent(
      (props) => <Page1Left {...props} />,
      (props) => <Page1Right {...props} onCardClick={handleCardClick} />,
      400
    ),
    createPageComponent(
      (props) => <Page2Left {...props} goToPrevious={goToPrevious} />,
      (props) => <Page2Right {...props} card={selectedCard} />,
      600
    ),
    createPageComponent(
      (props) => <Page3Left {...props} goToPrevious={goToPrevious} />,
      (props) => <Page3Right {...props} />,
      800
    ),
  ];

  const CurrentPageComponent = pages[currentPage];

  return (
    <div>
      <CurrentPageComponent />
    </div>
  );
};

export default App;
