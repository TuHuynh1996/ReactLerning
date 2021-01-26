import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import axios from 'axios';
import {  Container } from 'react-bootstrap';

class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            products: []
        }

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    }

    componentDidMount() {
        axios.get(`https://5d6973ee8134fd001430c6b7.mockapi.io/api/test1/test`)
            .then(res => {
                const name = res.data;
                this.setState(() => ({
                    products: name
                }));
            })
    }

    handleFilterTextChange(filterText) {
        this.setState(() => ({
            filterText: filterText
        }));
    }

    onDeleteButtonClick(deleteProduct) {
        axios.delete(`https://5d6973ee8134fd001430c6b7.mockapi.io/api/test1/test/${deleteProduct.id}`, {
            data: {
                source: deleteProduct
            }
        }).then(res => {
            if (res.statusText === "OK") {
                this.setState((state) => ({
                    products: state.products.filter((item) => item.id !== res.data.id)
                }));
            }
        })
    }

    render() {
        return (
            <Container>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                />
                <ProductTable
                    onDeleteButtonClick={this.onDeleteButtonClick}
                    products={this.state.products}
                    filterText={this.state.filterText}
                />

            </Container>
        );
    }
}
export default ProductContainer;
