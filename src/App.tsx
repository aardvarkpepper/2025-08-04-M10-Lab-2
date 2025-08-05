import { useState } from 'react';
import './App.css';
import { PaginationDemo } from './components/PaginationDemo/PaginationDemo';

function App() {
  const [theme, setTheme] = useState('dark');
  const handleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }
  const paginationDemoData = [
    {
      totalItems: 22,
      itemsPerPage: 10,
      initialPage: 1
    },
    {
      totalItems: 0, // see what happens with 0
      itemsPerPage: 8,
      initialPage: 2 // 
    },
    {
      totalItems: 0,
      itemsPerPage: 0,
      initialPage: 1,
    },
    {
      totalItems: 10,
      itemsPerPage: 10,
      initialPage: 1,
    },
    {
      totalItems: 33,
      itemsPerPage: 8,
      initialPage: 14 // oh noes
    },
  ];

  return (
    <div className={`${theme} container`}>
      <button onClick={handleTheme}>{`Toggle ${theme} off`}</button>
      {paginationDemoData.map((element, index) => <PaginationDemo key={index} totalItems={element.totalItems} itemsPerPage = {element.itemsPerPage} initialPage = {element.initialPage}/>)}
    </div>
  )
}

export default App
