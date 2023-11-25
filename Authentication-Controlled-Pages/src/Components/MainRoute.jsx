import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Login from '../Pages/Login';

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/homepage" element={<Homepage/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoute;