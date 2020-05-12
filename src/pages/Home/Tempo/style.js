import styled, {keyframes} from 'styled-components';
import { tada } from 'react-animations';

const tadaAnimation = keyframes`${tada}`;

export const Container= styled.div`
    width:100%;
    height:100%;
    background-color:rgba(255,255,255,0.7);
    position:absolute;
    top:0;
    right:0;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const WarningContainer = styled.div`
    font-family: 'Bungee Shade', cursive;
    color: #fff;
    width:100%;
    min-height: 200px;
    background-color:#363636;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    animation: 1s ${tadaAnimation};

    h2{
        font-family: 'Bungee Shade', cursive;
        margin:20px 0px;
    }
`;