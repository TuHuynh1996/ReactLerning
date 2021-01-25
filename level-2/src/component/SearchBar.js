import React, { Component } from 'react';
import { Form, Row } from 'react-bootstrap'

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
            <Row>
                <Form>
                    <Form.Group>
                        <Form.Control
                            value={this.props.filterText}
                            onChange={this.handleFilterTextChange} type="text" placeholder="Search..." />
                    </Form.Group>
                </Form >
            </Row>
        );
    }
}
export default SearchBar;