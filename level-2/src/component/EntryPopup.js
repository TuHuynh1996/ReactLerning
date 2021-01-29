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
    }

    handleClose() {
        this.props.onPopupClose();
    }

    // componentDidMount(){
    //     this.setState((state,props) => ({
    //         product: this.getProduct(props)
    //     }));
    // }

    getProduct() {
        let product = {
            id: "",
            name: ""
        };

        if (this.props.product != null) {
            return this.props.product;
        }
        return product;
    }

    render() {
        const formControll = this.props.product != null ?
            <Form.Row controlId="formHorizontalEmail">
                <Col sm={2}>
                    <Form.Control value={this.props.product.id} disabled />
                </Col>
                <Col sm={10}>
                    <Form.Control value={this.props.product.name} type="text" placeholder="Name" />
                </Col>
            </Form.Row> :
            <Form.Row controlId="formHorizontalEmail">
                <Col sm={2}>
                    <Form.Control value="#" disabled />
                </Col>
                <Col sm={10}>
                    <Form.Control value="" type="text" placeholder="Name" />
                </Col>
            </Form.Row>;


        return (
            <Modal show={this.props.isShow} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
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
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
              </Button>
                </Modal.Footer>
            </Modal>)
    }
}
export default EntryPopup;