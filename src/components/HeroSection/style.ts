import styled, {keyframes} from "styled-components";
import {motion} from 'framer-motion'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 872px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 1366px) {
        height: 680px;
    }
`
export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const BackgroundVideo = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HeroH1 = styled(motion.h1)`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px
    }
`
export const HeroP = styled.div`
    margin-top: -20px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`
export const HeroBtnWrap = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 250px;
    margin-bottom: 95px;
`
export const AnImage = styled(motion.img)`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 90px;
    max-height: 90px;
`
export const RightColumn = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

    @media (max-width: 768px) {
        display: hidden;
        background-color: blue;
    }

    ${AnImage}: nth-child(1) {
        top: 50px;
        left: 120px;
    }
    ${AnImage}: nth-child(2) {
        top: 150px;
        left: 120px;
    }
    ${AnImage}: nth-child(3) {
        top: 20px;
        right:50px;
    }
    ${AnImage}: nth-child(4) {
        top: 90px;
        left: 190px;
    }
    ${AnImage}: nth-child(5) {
        top: 200px;
        right: 80px;
    }
    ${AnImage}: nth-child(6) {
        top: 150px;
        right: 5px;
    }
    ${AnImage}: nth-child(7) {
        top: 210px;
        right: -80px;
    }
`
export const LeftColumn = styled.div`
    text-align: center;
    color: white;

    h1 {
        font-size: 3rem;
    }
`
