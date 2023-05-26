import {Button, Col, Container, Form, Row, Table} from "react-bootstrap";
import {useState} from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const Report = ({name}) => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    return (
        <Container fluid>
            <h3 style={{display:"flex", justifyContent:"center"}}>Report {name}</h3>
            <Row>
                <Form style={{display:"flex", marginTop: 50}}>
                    <Col>
                        <Form.Label>Start Date</Form.Label>
                        <DatePicker
                            showIcon
                            dateFormat="dd-MM-yyyy"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                    </Col>
                    <Col>
                        <Form.Label>End Date</Form.Label>
                        <DatePicker
                            showIcon
                            dateFormat="dd-MM-yyyy"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                        />
                    </Col>
                    <Col>
                        <Button style={{marginTop:30}}>Search</Button>
                    </Col>
                </Form>
            </Row>
            <Row>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Name Product</th>
                            <th>Unit</th>
                            <th>Quantity</th>
                            <th>Supplier</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>25 Mei 2023</td>
                            <td>Mie Sukses Kari Ayam</td>
                            <td>Box</td>
                            <td>10</td>
                            <td>Nara</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>25 Mei 2023</td>
                            <td>Mie Sukses Soto</td>
                            <td>Box</td>
                            <td>8</td>
                            <td>Nara</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}

export default Report
