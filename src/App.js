// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToDoList from './components/to-do/ToDoList';
import Products from './components/ecommerce/Products';
import Home from './components/Home';
import DetailsConteiner from './components/ecommerce/DetailsConteiner';
import Category from './components/ecommerce/Category';

function App() {
  return (
    <Router basename='/portfolio-react'>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/todolist/' element={<ToDoList />} />
          <Route path='/ecommerce/' element={<Products />} />
          <Route path='/ecommerce/:id' element={<DetailsConteiner />} />
          <Route path="/ecommerce/category/:category" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
