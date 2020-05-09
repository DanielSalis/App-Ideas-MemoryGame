import React, { Component } from 'react';
import { FiCornerUpLeft } from 'react-icons/fi';

class Header extends Component {

    render() {
        let { minutes, seconds, movimentos } = this.props;

        return (
            <>
                <p>Jogo da Memória</p>
                <div className="home-header-info">
                    {minutes === 0 && seconds === 0
                        ? <label>Tempo!</label>
                        : <label>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</label>
                    }
                    <label>Movimentos {movimentos}</label>
                    <label><FiCornerUpLeft /></label>
                </div>
            </>
        )
    }
}

export default Header;