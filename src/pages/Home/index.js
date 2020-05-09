import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';

import { Actions as BoardActions } from '../../store/ducks/board';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './style.css';

class Home extends Component {
    state = {
        minutes: 5,
        seconds: 0,
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


    render() {
        const { minutes, seconds } = this.state;
        const {movimentos} = this.props.board

        return (
            <div className="home-container">
                {minutes === 0 && seconds === 0 ?
                    <></>
                    :
                    <>
                        <Header
                            minutes={minutes}
                            seconds={seconds}
                            movimentos={movimentos}
                        />
                        <Board movimentos={movimentos} />
                    </>
                }
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