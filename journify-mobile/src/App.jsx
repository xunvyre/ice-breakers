import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Journals from './components/Journals/Journals';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';
import Upload from './components/Upload/Upload';

const App = () =>
{
  return (
    <>
        <Header/>
        <Login/>
        <Nav/>
        <Journals/>
        <Upload/>
        <Footer/>
    </>
  )
};

//conditionally render Nav, Journals, and Upload
//based on login credentials
//after login, Login should disappear

//conditionally render Single (single journal)
//based on interaction with created list of journals
//Single is a component of Journals

export default App;