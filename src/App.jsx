import React from 'react';
import { Route, Routes } from "react-router-dom";

import Header from './Header.jsx'
import { FiBookOpen } from "react-icons/fi";
import Middle from './Middle .jsx';
import Footer from './Footer.jsx';
import Student from './student.jsx';
import isstudent from './student.jsx';
import { PropagateLoader } from "react-spinners"
import Spinner from './Spinner.jsx';
import BlogPosts from './components/BlogPosts';
import Navbar from './Context/Navbar.jsx';






function App() {
 const User = {
    name: "John Doe",
    age: 11,
    isActive: true,
 };

  return (


    <div>
      <Spinner />
      <PropagateLoader loading={false} />
      {/* <Student name="phillip" age={30} isstudent={true} />
      <Student name="desmond" age={34} isstudent={true} />
      <Student name="samson" age={35} isstudent={true} />
      <Student name="samson" age={35} isstudent={true} />
      <Student name="samson" age={35} isstudent={true} />
      <Student name="samson" age={35} isstudent={true} /> */}
      <Header /><br />
      <Middle />
      <BlogPosts /><br />
      <Footer/><br /><br /><br />
      <Navbar/>


    

    </div>
  )
}

export default App
