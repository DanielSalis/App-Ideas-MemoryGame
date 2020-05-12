import styled, {keyframes} from 'styled-components';
import media from '../../../media';
import { tada } from 'react-animations';

const tadaAnimation = keyframes`${tada}`;

export const Container= styled.div`
    width:100%;
    height:100%;
    background: linear-gradient(-45deg,#23ACD5,rgb(16, 251, 173),#23ACD5, rgb(16, 251, 173));
    background-size: 770% 880%;
    animation: change 1s ease-in-out infinite;
    position:absolute;
    top:0;
    right:0;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow-x:hidden;
`;

export const SumaryContainer = styled.div`
    width:100%;
    min-height: 200px;
    background-color:transparent;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    animation: ${tadaAnimation};
    color: #FFF;


    h2{
        font-family: 'Bungee Shade', cursive;
        font-size:5.5rem;
        margin:20px 0px;
        ${media.mobile` font-size: 2.2rem;`};

    }
`;