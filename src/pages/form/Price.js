import {Button, Collapse, Container, Form, Row, Table} from "react-bootstrap";
import {useState} from "react";

const Price = () => {
    const [openAdd, setOpenAdd] = useState(false)

    return (
        <Container fluid>
            <h3 style={{textAlign:"center"}}>Management Price</h3>
            <Row>
                <Button
                    onClick={() => setOpenAdd(!openAdd)}
                >
                    ADD
                </Button>
                <Collapse in={openAdd}>
                    <Form>
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name" />
                        <Form.Label>Unit</Form.Label>
                        <Form.Control type="text" placeholder="Enter Unit" />
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter Price" />
                    
                        <Button variant="primary" type="submit" style={{margin:"10px 0"}}>
                            Submit
                        </Button>
                    </Form>
                </Collapse>
            </Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Unit</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Option</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        
                        <td>Indomie</td>
                        <td>1</td>
                        <td>30000</td>
                        <td>4</td>
                        <td>
                            
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Row>

          
        </Container>
    )
}
export default Price