import {Button, Col, Container, Form, Row, Table} from "react-bootstrap";

const TransactionSell = () => {
    let dateTimeCurrent = Date.now();
    let d = new Date(dateTimeCurrent).toDateString()

    return (
        <Container fluid>
            <h3 style={{textAlign:"center"}}>Transaction Sell</h3>

            <Form>
                <Row>
                    <Col>
                        <Form.Label>No. Transaction</Form.Label>
                        <Form.Control value="TRX/0001" disabled />
                        <Form.Label>Name Product</Form.Label>
                        <Form.Control placeholder="Search Name Product" />

                    </Col>
                    <Col>
                        <Form.Label>Date</Form.Label>
                        <Form.Control value={d} disabled />
                        <Form.Label>Name Supplier</Form.Label>
                        <Form.Control placeholder="Search Name Supplier" />
                    </Col>
                    <Col>
                        <Form.Label>Name :</Form.Label>{' '}
                        <Form.Text>Nara</Form.Text> <br />
                        <Form.Label>Address :</Form.Label>{' '}
                        <Form.Text>Jl. Senang-senang aja no 1</Form.Text> <br/>
                        <Form.Label>Phone :</Form.Label>{' '}
                        <Form.Text>0829383939382</Form.Text>
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
                            <th>Subtotal</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mie Sukses Kari Ayam</td>
                            <td>84000</td>
                            <td>Box</td>
                            <td>8</td>
                            <td>{84000*8}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Mie Sukses Soto</td>
                            <td>84000</td>
                            <td>Box</td>
                            <td>5</td>
                            <td>{84000*5}</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colSpan={4} style={{textAlign:"center", fontWeight:"bold"}}>Total</td>
                            <td style={{fontWeight:"bold"}}>{8+5}</td>
                            <td style={{fontWeight:"bold"}}>{672000+420000}</td>
                        </tr>
                        </tfoot>
                    </Table>
                </Row>
                <Row>
                    <div>
                        <Button variant="danger" size="sm-2">Cancel</Button>{' '}
                        <Button variant="primary" size="sm-2">Submit</Button>
                    </div>
                </Row>
            </Form>
        </Container>
    )
}

export default TransactionSell
