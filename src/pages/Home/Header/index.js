import React, { Component } from 'react';
import {MainTitle} from '../style';
import { FiRotateCw } from 'react-icons/fi';
import {bindActionCreators} from 'redux';
import {Actions as BoardActions} from '../../../store/ducks/board';
import {connect} from 'react-redux';

class Header extends Component {

    render() {
        let { minutes, seconds, movimentos } = this.props;

        return (
            <>
                <MainTitle>Jogo de Memória</MainTitle>
                <div className="home-header-info">
                    {minutes === 0 && seconds === 0
                        ? <label>00:00</label>
                        : <label>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</label>
                    }
                    <label>Movimentos {movimentos}</label>
                    <label title="Reiniciar" ><FiRotateCw onClick={()=>{window.location.reload()}}/></label>
                </div>
            </>
        )
    }
}


const mapDispatchToProps = dispatch =>({
    BoardActions: bindActionCreators(BoardActions, dispatch)
})

export default connect(null, mapDispatchToProps)(Header);