import React from 'react'
import { Component } from 'react';
import { Container, Row, Col, NavItem, Nav, NavLink } from 'reactstrap';


class Navbar extends Component{
    constructor(props) {
        super(props);
    this.state={
        show:false
    }}

    toggler = () => {
        document.documentElement.classList.toggle('change')
        this.setState({
            show: !this.state.show
        }, () => {
            this.props.finalToggler(this.state.show)
        })
    }
    
    render(){
        return(
            <div className="double-main effect5" >
            <Container fluid>
                <div>
                <div className="p-3 w-100 bg-warning  dd">
                <div role="button" className={`main-container`} onClick={this.toggler}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                    <Row>
                        <Col >
                            <div className="main-heading">
                                <h4 className="text-dep">TAX INFORMATION NETWORK</h4 >
                                <h5>of Income Tax Department</h5>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-2  justify-content-center lgnavbar">
                        <Col md={7} className="d-flex justify-content-center">
                            <Nav  className="nav-item " >
                                <NavItem >  
                                    <NavLink  active={true} href="/modi/dashboard" className="text-dark">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="text-dark" >About US </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/" className="text-dark">Download</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="text-dark">React </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                    
                </div>
                <Row>
                    <Col>
                        <div className="d-flex justify-content-center bg-white text-black bol p-3">
                            <h4>e-Payment of Taxes</h4>
                        </div>
                    </Col>
                </Row>
</div>
            </Container>
            </div>
        )
    }
}
export default Navbar