import {Component} from "react";
import LoginView from "../features/login/LoginView";
import './AppNavigation.css';
import {userLogout} from "../features/login/state/AuthenticationAction";
import {connect} from "react-redux";
import Penjualan from "../pages/penjualan";
import Header from "../pages/penjualan/Header";

class AppNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0
        }
    }

    onNavigate = (page) => {
        this.setState({
            currentPage: page
        })
    }

    render() {
        return (
            <>
                {
                    this.props.authentication.isAuthenticated ?
                    <div>
                        {this.state.currentPage === 0 && <Header/>}
                </div> : <LoginView/>
                }
            </>
        );
    }
}

const mapDispatchToProps = {
    userLogout,
}
const mapStateToProps = state => ({
        authentication: state.authenticationReducer
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);