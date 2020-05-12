import styled from 'styled-components';
import media from "../../media";

export const HomeBoard = styled.div`
    border-radius: 3%;
    background: linear-gradient(-45deg,#23ACD5,rgb(16, 251, 173),#23ACD5, rgb(16, 251, 173));
    background-size: 770% 880%;
    margin: 5px;
    width: 50rem;
    height: 50rem;
    animation: change 60s ease-in-out infinite;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;

    ${media.mobile` width: 20rem;`};
    ${media.mobile` max-height: 33rem;`}

`;


export const MainTitle = styled.div`
    width: 100%;
    font-family: 'Bungee Shade', cursive;
    font-size: 3rem;
    background: linear-gradient(-45deg,#23ACD5,rgb(16, 251, 173),#23ACD5, rgb(16, 251, 173));
    background-size: 770% 880%;
    animation: change 1s ease-in-out infinite;
    margin-bottom: 5px;
    text-align: center;
    margin-bottom: 5px;
    text-align: center;

    ${media.mobile` font-size: 1.2rem;`};
`;