// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import SignIn from "./pages/SignIn";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/logout' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
