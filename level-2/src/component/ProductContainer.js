import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import axios from 'axios';
import { Row, Container } from 'react-bootstrap';

class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            products: []
        }

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    componentDidMount() {
        axios.get(`https://5d6973ee8134fd001430c6b7.mockapi.io/api/test1/test`)
            .then(res => {
                const name = res.data;
                console.log(name);
                this.setState({
                    products: name
                });
            })
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }


    render() {
        return (
            <Container>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                />
                <Row>
                    <ProductTable
                        products={this.state.products}
                        filterText={this.state.filterText}
                    />
                </Row>
            </Container>
        );
    }
}
export default ProductContainer;
