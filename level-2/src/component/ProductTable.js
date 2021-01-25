import { Component } from 'react';
import { Table, Row } from 'react-bootstrap';
import ProductRow from './ProductRow'

class ProductTable extends Component {
    render() {
        const rows = this.props.products.map((product, index) => <ProductRow key={index} product={product} />);
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