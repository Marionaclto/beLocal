import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import './bottom-navbar.css'
class BottomNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      loggedIn: false,
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({ loggedIn: true })
    } else {
      this.setState({ loggedIn: false })
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <div>
        <Navbar
          className='container-fluid text-center'
          color='light'
          light
          expand='md'>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink
                className='link-green'
                tag={Link}
                exact
                //activeClassName='active-page'
                to='/terms'>
                Terms and conditions
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink
                className='link-green'
                tag={Link}
                exact
                activeClassName='active-page'
                to='/contact'>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default BottomNavbar
