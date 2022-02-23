import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import styled from "styled-components";

export const SliderSection = styled.section`
    background: #0c0c0c;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Img = styled.img`
    width: 1000px;
    height: 600px;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        width: 500px;
        height: 300px;
    }
`
export const ArrowCircleRight = styled(FaArrowCircleRight)`
    position: absolute;
    top: 50%;
    right: -35px;
    font-size: 3rem;
    color: #fff;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 768px) {
        right: 10px;
    }
    `
export const ArrowCircleLeft = styled(FaArrowCircleLeft)`
    position: absolute;
    top: 50%;
    left: -35px;
    font-size: 3rem;
    color: #fff;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    @media screen and (max-width: 768px) {
        left: 10px;
    }
`