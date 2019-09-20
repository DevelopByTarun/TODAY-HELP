import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/reactstrap/dist/reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { SpaRoute } from './route/spaRoute';
import './css/style.css';

export const Spa = (props)=> {

    return(
<div className="div">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand fnt" href="">{props.list.head}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse set" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <NavLink className="red nav-link" to="/">{props.list.home}
            <span class="sr-only">(current)</span>
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="red nav-link" to="/about/ReactJs">
            {props.list.about}
          </NavLink>
        </li>
        <li class="nav-item">
          <UncontrolledDropdown>
            <DropdownToggle>
              <a class="nav-link">
                {props.list.contact}
              </a>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <NavLink activeClassName="orange" to="/homeContact/Rohini, Delhi">
                  {props.list.hContact}
                </NavLink>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavLink activeClassName="yellow" to="/officeContact/MainStreet, Auckland">
                  {props.list.oContact}
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </li>
        <li class="nav-item">
          <NavLink className="green nav-link" to={{pathname: '/report',search: '?time=9000&name=Sports News'}}>
            {props.list.final}
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="yellow nav-link" to="/user/Login/Register">
            {props.list.user}
          </NavLink>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">{props.list.butt}</button>
      </form>
    </div>
  </nav>
  <br/>
  <Container>
    <Row>
      <Col md="12">
      <SpaRoute/>
      </Col>
    </Row>
  </Container>
</div>
    );
}