import {Tab, Collapse, Nav, Row, Col} from "react-bootstrap";
import {useState} from "react";
import SupplierView from "../../../features/supplier";


const ManUser = () => {
    const [transactionColl, setTransactionColl] = useState(false);
    const [productColl, setProductColl] = useState(false);
    const [reportColl, setReportColl] = useState(false);


    return (
        <Tab.Container defaultActiveKey="dashboard">
            <Row>
                <Col>
                    <Nav className="flex-column" defaultActiveKey="dashboard" variant="pills">
                        <Nav.Item style={{border:"solid #F0F8FF"}}>
                            <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
                        </Nav.Item>

                        <Nav.Item style={{border:"solid #F0F8FF"}}>
                            <Nav.Link eventKey="user">Management User</Nav.Link>
                        </Nav.Item>

                        <Nav.Item style={{border:"solid #F0F8FF"}}>
                            <Nav.Item>
                                <Nav.Link eventKey="transaction" onClick={() => {
                                    setTransactionColl(!transactionColl)
                                    if (!transactionColl){
                                        setProductColl(false)
                                        setReportColl(false)
                                    }
                                }}>
                                    Transaction
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Collapse in={transactionColl}>
                                    <div id="collapse-transaction">
                                        <Nav.Item>
                                            <Nav.Link eventKey="transaction_buy">Buy</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="transaction_sell">Sell</Nav.Link>
                                        </Nav.Item>
                                    </div>
                                </Collapse>
                            </Nav.Item>
                        </Nav.Item>
                        <Nav.Item style={{border:"solid #F0F8FF"}}>
                            <Nav.Link eventKey="supplier">Management Supplier</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{border:"solid #F0F8FF"}}>
                            <Nav.Link eventKey="product" onClick={() => {
                                setProductColl(!productColl)
                                if (!productColl){
                                    setTransactionColl(false)
                                    setReportColl(false)
                                }
                            }}>
                                Management Product
                            </Nav.Link>
                            <Collapse in={productColl}>
                                <div id="collapse-product">
                                    <Nav.Item>
                                        <Nav.Link eventKey="product_stock">Stock</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="product_price">Price</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="product_category">Category</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="product_unit">Unit</Nav.Link>
                                    </Nav.Item>
                                </div>
                            </Collapse>
                        </Nav.Item>
                        <Nav.Item style={{border:"solid #F0F8FF"}}>
                            <Nav.Link eventKey="report" onClick={() => {
                                setReportColl(!reportColl)
                                if (!reportColl){
                                    setTransactionColl(false)
                                    setProductColl(false)
                                }
                            }}>
                                Report
                            </Nav.Link>
                            <Collapse in={reportColl}>
                                <div id="collapse-report">
                                    <Nav.Item>
                                        <Nav.Link eventKey="report_buy">Report Buy</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="report_sell">Report Sell</Nav.Link>
                                    </Nav.Item>
                                </div>
                            </Collapse>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col xs={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="dashboard">
                            Page Dashboard
                        </Tab.Pane>
                        <Tab.Pane eventKey="user">
                            Page Management User
                        </Tab.Pane>
                        <Tab.Pane eventKey="transaction_buy">
                            Page Transaction Buy
                        </Tab.Pane>
                        <Tab.Pane eventKey="transaction_sell">
                            Page Transaction Sell
                        </Tab.Pane>
                        <Tab.Pane eventKey="supplier">
                            <SupplierView />
                        </Tab.Pane>
                        <Tab.Pane eventKey="product_stock">
                            Page Product Stock
                        </Tab.Pane>
                        <Tab.Pane eventKey="product_price">
                            Page Product Price
                        </Tab.Pane>
                        <Tab.Pane eventKey="product_category">
                            Page Product Category
                        </Tab.Pane>
                        <Tab.Pane eventKey="product_unit">
                            Page Product Unit
                        </Tab.Pane>
                        <Tab.Pane eventKey="report_buy">
                            Page Report Buy
                        </Tab.Pane>
                        <Tab.Pane eventKey="report_sell">
                            Page Report Sell
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default ManUser
