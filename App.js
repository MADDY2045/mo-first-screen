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

const pages = [
  createPageComponent(Page1Left, Page1Right, 400),
  createPageComponent(Page2Left, Page2Right, 600),
  createPageComponent(Page3Left, Page3Right, 800),
  // Add more pages as needed
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const goToNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
  const goToPrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  const CurrentPageComponent = pages[currentPage];

  return (
    <div>
      <CurrentPageComponent
        goToNext={currentPage < pages.length - 1 ? goToNext : null}
        goToPrevious={currentPage > 0 ? goToPrevious : null}
      />
    </div>
  );
}

export default App;
