import styled, {keyframes} from 'styled-components';
import media from "../../../media";
import { flipInY } from 'react-animations';

const animation = keyframes`${flipInY}`;

export const SquareContainer = styled.div`
    margin: 20px 20px;
    width: 150px;
    height: 150px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    ${media.mobile`
        width:55px; 
        height:55px;
    `}
    
`;

export const EmptyComponent = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 8px;
    background-color: #2e3d49;
    
    ${media.mobile`
        width:55px; 
        height:55px;
    `}
`;

export const HidenComponent = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    animation: 0.6s ${props=> !props.foundPair? animation: ''};
    

    ${media.mobile`
        width:55px; 
        height:55px;
    `}
`;