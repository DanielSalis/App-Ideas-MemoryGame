import React, {Component} from 'react';

import './style.css';

class Home extends Component{
    render(){
        return(
            <div className="home-container">
                <p>Jogo da Memória</p>
                <div className="home-header-info">
                    <label>01:25</label>
                    <label>Movimentos 0</label>
                    <label>{'<='}</label>
                </div>
                <div className="home-board">

                </div>
            </div>
        );
    }
}

export default Home;