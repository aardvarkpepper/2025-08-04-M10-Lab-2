import { useState } from 'react';
import './App.css';
import { PaginationDemo } from './components/PaginationDemo/PaginationDemo';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`${theme} container`}>
      <PaginationDemo />
    </div>
  )
}

export default App
