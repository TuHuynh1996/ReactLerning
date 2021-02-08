import { Component } from 'react';
import { Table, Row } from 'react-bootstrap';
import ProductRow from './ProductRow'

class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
        this.onEditButtonClick = this.onEditButtonClick.bind(this);
    }

    onDeleteButtonClick(products) {
        this.props.onDeleteButtonClick(products);
    }
    onEditButtonClick(products){
        this.props.onEditButtonClick(products);
    }

    render() {
        const rows = [];
        this.props.products.forEach((product, index) => {
            if (product.name.includes(this.props.filterText)){
                rows.push(<ProductRow key={index}
                    onDeleteButtonClick={(products) =>  this.props.onDeleteButtonClick(products)}
                    onEditButtonClick={this.onEditButtonClick}
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
                            <th>Date Update</th>
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