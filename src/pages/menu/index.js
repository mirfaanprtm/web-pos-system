import Header from "../header/Header";
import ManagementUser from "./management-user";
import {Col} from "react-bootstrap";

const Menu = () => {
    return (
        <div>
            <Col>
                <Header />
            </Col>
            <Col xs={4}>
                <ManagementUser />
            </Col>
        </div>
    )
}

export default Menu
