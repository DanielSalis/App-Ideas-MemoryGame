import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import Header from './Header';
import Board from './Board';
import TempoEsgotado from './Tempo';
import Parabens from './Parabens';

import { Actions as BoardActions } from '../../store/ducks/board';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './style.css';

class Home extends Component {
    state = {
        minutes: 1,
        seconds: 10,
    }

    componentDidMount() {
        this.generateInterval();
    }

    generateInterval = () => {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state;

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }

    generateGameControler = ()=>{
        const { minutes, seconds } = this.state;
        const {movimentos} = this.props.board

        if(this.props.board.foundedPairs){
            return(
                <>
                <Parabens movimentos={movimentos}/>
                <ReactPlayer url='https://youtu.be/cR2XilcGYOo?t=24' playing forceAudio/>
                </>
            );
        }

        if(minutes === 0 && seconds === 0){
           return(
                <TempoEsgotado />
           );
        }

        return(
            <>
                <Header
                    minutes={minutes}
                    seconds={seconds}
                    movimentos={movimentos}
                />
                <Board movimentos={movimentos} />
            </>
        );
    }

    render() {


        return (
            <div className="home-container">
                {this.generateGameControler()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    board: state.board
});

const mapDispatchToProps = dispatch => ({
    BoardActions: bindActionCreators(BoardActions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);