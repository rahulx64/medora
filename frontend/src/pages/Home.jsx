import React from 'react'

import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import Banneer from '../components/Banneer'
import TopDoctor from '../components/TopDoctor'
const Home = () => {
  return (
    <div>
     <Header/>
     <SpecialityMenu/>
     <TopDoctor/>
     <Banneer/>
    </div>
  )
}

export default Home