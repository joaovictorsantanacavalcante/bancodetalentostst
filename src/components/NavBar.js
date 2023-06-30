import styles from './Header.module.css'
import LogoTst from '../img/logo-tst.png'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.NavContainer}>
      <Nav className={styles.NavContent} > 
        <div className={styles.GroupLinks}> 
          <NavItem>
            <NavLink
              active
              href="#"
            >
              HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              PRATICAS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
            >
              ESTAGIOS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
            >
              BANCO DE TALENTOS
            </NavLink>
          </NavItem>
          
        </div>

        <div className={styles.IconContainer}>
        <NavItem>
            <NavLink>
              <img className={styles.IconTst} src={LogoTst} alt="cu" />
            </NavLink>
          </NavItem>
        </div>

      </Nav>
    </div>
  );
}
export default NavBar;