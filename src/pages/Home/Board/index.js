import React, { Component } from 'react';
import Square from '../Square';

import {
    FiBookOpen,
    FiAnchor,
    FiArchive,
    FiActivity,
    FiBox,
    FiCamera,
    FiCalendar,
    FiCoffee
} from 'react-icons/fi';

const icons = [
    {
        id: 0,
        shown: false,
        foundPair: false,
        component: <FiBookOpen color={'#2e3d49'} size={100} />
    },
    {
        id: 1,
        shown: false,
        foundPair: false,
        component: <FiAnchor color={'#2e3d49'} size={100} />
    },
    {
        id: 2,
        shown: false,
        foundPair: false,
        component: <FiArchive color={'#2e3d49'} size={100} />
    },
    {
        id: 3,
        shown: false,
        foundPair: false,
        component: <FiActivity color={'#2e3d49'} size={100} />
    },
    {
        id: 4,
        shown: false,
        foundPair: false,
        component: <FiBox color={'#2e3d49'} size={100} />
    },
    {
        id: 5,
        shown: false,
        foundPair: false,
        component: <FiCamera color={'#2e3d49'} size={100} />
    },
    {
        id: 6,
        shown: false,
        foundPair: false,
        component: <FiCalendar color={'#2e3d49'} size={100} />
    },
    {
        id: 7,
        shown: false,
        foundPair: false,
        component: <FiCoffee color={'#2e3d49'} size={100} />
    }
];

class Board extends Component {
    state = {
        squares: []
    }

    componentDidMount = async () => {
        await this.setState({ squares: this.generateSquares() });
    }

    generateSquares = () => {
        let i = 0;
        let j = 0;
        const boardLength = 16;
        let listItems = [];

        for (i; i < boardLength; i++) {
            if (i === boardLength / 2) {
                j = 0;
            }
            listItems.push(
                <Square
                    key={i}
                    position={i}
                    id={icons[j].id}
                    shown={icons[j].shown}
                    foundPair={icons[j].foundPair}
                    component={icons[j].component}
                />
            );
            j++;
        }

        return listItems;
    }
    
    render() {
        return (
            <div className="home-board">
                {this.state.squares ? this.state.squares : <></>}
            </div>
        );
    }
}

export default Board;