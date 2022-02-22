import styled from "styled-components";
import {Link} from 'react-scroll'
import { ButtonElement } from "../../Types";

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