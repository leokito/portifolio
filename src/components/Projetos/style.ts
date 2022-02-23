import styled from "styled-components";
import { MdArrowUpward, MdKeyboardArrowUp } from "react-icons/md";
import bgImg from '../../assets/images/habit.png'

export const ProjectContainer = styled.div`
    height: 872px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #0c0c0c;
`
export const ProjectTitle = styled.h1`
    color: #fff;
    text-align: center;
`
export const ProjectWrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const ProjectCard = styled.div`
    background: #dcdcdc;
    /* background-image: url(${bgImg}); */
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 200px;
    width: 300px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const ProjectName = styled.h2`
    color: #000;
`
export const ProjectDesc = styled.p`
    color: #000;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`

export const BtnWrap = styled.div`
    text-align: center;
    margin-top: 50px;
`
export const ArrowTop = styled(MdArrowUpward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowKeyboardTop = styled(MdKeyboardArrowUp)`
    margin-left: 8px;
    font-size: 20px;
`