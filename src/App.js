import logo from './logo.svg';
import './App.css';
import GitCrud from './component/GitCrud';
import axios from 'axios';
import Student from './component/Student';
import Create from './component/Create';
import Home from './component/Home';
import GetCre from './component/GetCre';
import Update from './component/Update';
import Auth from './component/Auth';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
     <Router>
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/auth'element={<Auth/>}></Route>
        <Route path='/up'element={<Update/>}></Route>
        <Route path='/getcre'element={<GetCre/>}></Route>
        <Route path='/get'element={<GitCrud/>}></Route>
        <Route path='/std'element={<Student/>}></Route>
        <Route path='/cre'element={<Create/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
