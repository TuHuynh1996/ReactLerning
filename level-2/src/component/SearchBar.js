import React, { Component } from 'react';
import { Form } from 'react-bootstrap'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    render() {
        return (

            <Form>
                <Form.Group>
                    <Form.Control
                        value={this.props.filterText}
                        onChange={this.handleFilterTextChange} type="text" placeholder="Search..." />
                </Form.Group>
            </Form >

        );
    }
}
export default SearchBar;