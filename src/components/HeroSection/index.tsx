import React, {useRef, useState} from 'react'
import video from '../../assets/videos/video.mp4'
import js from '../../assets/images/javascript.png';
import python from '../../assets/images/python.png';
import ts from '../../assets/images/ts-logo-128.png';
import node from '../../assets/images/nodejs.png';
import react from '../../assets/images/react.png';
import html5 from '../../assets/images/html5.png';
import css3 from '../../assets/images/css3.png';
import {HeroContainer, HeroBackground, BackgroundVideo, HeroContent, HeroH1, HeroP, HeroBtnWrap, ArrowForward, ArrowRight, ContentContainer, LeftColumn, RightColumn, AnImage} from './style'
import { Button } from '../Button/ButtonElements'
import Typewriter from 'typewriter-effect';

const HeroSection = () => {

  const [hover, setHover] = useState(false)
  const constraintRef = useRef(null)

  const onHover = () => {
    setHover(!hover)
  };
  const fadeLeft = {
    hidden: {opacity: 0, x: -100},
    visible: {opacity: 1, x:0}
  };
  return (
    <HeroContainer 
    id='home'
    >
        <HeroBackground>
            <BackgroundVideo 
            autoPlay loop muted src={video}
            />
        </HeroBackground>
        <HeroContent>
        <ContentContainer>
          <LeftColumn>
          <HeroH1
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{duration: 4}}
          >Leonardo Pereira</HeroH1>
          <HeroP>
          <Typewriter 
          options={{
            strings: ['Desenvolvedor Front-end.', 'Desenvolvedor Back-end.', 'Desenvolvedor FullStack.'],
            autoStart: true,
            loop: true,
            cursor: '|',
          }} />
          </HeroP>
          </LeftColumn>
          <RightColumn ref={constraintRef}>
            <AnImage src={js} alt='' 
            drag={true} 
            dragConstraints={constraintRef} 
            initial={{opacity: 0, y:-100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 3}}
            />
            <AnImage src={python} alt='' 
              drag={true} 
              dragConstraints={constraintRef}
              initial={{opacity: 0, y:-100}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 3}}/>
            <AnImage src={ts} alt='' dragConstraints={constraintRef}
              drag={true} 
              initial={{opacity: 0, y:-100}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 3}}/>
            <AnImage src={node} alt='' 
              drag={true} 
              dragConstraints={constraintRef}/>
            <AnImage src={react} alt='' 
              drag={true} 
              dragConstraints={constraintRef}
              initial={{opacity: 0, y:-100}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 3}}/> 
              <AnImage src={html5} alt='' dragConstraints={constraintRef}
              drag={true} 
              initial={{opacity: 0, y:-100}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 3}}/>
              <AnImage src={css3} alt='' dragConstraints={constraintRef}
              drag={true} 
              initial={{opacity: 0, y:-100}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 3}}/>
          </RightColumn>
          </ContentContainer>
          <HeroBtnWrap>
            <Button 
            to='about'
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
            >
              Sobre mim {hover ? <ArrowForward/> : <ArrowRight />}
            </Button>
          </HeroBtnWrap>
          </HeroContent>
          </HeroContainer>
  )
}

export default HeroSection