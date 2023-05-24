import {Component} from "react";
import LoginView from "../features/login/LoginView";
import './AppNavigation.css';
import {userLogout} from "../features/login/state/AuthenticationAction";
import {connect} from "react-redux";
import Menu from "../pages/menu";

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
                        {this.state.currentPage === 0 && <Menu/>}
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
