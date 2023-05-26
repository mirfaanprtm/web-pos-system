import {Button, Collapse, Container, Form, Row, Table, Modal} from "react-bootstrap";
import {useState} from "react";

const Category = () => {
    const [openAdd, setOpenAdd] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)

    const handleCloseEdit = () => {
        setOpenEdit(false)
    }
    const handleOpenEdit = () => {
        setOpenEdit(true)
        setOpenAdd(false)
    }

    return (
        <Container fluid>
            <h3 style={{textAlign:"center"}}>Page Management Category</h3>
            <Row>
                <Button
                    onClick={() => setOpenAdd(!openAdd)}
                >
                    ADD
                </Button>
                <Collapse in={openAdd}>
                    <Form>
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Category" />
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
                        <th>Category</th>
                        <th>Option</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr> 
                        <td>Mie Instant</td>
                        <td>
                            <Button variant="warning" style={{marginRight: 5}} onClick={handleOpenEdit}>Edit</Button>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Row>

            <Modal show={openEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control type="text" placeholder="Category Name" />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}
export default Category