import {Container, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../assets/logo/logo.json"
import profile from "../../assets/profile/profile.json"
import Lottie from "lottie-react";
import {useState} from "react";
import {Navigate} from "react-router-dom";
import {removeToken} from "../../utils/token";
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

    const [navigate, setNavigate] = useState(false);

    const logout = async () => {
        removeToken();

        setNavigate(true)
    }

    if (navigate) {
        return <Navigate to={"/"} />
    }

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
                                loop={false}
                                style={styles.sizing}/>
                        <NavDropdown title="Profile" menuVariant={"dark"} style={styles.colour}>
                            <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
