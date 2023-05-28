import {
  Button,
  Collapse,
  Container,
  Form,
  Row,
  Table,
  Modal,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../interceptors/axios";

const Supplier = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const [supplier, setSupplier] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [editSupplierId, setEditSupplierId] = useState(null);

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  const handleOpenEdit = (supplierId) => {
    setEditSupplierId(supplierId);
    setOpenEdit(true);
    setOpenAdd(false);
  };

  const onChangeData = (setData) => (e) => {
    setData(e.target.value);
  };

  const clean = () => {
    setSupplier("");
    setAddress("");
    setPhone("");
  };

  const saveSupplier = async (e) => {
    e.preventDefault();
    try {
      const dataSupplier = {
        nameSupplier: supplier,
        address: address,
        phone: phone,
      };

      const response = await api.post(
        "/supplier",
        dataSupplier
      );

      if (response.status === 201) {
        clean();
        fetchData();
      } else {
        throw new Error(
          "Permintaan gagal dengan kode status " + response.status
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateSupplier = async () => {
    try {
      const dataSupplier = {
        nameSupplier: supplier,
        address: address,
        phone: phone,
      };

      const response = await api.put(
        `/supplier/${editSupplierId}`,
        dataSupplier
      );

      if (response.status === 200) {
        clean();
        fetchData();
        handleCloseEdit();
      } else {
        throw new Error(
          "Permintaan gagal dengan kode status " + response.status
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get("/supplier");

      if (response.status === 200) {
        const data = await response.data;
        setSuppliers(data.data);
      } else {
        throw new Error("Permintaan gagal");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteSupplier = async (id) => {
    try {

      await api.delete(`/supplier/${id}`);

      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container fluid>
      <h3 style={{ textAlign: "center" }}>Management Supplier</h3>
      <Row>
        <Button onClick={() => setOpenAdd(!openAdd)}>ADD</Button>
        <Collapse in={openAdd}>
          <Form onSubmit={saveSupplier}>
            <Form.Label>Supplier Name</Form.Label>
            <Form.Control
              className="input"
              type="text"
              placeholder="Enter Supplier Name"
              value={supplier}
              onChange={onChangeData(setSupplier)}
            />
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              className="input"
              value={address}
              onChange={onChangeData(setAddress)}
            />
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              className="input"
              value={phone}
              onChange={onChangeData(setPhone)}
            />

            <Button
              variant="primary"
              type="submit"
              style={{ margin: "10px 0" }}
            >
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
              <th>Supplier Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier, index) => (
              <tr key={supplier.id}>
                <td>{index + 1}</td>
                <td>{supplier.nameSupplier}</td>
                <td>{supplier.address}</td>
                <td>{supplier.phone}</td>
                <td>
                  <Button
                    variant="warning"
                    style={{ marginRight: 5 }}
                    onClick={() => handleOpenEdit(supplier.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteSupplier(supplier.id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>

      <Modal show={openEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Supplier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Supplier Name</Form.Label>
            <Form.Control
              className="input"
              type="text"
              placeholder="Enter Supplier Name"
              value={supplier}
              onChange={onChangeData(setSupplier)}
            />
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              className="input"
              value={address}
              onChange={onChangeData(setAddress)}
            />
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              className="input"
              value={phone}
              onChange={onChangeData(setPhone)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={updateSupplier}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default Supplier;
