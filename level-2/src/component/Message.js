import React, { Component } from 'react';
import FlashMessage from 'react-flash-message'
class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    displayMessage = () => {
        var message = <FlashMessage duration={5000} >
            {this.props.children}
        </FlashMessage >
        return message;
    }


    render() {
        return (
            <div>
                {
                    this.props.show && this.displayMessage()
                }
            </div>
        );
    }
}
export default Message;