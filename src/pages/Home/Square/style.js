import styled from 'styled-components';
import media from "../../../media";

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

    ${media.mobile`
        width:55px; 
        height:55px;
    `}
`;