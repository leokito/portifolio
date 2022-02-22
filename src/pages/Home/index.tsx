import React, {useState} from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import Infos from '../../components/Infos'
import { aboutObj } from '../../components/Infos/Data'
import Tecnologies from '../../components/Tecnologies'
import Sidebar from '../../components/Sidebar'

const Home = () => {

    const  [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Header toggle={toggle}/>
      <HeroSection />
      <Infos {...aboutObj}/>
      <Tecnologies />
    </>
  )
}

export default Home