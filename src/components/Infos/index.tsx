import React, {useState} from 'react';
import {
    InfoContainer, 
    InfoWrap, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrap, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ImgWrap, 
    Img
} from './infoElements'
import { ArrowForward, ArrowRight } from '../HeroSection/style';
import { Button } from '../Button/ButtonElements';
import { iAboutObj } from '../../Types';


const Infos = ({lightBg, id, imgStart, topLine, lightTxt, headline, darkTxt, img, alt, primary, dark, buttonLabel, description}: iAboutObj) => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
      setHover(!hover)
    };

  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrap>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrap>
                            <TopLine >{topLine}</TopLine>
                            <Heading lightTxt={lightTxt}>{headline}</Heading>
                            <Subtitle darkTxt={darkTxt}>{description}</Subtitle>
                            <BtnWrap>
                                <Button 
                                    to='tecnologies'
                                    big={true}
                                    dark={dark}
                                    primary={primary}
                                    bigFont={true}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80}
                                    onMouseEnter={onHover}
                                    onMouseLeave={onHover}
                                > {buttonLabel} {hover ? <ArrowForward/> : <ArrowRight />}
                                </Button>
                            </BtnWrap>
                        </TextWrap>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrap>
        </InfoContainer>
    </>
  )
}

export default Infos