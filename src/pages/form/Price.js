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
import api from "../../interceptors/axios";

const Price = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [prices, setPrices] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [editPriceId, setEditPriceId] = useState(null);
  const [products, setProducts] = useState([]);
  const [units, setUnits] = useState([]);

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleOpenEdit = (priceId) => {
    setEditPriceId(priceId);
    setOpenEdit(true);
    setOpenAdd(false);
  };

  const onChangeData = (setData) => (e) => {
    setData(e.target.value);
  };

  const clean = () => {
    setSelectedProduct("");
    setSelectedUnit("");
    setPrice("");
    setStock("");
    setIsActive(false);
  };

  const savePrice = async (e) => {
    e.preventDefault();
    try {
      const dataPrice = {
        product: {
          id: selectedProduct,
        },
        unit: {
          id: selectedUnit,
        },
        price,
        stock,
        isActive: isActive,
      };

      const response = await api.post("/product/price", dataPrice, {
        headers: {
          "Content-Type": "application/json",
        },
      });

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

  const updatePrice = async () => {
    try {
      const dataPrice = {
        product: {
          id: selectedProduct,
        },
        unit: {
          id: selectedUnit,
        },
        price,
        stock,
        isActive: isActive,
      };

      const response = await api.put(
        `/product/price/${editPriceId}`,
        dataPrice,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
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
      const productResponse = await api.get("/product");
      const unitResponse = await api.get("/product/unit");
      const response = await api.get("/product/price");

      if (
        productResponse.status === 200 &&
        unitResponse.status === 200 &&
        response.status === 200
      ) {
        const productData = await productResponse.data;
        const unitData = await unitResponse.data;
        const data = await response.data;

        setProducts(productData);
        setUnits(unitData);
        setPrices(data);
      } else {
        throw new Error("Permintaan gagal");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deletePrice = async (id) => {
    try {
      await api.delete(`/product/price/${id}`);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container fluid>
      <h3 style={{ textAlign: "center" }}>Management Price</h3>
      <Row>
        <Button onClick={() => setOpenAdd(!openAdd)}>ADD</Button>
        <Collapse in={openAdd}>
          <Form onSubmit={savePrice}>
            <Form.Label>Product</Form.Label>
            <Form.Control
              as="select"
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option value="">Select Product</option>
              {products?.data?.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.nameProduct}
                </option>
              ))}
            </Form.Control>
            {console.log("product: ", selectedProduct)}

            <Form.Label>Unit</Form.Label>
            <Form.Control
              as="select"
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
            >
              <option value="">Select Unit</option>
              {units?.data?.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.unit}
                </option>
              ))}
            </Form.Control>
            {console.log("unit: ", selectedUnit)}

            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Price"
              className="input"
              value={price}
              onChange={onChangeData(setPrice)}
            />
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Stock"
              className="input"
              value={stock}
              onChange={onChangeData(setStock)}
            />
            <Form.Label>Is Active</Form.Label>
            <Form.Control
              as="select"
              value={isActive}
              onChange={(e) => setIsActive(e.target.value)}
            >
              {console.log(isActive)}

              <option value="false">False</option>
              <option value="true">True</option>
            </Form.Control>
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
              <th>Product</th>
              <th>Unit</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Is Active</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {prices?.data?.map((price, index) => (
              <tr key={price.id}>
                <td>{index + 1}</td>
                <td>{price.product.nameProduct}</td>
                <td>{price.unit.unit}</td>
                <td>{price.price}</td>
                <td>{price.stock}</td>
                <td>{price.isActive ? "True" : "False"}</td>
                <td>
                  <Button
                    onClick={() => deletePrice(price.id)}
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
    </Container>
  );
};

export default Price;
