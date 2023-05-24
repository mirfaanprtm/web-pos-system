import {Collapse, Nav} from "react-bootstrap";
import {useState} from "react";

const ManUser = () => {
    const [transactionColl, setTransactionColl] = useState(false);
    const [productColl, setProductColl] = useState(false);
    const [reportColl, setReportColl] = useState(false);


    return (
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
  )
}

export default ManUser
