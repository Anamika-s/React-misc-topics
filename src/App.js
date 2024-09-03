import logo from './logo.svg';
import './App.css';
import PropTypesDemo  from './components/PropTypesDemo';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Links  from './components/Links';
import  AboutsUs  from './components/AboutsUs';
import  ContactUs  from './components/ContactUs';
import  Product  from './components/Product';

function App() {
  return (
    <div className="App">
     {/* <PropTypesDemo  name="lalit" marks={10}/>
     <PropTypesDemo/> */}
    
     <BrowserRouter>
     <Links/>
     <Routes>
      {/* <Route path="index" Component={AboutsUs}/> */}
      <Route path='aboutus' Component={AboutsUs}/>
      <Route path='contactus' Component={ContactUs}/>
     <Route path='product' Component={Product}/>
     <Route path='proptypes' Component={PropTypesDemo}/>
     {/* <Route path='*' '{<h1> Page Not Found </h1>'/> */}
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
