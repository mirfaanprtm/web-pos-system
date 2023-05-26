import {Tab, Collapse, Nav, Row, Col} from "react-bootstrap";
import {useState} from "react";

import User from "../../form/User";
import Supplier from "../../form/Supplier";
import Product from "../../form/Product";
import Price from "../../form/Price";
import Category from "../../form/Category";
import Unit from "../../form/Unit";
import TransactionBuy from "../../form/TransactionBuy";
import TransactionSell from "../../form/TransactionSell";
import Report from "../../form/Report";


const ManUser = () => {
    const [transactionColl, setTransactionColl] = useState(false);
    const [productColl, setProductColl] = useState(false);
    const [reportColl, setReportColl] = useState(false);
    const [name, setName] = useState("")



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
                                        <Nav.Link eventKey="product_sub">Product</Nav.Link>
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
                                        <Nav.Link eventKey="report_buy" onClick={() => setName("Buy")}>Report Buy</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="report_sell" onClick={() => setName("Sell")}>Report Sell</Nav.Link>
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
                            <User />
                        </Tab.Pane>
                        <Tab.Pane eventKey="transaction_buy">
                            <TransactionBuy />
                        </Tab.Pane>
                        <Tab.Pane eventKey="transaction_sell">
                            <TransactionSell />
                        </Tab.Pane>
                        <Tab.Pane eventKey="supplier">
                            <Supplier />
                        </Tab.Pane>
                        <Tab.Pane eventKey="product_sub">
                            <Product/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="product_price">
                            <Price/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="product_category">
                            <Category/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="product_unit">
                            <Unit/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="report_buy">
                            <Report name={name} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="report_sell">
                            <Report name={name} />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default ManUser
