import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import EntryPopup from './EntryPopup';
import FlashMessage from './FlashMessage';
import axios from 'axios';
import { Container, Col, Row, Button } from 'react-bootstrap';

class ProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            products: [],
            isShowPopup: false,
            productForcus: null,
            messageDuration: 7000,
            message: "",
            messageVariant: ""
        }

        this.onPopupClose = this.onPopupClose.bind(this);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
        this.onEditButtonClick = this.onEditButtonClick.bind(this);
        this.onNameTextChange = this.onNameTextChange.bind(this);
        this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
        this.handelCreateClick = this.handelCreateClick.bind(this);
    }

    componentDidMount() {
        axios.get(`https://5d6973ee8134fd001430c6b7.mockapi.io/api/test1/test`)
            .then(res => {
                const data = res.data;
                this.setState(() => ({
                    products: data
                }));
            });
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
        });
    }

    onEditButtonClick(products) {
        this.setState(() => ({
            isShowPopup: true,
            productForcus: { ...products }
        }));
    }

    onPopupClose() {
        this.setState(() => ({
            isShowPopup: false,
            productForcus: null
        }));
    }
    onNameTextChange(product) {
        this.setState(() => ({
            productForcus: product
        }));
    }
    onSaveButtonClick(product) {
        if (product.id === 0) {
            axios.post(
                `https://5d6973ee8134fd001430c6b7.mockapi.io/api/test1/test/`, product
            ).then(res => {
                console.log(this.state.products);
                console.log(res.data);
                res.data.id = res.data.id.toString();
                console.log(res.data);
                if (res.statusText === "Created") {
                    this.setState((state) => ({
                        products: [...state.products, res.data],
                        message: "Create successful!",
                        messageVariant: "success"
                    }));
                } else {
                    this.setState(() => ({
                        message: "Error!",
                        messageVariant: "warning"
                    }));
                }
                console.log(this.state.products);
                this.onPopupClose();
            });
        } else {
            axios.put(
                `https://5d6973ee8134fd001430c6b7.mockapi.io/api/test1/test/${product.id}`, product
            ).then(res => {
                if (res.statusText === "OK") {
                    this.setState((state) => ({
                        products: this.getProductsEditData(state, res.data),
                        message: "Change successful!",
                        messageVariant: "success"
                    }));
                } else {
                    this.setState((state) => ({
                        message: "Error!",
                        messageVariant: "warning"
                    }));
                }
                this.onPopupClose();
            });
        }
    }

    getProductsEditData = (state, data) => {
        const productsData = [];
        state.products.forEach(element => {
            if (element.id === data.id) {
                productsData.push(data);
            } else {
                productsData.push(element);
            }
        });
        return productsData;
    }

    handelCreateClick() {
        this.setState(() => ({
            productForcus: {
                id: 0,
                name: ""
            },
            isShowPopup: true
        }));
    }
    setProductTable(){

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} >
                        <FlashMessage duration={this.state.messageDuration} variant={this.state.messageVariant}>
                            {this.state.message}
                        </FlashMessage>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} sm={6} md={3}>
                        <SearchBar
                            filterText={this.state.filterText}
                            onFilterTextChange={this.handleFilterTextChange}
                        />
                    </Col>
                    <Col xs={6} sm={6}>
                        <Button variant="primary" onClick={this.handelCreateClick}> Create New </Button>
                    </Col>
                </Row>
                <ProductTable
                    onDeleteButtonClick={this.onDeleteButtonClick}
                    onEditButtonClick={this.onEditButtonClick}
                    products={this.state.products}
                    filterText={this.state.filterText}
                />
                <EntryPopup isShow={this.state.isShowPopup}
                    onPopupClose={this.onPopupClose}
                    onNameTextChange={this.onNameTextChange}
                    product={this.state.productForcus}
                    onSaveButtonClick={this.onSaveButtonClick} />
            </Container>
        );
    }
}
export default ProductContainer;
