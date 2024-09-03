import logo from './logo.svg';
import './App.css';
import React from 'react';
import { lazy } from 'react';
import { BrowserRouter, Route,Router, Routes } from 'react-router-dom';
// import { PropTypesDemo } from './components/PropTypesDemo';
import { Suspense } from 'react';
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import { Links } from './components/Links';
// import { AboutsUs } from './components/AboutsUs';
// import { ContactUs } from './components/ContactUs';
// import { Product } from './components/Product';
const PropTypesDemo = lazy(() => import('./components/PropTypesDemo'));
const Links = lazy(()=> import ('./components/Links'));
const AboutsUs = lazy(()=> import('./components/AboutsUs'));
const ContactUs = lazy(()=> import('./components/ContactUs'));
const Product = lazy(()=>import('./components/Product'));
function App1() {
  return (
    <div className="App">
     {/* <PropTypesDemo  name="lalit" marks={10}/>
     <PropTypesDemo/> */}
     
     <Suspense fallback={<div>Page Loading...</div>}>
     <BrowserRouter> 
      <section>
     <Links/>
     {/* <AboutsUs/>
     <ContactUs/>
     <Product/>
     <PropTypesDemo/> */}
     <Routes>
      <Route path="index" Component={AboutsUs}/>
       <Route path='aboutus' Component={AboutsUs}/>
      <Route path='contactus' Component={ContactUs}/> 
     <Route path='product' Component={Product}/>
     <Route path='proptypes' Component={PropTypesDemo}/> 
     {/* <Route path='*' '{<h1> Page Not Found </h1>'/> */}
     </Routes>
     </section> 
     </BrowserRouter> 
     </Suspense>
    </div>
  );
}

export default App1;
