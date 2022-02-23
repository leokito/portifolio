import React, {useState} from 'react'
import SliderComp from '../SliderComp'
import { ArrowForward, ArrowRight } from '../HeroSection/style'
import { QualiContainer, QualiTitle, QualiWrap, BtnWrap } from './style'
import { Button } from '../Button/ButtonElements'

const Qualifications = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
      setHover(!hover)
  };
  return (
    <QualiContainer id="qualifications">
        <QualiTitle>Qualificações</QualiTitle>
        <QualiWrap>
            <SliderComp/>
        </QualiWrap>
        <BtnWrap>
            <Button 
                to='projects'
                big={true}
                dark={true}
                primary={true}
                bigFont={true}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                >Projetos {hover ? <ArrowForward/> : <ArrowRight />}
            </Button>
        </BtnWrap>
    </QualiContainer>
  )
}

export default Qualifications