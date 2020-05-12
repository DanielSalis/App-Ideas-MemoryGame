import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import {Container, SumaryContainer} from './style';

class Parabens extends Component{
    render(){
        return(
            <Container>
                <SumaryContainer>
                    <h2>Parabéns !!!</h2>
                    <h3>Você concluiu em: {this.props.movimentos} movimentos</h3>
                </SumaryContainer>
                <ReactPlayer style={{display:'none'}} volume={0.3} url='https://youtu.be/cR2XilcGYOo?t=26' playing forceAudio/>
            </Container>
        );
    }
}

export default Parabens;