import { Modal, Button, Form, Col } from 'react-bootstrap';
import React, { Component } from 'react';

class EntryPopup extends Component {
    constructor(props) {
        super(props);
        // const [show, setShow] = useState(false);
        this.state = {
            product: null
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleNameTextChange = this.handleNameTextChange.bind(this);
        this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
    }

    handleClose() {
        this.props.onPopupClose();
    }
    handleNameTextChange(e) {
        const product = this.props.product.id === 0 ? {
            id: 0,
            name: e.target.value,
            createdAt: new Date(),
            avatar: ""
        } : this.props.product;
        product.name = e.target.value;
        product.createdAt = new Date();
        this.props.onNameTextChange(product);
    }
    handleSaveButtonClick(e) {
        this.props.onSaveButtonClick(this.props.product);
        e.preventDefault();
    }

    render() {
        const product = this.props.product;
        let formControll;
        let modalHeading;
        if (product !== null) {
            formControll = product.id !== 0 ?
                <Form.Row>
                    <Col xs={2}>
                        <Form.Control value={product.id} disabled />
                    </Col>
                    <Col xs={10}>
                        <Form.Control value={product.name} onChange={this.handleNameTextChange} type="text" placeholder="Name" />
                    </Col>
                </Form.Row> :
                <Form.Row >
                    <Col xs={2}>
                        <Form.Control value="#" disabled />
                    </Col>
                    <Col xs={10}>
                        <Form.Control value={product.name} type="text" onChange={this.handleNameTextChange} placeholder="Name" />
                    </Col>
                </Form.Row>;
            modalHeading = product.id !== 0 ? "Edit Form" : "Add Form";
        }

        return (
            <Modal show={this.props.isShow} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalHeading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {formControll}
                    </Form >
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleSaveButtonClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>)
    }
}
export default EntryPopup;