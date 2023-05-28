import {Button, Col, Container, Form, Row, Table} from "react-bootstrap";
import Select from 'react-select';
import {useEffect, useState} from "react";
import api from "../../interceptors/axios";

const TransactionBuy = () => {
    let dateTimeCurrent = Date.now();
    let d = new Date(dateTimeCurrent).toDateString()

    const [products, setProducts] = useState([]);
    const optProducts = []

    const [suppliers, setSuppliers] = useState([]);
    const optSuppliers = []

    const [selectedProduct, setSelectedProduct] = useState('')
    const [selectedSupplier, setSelectedSupplier] = useState('')
    const handleChangeProduct = (event) => setSelectedProduct(event.name)
    const handleChangeSupplier = (event) => setSelectedSupplier(event.name)
    const getAllProduct = async () => {
        await api.get('product')
            .then((response) => {
                setProducts([...response.data.data])
            }).catch((error) => {
                console.log(error)
            })
    }

    const getAllSupplier = async () => {
        await api.get('supplier')
            .then((response) => {
                setSuppliers([...response.data.data])
            }).catch((error) => {
                console.log(error)
            })
    }

    products.map((p) => {
        optProducts.push({value: p.id, label: p.nameProduct})
        // return setProducts(optProducts)
    })
    suppliers.map((p) => {
        optSuppliers.push({value: p.id, label: p.nameSupplier})
        // return setSuppliers(optSuppliers)
    })
    console.log("products : ",optProducts)
    console.log("suppliers : ",optSuppliers)

    useEffect(() => {
        getAllProduct();
        getAllSupplier();
    },[])

    return (
        <Container fluid>
            <h3 style={{textAlign:"center"}}>Transaction Buy</h3>
            <Form>
                <Row>
                    <Col>
                        <Form.Label>Name Product</Form.Label>
                        <div>
                            <Select
                                options={optProducts}
                                value={selectedProduct}
                                onChange={handleChangeProduct}
                                onKeyUp={(event) => {
                                    const filteredOptions = products.filter((option) => {
                                        return option.name.toLowerCase().includes(event.target.value.toLowerCase());
                                    });
                                    setSelectedProduct(filteredOptions[0] || '');
                                }}
                            />
                        </div>
                        <Form.Label>Name Supplier</Form.Label>
                        <div>
                            <Select
                                options={optSuppliers}
                                value={selectedSupplier}
                                onChange={handleChangeSupplier}
                                onKeyUp={(event) => {
                                    const filteredOption = suppliers.filter((option) => {
                                        return option.name.toLowerCase().includes(event.target.value.toLowerCase());
                                    });

                                    setSelectedSupplier(filteredOption[0] || '');
                                }}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Form.Label>Name :</Form.Label>{' '}
                            <Form.Text>Nara</Form.Text> <br />
                            <Form.Label>Address :</Form.Label>{' '}
                            <Form.Text>Jl. Senang-senang aja no 1</Form.Text> <br/>
                            <Form.Label>Phone :</Form.Label>{' '}
                            <Form.Text>0829383939382</Form.Text>
                        </div>
                        <Button variant="primary" size="sm" style={{marginTop:8}}>add</Button>


                    </Col>
                    <Col>
                        <Form.Label>Date</Form.Label>
                        <Form.Control value={d} disabled />

                    </Col>
                </Row>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Name Product</th>
                            <th>Price (Rp)</th>
                            <th>Unit</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mie Sukses Kari Ayam</td>
                            <td>84000</td>
                            <td>Box</td>
                            <td>8</td>
                            <td>
                                <Button variant="danger" size="sm">remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Mie Sukses Soto</td>
                            <td>84000</td>
                            <td>Box</td>
                            <td>5</td>
                            <td>
                                <Button variant="danger" size="sm">remove</Button>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Row>
            </Form>
        </Container>
    )
}

export default TransactionBuy
