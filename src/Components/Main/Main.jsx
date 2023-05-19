import React from 'react'
import Footsteps from '../Footsteps/Footsteps'
import Home from '../Home/Home'
import Clients from '../Our Clients/Clients'
import SolveForward from '../Solve Forward/SolveForward'
import Toolbox from '../Toolbox/Toolbox'
import './Main.css'
import Businesses from '../Businesses/Businesses'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import ScrollBtn from '../ScrollTop/ScrollBtn'

const Main = () => {
  return (
    <>
      <Home />
      <Footsteps />
      <Toolbox />
      <SolveForward />
      <Clients />
      <Businesses />
      <Contact />
      <Footer />
      <ScrollBtn />
    </>
  )
}

export default Main