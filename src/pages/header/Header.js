import {Container, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../assets/logo/logo.json"
import profile from "../../assets/profile/profile.json"
import Lottie from "lottie-react";
const Header = () => {
    const styles = {
        sizing: {
            width: 30,
            height: 30,
        },
        colour: {
            color: "white"
        }
    };
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <Lottie
                            animationData={logo}
                            loop={true}
                            style={styles.sizing}
                            className="d-inline-block align-top"
                        />
                        POS System
                    </Navbar.Brand>
                    <Navbar.Collapse id="navbar-profile" className="justify-content-end">
                        <Lottie animationData={profile}
                                loop={true}
                                style={styles.sizing}/>
                        <NavDropdown title="Profile" menuVariant={"dark"} style={styles.colour}>
                            <NavDropdown.Item href="#">Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
