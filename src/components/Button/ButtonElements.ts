import styled from "styled-components";
import {Link} from 'react-scroll'
import { ButtonElement } from "../../Types";
import { 
    MdArrowUpward, 
    MdKeyboardArrowUp,
    MdArrowForward,
    MdKeyboardArrowRight,
    MdArrowDownward, 
    MdKeyboardArrowDown, 
} from "react-icons/md";

export const Button = styled(Link)<ButtonElement>`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#b22222' : '#dcdcdc')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px' )};
    color: ${({dark}) => (dark ? '#fff' : '#000')};
    font-size: ${({bigFont}) => (bigFont ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover{
        transition: all 0.3s ease-in-out;
        background: ${({primary}) => (primary ?  '#dcdcdc' : '#b22222')};
        color: ${({dark}) => (dark ? '#000' : '#fff')};
    }
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
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`