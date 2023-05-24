import {Button, Collapse, Container, Form, Row, Table, Modal, ToggleButton} from "react-bootstrap";
import {useState} from "react";

const User = () => {
    const [openAdd, setOpenAdd] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [checked, setChecked] = useState(false);

    const handleCloseEdit = () => {
        setOpenEdit(false)
        setChecked(false)
    }
    const handleOpenEdit = () => {
        setOpenEdit(true)
        setOpenAdd(false)
    }




    return (
        <Container fluid>
            <h3 style={{textAlign:"center"}}>Page Management User</h3>
            <Row>
                <Button
                    onClick={() => setOpenAdd(!openAdd)}
                >
                    ADD
                </Button>
                <Collapse in={openAdd}>
                    <Form>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" />
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="User Name" />
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone Number" />
                        <Form.Label>Role</Form.Label>
                        <Form.Select>
                            <option>Select role</option>
                            <option value="1">Manager</option>
                            <option value="2">Cashier</option>
                        </Form.Select>
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
                        <th>No</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Role</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Surya Prima Siregar</td>
                        <td>sirprima</td>
                        <td>08232323232</td>
                        <td>
                            <span style={{marginRight:10}}>Manager</span>
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
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" />
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone Number" />
                        <Form.Label>Is Active: </Form.Label>
                        <ToggleButton
                            className="ms-0"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-success"
                            checked={checked}
                            value="true"
                            onChange={(e) => setChecked(e.currentTarget.checked)}
                        >
                            Active
                        </ToggleButton>
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
export default User
