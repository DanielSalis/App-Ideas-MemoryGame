import React, { Component } from 'react';
import { SquareContainer, EmptyComponent, HidenComponent } from './style';
import { Actions as BoardActions } from '../../../store/ducks/board';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Square extends Component {

    state = {
        id: this.props.id,
        shown: this.props.shown,
        component: this.props.component,
        position:this.props.position
    }

    handleClick = (element, e) => {
        if(!this.state.shown){
            this.setState({ shown: true });
            this.props.BoardActions.increaseMoviments();
        }
        
        const elementProps = this.state;
        this.props.BoardActions.setLastItemSelected(elementProps);
    }

    render() {
        return (
            <SquareContainer onClick={(e) => this.handleClick(this, e)} identification={this.state.id}>
                {!this.state.shown ?
                    <EmptyComponent />
                    :
                    <HidenComponent>
                        {this.state.component}
                    </HidenComponent>
                }
            </SquareContainer>
        );
    }
}

const mapStateToProps = state => ({
    board: state.board
});

const mapDispatchToProps = dispatch => ({
    BoardActions: bindActionCreators(BoardActions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Square);