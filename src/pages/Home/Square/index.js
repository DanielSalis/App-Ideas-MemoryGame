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
        position:this.props.position,
        foundPair:this.props.foundPair
    }
    
    render() {
        return (
            <SquareContainer onClick={this.props.click} identification={this.state.id}>
                {!this.state.shown ?
                    <EmptyComponent />
                    :
                    <HidenComponent foundPair={this.state.foundPair}>
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