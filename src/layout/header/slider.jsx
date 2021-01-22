import React from 'react'
import { Component } from 'react';
import {Row,Col,NavItem,Nav,NavLink } from 'reactstrap'

class Slider extends Component{

    render(){
        return(
            <div>
                <div className={`slider-drawer ${this.props.finalToggler===true?'toggle-slider':''}`} >
                    <Row className="mt-2  justify-content-center p-3 ">
                        <Col md={7} className="d-flex flex-column">
                            <Nav className="nav-item" >
                                <NavItem >
                                    <NavLink active={true} href="/components/" className="text-warning">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="text-warning" >About US </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/" className="text-warning">Download</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="text-warning">React </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Slider;