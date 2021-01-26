import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ProductRow extends Component {
    constructor(props) {
        super(props);
        this.deleteHandleClick = this.deleteHandleClick.bind(this);
    }

    deleteHandleClick(e) {
        this.props.onDeleteButtonClick(this.props.product);
        e.preventDefault();
    }

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    render() {
        const product = this.props.product;
        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{this.formatDate(product.createdAt)}</td>
                <td><Button variant="info">Edit</Button> </td>
                <td><Button variant="danger" onClick={this.deleteHandleClick} >Delete</Button> </td>
            </tr>
        );
    }
}
export default ProductRow;