import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';

import './style.css';

class Home extends Component {
    state = {
        minutes: 5,
        seconds: 0,
        movimentos: 0,
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
        const { minutes, seconds, movimentos } = this.state;

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

export default Home;