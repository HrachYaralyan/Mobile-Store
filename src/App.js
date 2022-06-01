import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from "react";

import data from "./json/phone.json";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Hed from './repead/hed/hed';
import Foot from './repead/foot/foot';
import Phone from './pages/phones/phone';
import Home from './pages/home/home';
import Shop from './repead/shop/shop';
import ToDoList from './pages/toDoList/ToDoStart';
import ReducExample from './pages/reduc_example/rExample';
import Akardion from './pages/akardion/akardion';


import homeJson from "./json/home.json"
import Translate from './pages/somethingElse/translate';
import ModalLog from './repead/hed/Registration/ModalLog/ModalLog';
import ModalReg from './repead/hed/Registration/ModalReg/ModalReg';




function App() {
  const [global , setGlobal] = useState(data);


  const [homeJ , sethomeJ] = useState(homeJson);


  const [lan , setLan] = useState(0)



  const [modalActiveLog, setModalActiveLog] = useState(false);
  const [modalActiveReg, setModalActiveReg] = useState(false);

  function clickEn() {
    setLan(0)
  }

  function clickRu() {
    setLan(1)
  }

  function clickArm() {
    setLan(2)
  }



  return (
  <>
 <BrowserRouter>
          <Hed lan={lan} setLan={setLan} clickEn={clickEn} clickRu={clickRu} clickArm={clickArm} setActiveLog={setModalActiveLog} setActiveReg={setModalActiveReg}/> 
          {modalActiveLog && ( <ModalLog activeLog={modalActiveLog} setActiveLog={setModalActiveLog}/>)}
          {modalActiveReg && (<ModalReg activeReg={modalActiveReg} setActiveReg={setModalActiveReg}/>)}
             <Routes>
             <Route path="/" element={ <Home   homeJ={homeJ}  sethomeJ={sethomeJ} />} />
             <Route path="/phone" element={ <Phone  global={global} setGlobal={setGlobal} />} />
             <Route path="/shop" element={<Shop global={global} setGlobal={setGlobal} filterShop={global.filter(({ itemcount }) => itemcount > 0)}  filterShop2={homeJ.filter(({ itemcount }) => itemcount > 0)} homeJ={homeJ}  sethomeJ={sethomeJ} /> } />
             <Route path="/ToDoStart" element={<ToDoList/>} />
             <Route path='/rExample' element={<ReducExample/>} />
             <Route path='/akardion' element={<Akardion/>} />
             <Route path="/translate" element={<Translate lan={lan}/>} />
              </Routes>
          <Foot/>
</BrowserRouter>

  </>
  );
}

export default App;



// npm install i18next i18next-browser-languagedetector i18next-http-backend