import {Button, Collapse, Container, Form, Row, Table, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import api from "../../interceptors/axios";

const User = () => {
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [checked, setChecked] = useState(false);

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [data, setData] = useState([])
    const [editUserId, setEditUserId] = useState(null)

    const handleOpenEdit = (id) => {
        setEditUserId(id)
        setOpenEdit(true)
        setOpenAdd(false)
    }

    const handleCloseEdit = () => {
        setOpenEdit(false)
        setChecked(false)
    }

    const clearForm = () => {
        setName("")
        setUsername("")
        setPassword("")
        setPhone("")
        setChecked(false)
    }

    const addUser = async event => {
        event.preventDefault()

        await api.post('user', {username, name, password, phone, checked})
            .then((response) => {
            setData([...data, response.data.data]);
            }).catch((error) => {
                console.log(error)
            })
        await clearForm()
    }

    const getAllUser = async () => {
         await api.get('user')
             .then((response) => {
                 setData([...response.data.data])
             }).catch((error) => {
                 console.log(error)
             })
    }

    const deleteUser = async (id) => {
        await api.delete(`user/${id}`)
            .then((response) => {
                setData(data.filter((d) => d.id !== id));
            }).catch((error) => {
                console.log(error);
            })
    }

    const updateUser = async () => {
        const dataUser = {
            name,
            username,
            password,
            phone,
            isActive: checked,
        }
        await api.put(`user/${editUserId}`, dataUser )
            .then((response) => {
                console.log(response.data.data)
                setData([...data,response.data.data]);
                getAllUser()
                handleCloseEdit();
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getAllUser();
    },[])

    return (
        <Container fluid>
            <h3 style={{textAlign:"center"}}>Management User</h3>
            <Row>
                <Button
                    onClick={() => setOpenAdd(!openAdd)}
                >
                    ADD
                </Button>
                <Collapse in={openAdd}>
                    <Form onSubmit={addUser}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" value={name} onChange={event => setName(event.target.value)} />
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="User Name" value={username} onChange={event => setUsername(event.target.value)} />
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone Number" value={phone} onChange={event => setPhone(event.target.value)} />
                        <Form.Check
                            type="switch"
                            label="isActive? "
                            checked={checked}
                            onChange={(e) => setChecked(e.currentTarget.checked)}
                        />
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
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {data?.map((user, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{user?.name}</td>
                            <td>{user?.auth?.username}</td>
                            <td>{user?.phone}</td>
                            <td>{user?.auth?.roleUser}</td>
                            <td>
                                <Button variant="warning" style={{marginRight: 5}} onClick={() => handleOpenEdit(user.id)}>Edit</Button>
                                <Button variant="danger" onClick={() => deleteUser(user.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}

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
                        <Form.Control type="text" placeholder="Full Name" onChange={(event) => setName(event.target.value)} />
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone Number" onChange={event => setPhone(event.target.value)} />
                        <Form.Check
                            type="switch"
                            label="isActive? "
                            onChange={(e) => setChecked(e.currentTarget.checked)}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseEdit()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateUser}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*<Form.Control type="text" placeholder="Search" onKeyUp={searchID}/>*/}
            {/*{console.log(user)}*/}
            {/*<ul>*/}
            {/*    {user?.map((d, index) => (*/}
            {/*        <li key={index}>{d.data.id +" --> "+d.data.name}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}

            {/*<Form.Select>*/}
            {/*    {data.map((d, index) => (*/}
            {/*        <option value={d?.id}>{d?.name}</option>*/}
            {/*    ))}*/}
            {/*</Form.Select>*/}
        </Container>
    )
}
export default User
