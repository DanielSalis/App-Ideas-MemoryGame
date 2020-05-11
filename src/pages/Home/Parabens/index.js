import React, { Component } from 'react';
import {Container, SumaryContainer} from './style';



class Parabens extends Component{
    render(){
        return(
            <Container>
                <SumaryContainer>
                    <h2>Parabéns !!!</h2>
                    <h3>Você concluiu em: {this.props.movimentos} movimentos</h3>
                </SumaryContainer>
            </Container>
        );
    }
}

export default Parabens;