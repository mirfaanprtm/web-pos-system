import {Button, Col, Container, Form, Row, Table} from "react-bootstrap";

const TransactionBuy = () => {
    let dateTimeCurrent = Date.now();
    let d = new Date(dateTimeCurrent).toDateString()

    return (
        <Container fluid>
            <h3 style={{textAlign:"center"}}>Transaction Buy</h3>
            <Form>
                <Row>
                    <Col>
                        <Form.Label>Name Product</Form.Label>
                        <Form.Control placeholder="Search Name Product" />
                        <Form.Label>Name Supplier</Form.Label>
                        <Form.Control placeholder="Search Name Supplier" />
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
