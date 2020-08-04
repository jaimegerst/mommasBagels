import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-4">
                                <img src="/assets/images/logo.png" height="150" width="150" alt="Bagels" />
                                <h1>Momma's Bagels</h1>
                                <h2>est. 1997</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                                <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" height="60" width="60" alt="NuCamp Logo" /></NavbarBrand>
                                <NavbarToggler onClick={this.toggleNav} />
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/Home">
                                                <i className="fa fa-home fa-lg" /> Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/Menu">
                                                <i className="fa fa-list fa-lg" /> Menu
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/contact">
                                                <i className="fa fa-address-card fa-lg" /> Contact
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;