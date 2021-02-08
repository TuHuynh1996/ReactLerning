import { Alert } from 'react-bootstrap';
import React, { Component } from 'react';

class FlashMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            variant: ""
        }
    }

    componentDidUpdate() {
        console.log('bbbbb');
        if (this.props.variant !== "") {
            if(this.state.show === false){
                this.setState(() => ({
                    show: true,
                    variant: this.props.variant
                }));
            }
            setTimeout(() => {
                console.log('aaa');
                console.log(this.state.show);
                if(this.state.show === true){
                    this.setState(() => ({
                        show: false
                    }));
                }
            },
                this.props.duration
            );
        }

    }
    render() {
        return (
            this.state.show ?
                <Alert variant={this.state.variant}>
                    {this.props.children}
                </Alert> : ""
        );
    }
}
export default FlashMessage;