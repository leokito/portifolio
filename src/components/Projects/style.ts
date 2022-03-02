import styled from "styled-components";
import { MdArrowDownward, 
    MdArrowUpward, 
    MdKeyboardArrowDown, 
    MdKeyboardArrowUp } from "react-icons/md";
import { iProjectCard } from "../../Types";
import { MdClose } from "react-icons/md";

export const ProjectContainer = styled.div`
    height: 872px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #0c0c0c;
`
export const ProjectTitle = styled.h1`
    text-align: center;
    font-size: 2.8rem;
    color: #b22222;
    margin-bottom: 64px;

    @media screen and (max-width: 400px) {
        font-size: 2rem;
    }
`
export const ProjectWrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const ProjectCard = styled.div<iProjectCard>`
    color: transparent;
    background-image: url(${({img})=> img});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 200px;
    width: 300px;
    padding: 30px;
    box-shadow: rgba(50, 50, 93, 0.5) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.7) 0px 18px 36px -18px inset;
    transition: all 0.2s ease-in-out;

    h2 {
        display: none;
    }

    p {
        display: none;
    }

    &:hover {
        background: #dedede;
        color: #000;
        transform: scale(1.02);
        transition: all 1s ease-in-out;
        cursor: pointer;
    }

    &:hover p {
        display: block;
        color: #000;
        transition: all 1s ease-in-out;
    }

    &:hover h2 {
        display: block;
        color: #000;
    }

`
export const ProjectName = styled.h2`
    color: #000;
`
export const ProjectDesc = styled.p`
    /* color: #000; */
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
export const ArrowDown = styled(MdArrowDownward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowKeyboardDown = styled(MdKeyboardArrowDown)`
    margin-left: 8px;
    font-size: 20px;
`
export const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.8);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    /* z-index: 100; */
`;
export const ModalTitle = styled.h1`
    font-size: 2rem;
    text-align: center;
`;
export const ModalContentWrap = styled.div`
    height: 65%;
    margin: 35px 0 35px 0;
    width: 90%;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;
    position: relative;
`;
export const ModalWrap = styled.div`
    width: 1200px;
    height: 680px;
    box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
    background: #dedede;
    color: #060606;
    position: absolute;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    border-radius: 10px;
    transition: all 2s;
`;
export const ModalImg = styled.img`
    width: 100%;
    height: 90%;
    border-radius: 15px;;
    background: #000;
`;
export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
`;
export const ModalProjectDesc = styled.div`
    display: flex;
`
export const ModalTech = styled.p`
    font-size: 16px;
    font-weight: bold;
`
export const TechCardWrap = styled.div`
    display: flex;
`
export const TechCard = styled.div`
    border-radius: 5px;
    margin: 5px;
    background: #dedede;
    padding: 8px 15px 8px 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 0.4s all ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: 0.4s all ease-in-out;
    }
`
export const ModalDesc = styled.p`
    margin-bottom: 1rem;
    text-align: center;
`
export const ModalBtnWrap = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-around;
`
export const ModalBtn = styled.a`
        border-radius: 50px;
        padding: 14px 32px;
        background: #141414;
        color: #fff;
        border: none;
        transition: 0.4s all ease-in-out;
        text-decoration: none;

        &:hover {
            color: #000;
            background: #dedede;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            transition: 0.4s all ease-in-out;
            cursor: pointer;
        }
`
export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 25;
`