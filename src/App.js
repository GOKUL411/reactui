import React from 'react'
import {BrowserRouter ,Routes,Route } from 'react-router-dom'

import {Register} from './Components/Register'
import PostStudent from './Components/PostCustomer'
import GetStudents from './Components/GetCustomer'
import Login from './Components/Login'
import UpdateStudent from './Components/PutCustomer.jsx'

import Home from './Components/Home'
import Student from './Components/StudentUniversity'

export const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* Initial route: Display the "Register" component */}
      <Route path="/register" element={<Register />} />

{/* When user clicks "Login" or "Sign Up" in the "Register" component, go to the "Login" page */}
<Route path="/" element={<Login />} />

{/* After successful login, redirect to the "Home" page */}
<Route path="/home" element={<Home />} />



    <Route exact path='/student' element={<Student/>}/>
  
    <Route exact path='/pstudent' element={<PostStudent />}/>
    <Route exact path='/gstudent' element={<GetStudents/>}/>

    <Route exact path='/student/edit/:studentID' element={<UpdateStudent/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}