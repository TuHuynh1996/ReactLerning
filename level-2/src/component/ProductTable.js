import { Component } from 'react';
import { Table, Row } from 'react-bootstrap';
import ProductRow from './ProductRow'

class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    }

    onDeleteButtonClick(products) {
        this.props.onDeleteButtonClick(products);
    }

    render() {
        const rows = [];
        this.props.products.forEach((product, index) => {
            if (product.name.includes(this.props.filterText)){
                rows.push(<ProductRow key={index}
                    onDeleteButtonClick={this.onDeleteButtonClick}
                    product={product} />);
            }
        });
        return (
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </Row>
        );
    }
}
export default ProductTable;