import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Men from "./Men"
import Women from './Women'
import Kids from './Kids'
import "./App.css"
import Contact from './Contact'


function App() {
  return (
    <div>

      <div className='navbar'>
        <Link className='link' to="/" >HOME</Link>
        <Link className= 'link' to="/Men">MEN</Link>
        <Link className='link' to="/Women" >WOMEN</Link>
        <Link className='link' to="/Kids" >KIDS</Link>
        <Link className='link' to="/Contact" >CONTACT</Link>


      </div>

     <Routes>  

    <Route path='/' element={<Home />} />
    <Route path= '/Men'element= {<Men />} />
    <Route path='/Women' element= {<Women />} />
    <Route path='/Kids' element= {<Kids />} />
    <Route path='/Contact' element= {<Contact />} />

     
    </Routes>

    </div>
  )
}

export default App
