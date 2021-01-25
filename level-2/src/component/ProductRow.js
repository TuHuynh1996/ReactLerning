import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ProductRow extends Component {
    render() {
        const product = this.props.product;
        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.createdAt}</td>
                <td><Button variant="info">Edit</Button> </td>
                <td><Button variant="danger">Delete</Button> </td>
            </tr>
        );
    }
}
export default ProductRow;