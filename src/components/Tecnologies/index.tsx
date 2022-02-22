import React, {useState} from 'react';
import {
    QualiContainer,
    QualiH1, 
    QualiWrap, 
    QualiCard, 
    QualiIcon, 
    QualiH2, 
    QualiList, 
    QualiItem, 
    BtnWrap
} from './style';
import { ArrowForward, ArrowRight } from '../HeroSection/style';
import Icon1 from '../../assets/images/frontend.svg';
import Icon2 from '../../assets/images/backend.svg';
import { Button } from '../Button/ButtonElements';

const Tecnologies = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
      setHover(!hover)
    };
  return (
    <QualiContainer id='tecnologies'>
        <QualiH1>Tecnologias</QualiH1>
        <QualiWrap>
            <QualiCard>
                <QualiIcon src={Icon1}/>
                <QualiH2>Front-End</QualiH2>
                <QualiList>
                    <QualiItem>HTML5</QualiItem>
                    <QualiItem>CSS3</QualiItem>
                    <QualiItem>Javascript</QualiItem>
                    <QualiItem>ReactJS</QualiItem>
                    <QualiItem>Typescript</QualiItem>
                </QualiList>
            </QualiCard>
            <QualiCard>
                <QualiIcon src={Icon2}/>
                <QualiH2>Back-End</QualiH2>
                <QualiList>
                <QualiItem>Python</QualiItem>
                <QualiItem>Flask / FastAPI</QualiItem>
                <QualiItem>Django</QualiItem>
                <QualiItem>NodeJS</QualiItem>
                <QualiItem>ExpressJS</QualiItem>
                <QualiItem>PostgreSQL</QualiItem>
                </QualiList>
            </QualiCard>
        </QualiWrap>
        <BtnWrap>
            <Button 
                to='qualifications'
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
                >Qualificações {hover ? <ArrowForward/> : <ArrowRight />}
            </Button>
        </BtnWrap>
    </QualiContainer>
  )
}

export default Tecnologies