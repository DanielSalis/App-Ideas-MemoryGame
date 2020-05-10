import React, { Component } from 'react';
import Square from '../Square';

import {bindActionCreators} from 'redux';
import {Actions as BoardActions} from '../../../store/ducks/board';
import {connect} from 'react-redux';

import {HomeBoard} from '../style';

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

let icons = [
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
    },
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
        squares: [],
        blocked:false
    }

    handleClick = async (element, e) => {
        if(!this.state.shown){
            this.setState({ shown: true });
            this.props.BoardActions.increaseMoviments();
            this.props.board.squares[this.state.position].props.shown = true;
        }

        if(this.props.board.movimentos % 2 === 0){
            //COMPARAR PARES

        }
        
        const elementProps = this.state;
        await this.props.BoardActions.setLastItemSelected(elementProps);
        console.log(this.props.board.squares[this.state.position])
    }

    componentDidMount = async () => {
        this.generateSquares(false ,true);
    }

    generateSquares = async (clear, shuffle) => {
        if(clear){
            await this.setState({squares:[]});
        }

        if(shuffle){
            await this.shuffle(icons);
        }

        let i = 0;
        const boardLength = 16;
        let listItems = [];

        for (i=0; i < boardLength; i++) {
            let position = i;
            icons[position].position = position;
            listItems.push(
                    <Square
                        key={i} 
                        click={(e) => this.handleClick(position, e)}
                        position={i}
                        id={icons[i].id}
                        shown={icons[i].shown}
                        foundPair={icons[i].foundPair}
                        component={icons[i].component}
                    />
            );
        }



        this.setState({squares:listItems});
    }

    shuffle=(array)=> {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i)); // random index from 0 to i
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

    
    handleClick = async (position, e) => {
        if(icons[position].foundPair){
            return;
        }

        if(!icons[position].shown){
            icons[position].shown = true;
            await this.props.BoardActions.increaseMoviments();
        }

        
        if(this.props.board.movimentos > 1 &&  this.props.board.movimentos % 2 === 0){
                //COMPARAR PARES
                if(icons[position].id === this.props.board.lastItemSelected.id){
                    icons[position].foundPair = true;
                    icons[this.props.board.lastItemSelected.position].foundPair = true;
                    
                    icons[position].shown = true;
                    icons[this.props.board.lastItemSelected.position].shown = true;
                }else{
                    await this.generateSquares(true);
                    icons[position].shown = false;
                    icons[this.props.board.lastItemSelected.position].shown = false;
                    await this.setState({blocked:true});

                    setTimeout(async()=>{
                        await this.props.BoardActions.setLastItemSelected(icons[position]);
                        await this.generateSquares(true,false);
                        await this.setState({blocked:false});
                    },550);

                    return;
                }
        }
            

        await this.props.BoardActions.setLastItemSelected(icons[position]);
        await this.generateSquares(true,false);

        console.log(position,icons[position]);
    }
    
    render() {
        
        return (
            <HomeBoard>
                {this.state.blocked? <div style={{width:'100%',height:'100%',position:'absolute', zIndex:'9', backgroundColor:'transparent'}}></div>:<></>}
                {this.state.squares ? this.state.squares : <></>}
            </HomeBoard>
        );
    }
}

const mapStateToProps = state =>({
    board:state.board
});

const mapDispatchToProps = dispatch =>({
    BoardActions: bindActionCreators(BoardActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);