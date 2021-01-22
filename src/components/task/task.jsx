import React from 'react'
import { Component } from 'react';
import { Container, Row, Col, Card, CardHeader, CardTitle, CardBody, Button } from 'reactstrap';
import {Link} from 'react-router-dom'

class Task extends Component{
    render(){
        return(
            <Container className="page-inner">
            
                <Row >
                    <Col md={3} className="mt-3" >
                    <Card> 
                        <CardHeader><CardTitle>TDS/TCS</CardTitle></CardHeader>
                        <CardBody>
                                <div  className="card-bottom " >
                                    <h5>CHALLAN NO./ITNS 281</h5>
                                    <h6 className="text-muted payment"> Payment of TDS/TCS by Company or Non Company Deductee </h6>
                                </div>
                                <Link to={`/e-tax`}>
                                <Button color="warning">Proceed</Button></Link>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col md={3} className="mt-3" >
                    <Card> 
                        <CardHeader><CardTitle>TDS/TCS</CardTitle></CardHeader>
                        <CardBody>
                                <div  className="card-bottom " >
                                    <h5>CHALLAN NO./ITNS 281</h5>
                                    <h6 className="text-muted payment"> Payment of TDS/TCS by Company or Non Company Deductee </h6>
                                </div>
                                <Link to={`/e-tax/jaivin`}>
                                <Button color="warning">Proceed</Button></Link>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col md={3} className="mt-3" >
                    <Card> 
                        <CardHeader><CardTitle>TDS/TCS</CardTitle></CardHeader>
                        <CardBody>
                                <div  className="card-bottom " >
                                    <h5>CHALLAN NO./ITNS 281</h5>
                                    <h6 className="text-muted payment"> Payment of TDS/TCS by Company or Non Company Deductee </h6>
                                </div>
                                <Button color="warning">Proceed</Button>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col md={3} className="mt-3" >
                    <Card> 
                        <CardHeader><CardTitle>TDS/TCS</CardTitle></CardHeader>
                        <CardBody>
                                <div  className="card-bottom " >
                                    <h5>CHALLAN NO./ITNS 281</h5>
                                    <h6 className="text-muted payment"> Payment of TDS/TCS by Company or Non Company Deductee </h6>
                                </div>
                                <Button color="warning">Proceed</Button>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col md={3} className="mt-3" >
                    <Card> 
                        <CardHeader><CardTitle>TDS/TCS</CardTitle></CardHeader>
                        <CardBody>
                                <div  className="card-bottom " >
                                    <h5>CHALLAN NO./ITNS 281</h5>
                                    <h6 className="text-muted payment"> Payment of TDS/TCS by Company or Non Company Deductee </h6>
                                </div>
                                <Button color="warning">Proceed</Button>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col md={3} className="mt-3" >
                    <Card> 
                        <CardHeader><CardTitle>TDS/TCS</CardTitle></CardHeader>
                        <CardBody>
                                <div  className="card-bottom " >
                                    <h5>CHALLAN NO./ITNS 281</h5>
                                    <h6 className="text-muted payment"> Payment of TDS/TCS by Company or Non Company Deductee </h6>
                                </div>
                                <Button color="warning">Proceed</Button>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col md={3} className="mt-3" >
                    <Card> 
                        <CardHeader><CardTitle>TDS/TCS</CardTitle></CardHeader>
                        <CardBody>
                                <div  className="card-bottom " >
                                    <h5>CHALLAN NO./ITNS 281</h5>
                                    <h6 className="text-muted payment"> Payment of TDS/TCS by Company or Non Company Deductee </h6>
                                </div>
                                <Button color="warning">Proceed</Button>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col md={3} className="mt-3" >
                    <Card> 
                        <CardHeader><CardTitle>TDS/TCS</CardTitle></CardHeader>
                        <CardBody>
                                <div  className="card-bottom " >
                                    <h5>CHALLAN NO./ITNS 281</h5>
                                    <h6 className="text-muted payment"> Payment of TDS/TCS by Company or Non Company Deductee </h6>
                                </div>
                                <Button color="warning">Proceed</Button>
                        </CardBody>
                        </Card>
                    </Col>
                    </Row>

                
                </Container>
        )
    }
}

export default Task;