import { Link, NavLink } from "react-router-dom";
import {Navbar, Nav, NavbarBrand} from "react-bootstrap";

// Navbar.Brand, Navbar.toggle, Navbar.Collapse, Nav.Link
function NavigationBar () {
    return(
        <Navbar bg="light" expand="lg">

            <NavbarBrand href="/"> E-Commerce App </NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/" activeclassname="active">
                    Home
                    </Nav.Link>

                    <Nav.Link as={NavLink} to="/customers/new" activeclassname="active">
                    Add Customer
                    </Nav.Link>

                    <Nav.Link as={NavLink} to="/customers" activeclassname="active">
                    Customers
                    </Nav.Link>

                    <Nav.Link as={NavLink} to="/products/new" activeclassname="active">
                    Add Product
                    </Nav.Link>

                    <Nav.Link as={NavLink} to="/products" activeclassname="active">
                    Products
                    </Nav.Link>

                    <Nav.Link as={NavLink} to="/orders/new" activeclassname="active">
                    Add Order
                    </Nav.Link>

                    <Nav.Link as={NavLink} to="/orders" activeclassname="active">
                    Orders
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
        
    )
}

export default NavigationBar