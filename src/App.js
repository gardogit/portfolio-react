// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToDoList from './components/to-do/ToDoList';
import Home from './components/Home';

function App() {
  return (
    <Router basename='/portfolio-react'>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/todolist/' element={<ToDoList />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
