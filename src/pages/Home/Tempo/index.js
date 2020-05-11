import React, { Component } from 'react';
import {Container, WarningContainer} from './style';
import { FiRotateCw } from 'react-icons/fi';

class TempoEsgotado extends Component{

    render(){
        return(
            <Container>
                <WarningContainer>
                    <h2>Tempo Esgotado!!!</h2>
                    <FiRotateCw onClick={()=>{window.location.reload()}} title="Reiniciar" />
                </WarningContainer>
            </Container>
        );
    }
}

export default TempoEsgotado;