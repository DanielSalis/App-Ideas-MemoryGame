import React, { Component } from 'react';
import { SquareContainer, EmptyComponent, HidenComponent } from './style';

class Square extends Component {

    state = {
        id: this.props.id,
        shown: this.props.shown,
        component: this.props.component
    }

    handleClick = (element, e) => {
        console.log(element);
        console.log(e);
        this.setState({ shown: !this.state.shown });
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

export default Square