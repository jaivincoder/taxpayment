import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import { Container, FormGroup, Label, Col, Row, Card, CardBody, Button, UncontrolledCollapse, CardHeader, CardTitle } from 'reactstrap'
import Select from "react-select";
import {options,indianStates} from '../../common/static-data'
import {Link} from 'react-router-dom'

class Etax extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: {}, 
            seconds: 1800,
            selectedOption:null,
            selectedOption2:null,
            selectedTime:null,
            isDebitcard:true,
            isNetBanking:true,   
            years:[],
            options:options,
            indianStates:indianStates,
            fields: {
                iscompany: '',
                select_hero:'',
                select_payment_debit:'',
                select_payment_net:'',
                type_of_payment:'',
                payment_mode:'',
                tex_deduction_acc_no:'',
                ass_year:'',
                area:'',
                city:'',
                building:'',
                road:'',
                state:'',
                mobile_no:'',
                email:'',
                pincode:'',
                block_no:''
            },
        }

        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);

        this.startTimer()

        let years = []
        for (let i = 1999; i < 2021; i++) {
            years.push({ label: `${i}-${((i + 1).toString().substring(2))}`, value: `${i}-${((i + 1).toString().substring(2, 4))}` })
        }
        this.setState({
            time: timeLeftVar,
            years
        });
        
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
        // Check if we're at zero.
        if (seconds == 0) {
            clearInterval(this.timer);
        }
    }
    onSubmit=(values)=>{
        console.log(values)
    }

    render() {
        let {match}=this.props
        return (
            <Container className="page-inner">
                <Row>
                    <Col>
                        <div className="dd2" style={{ backgroundColor: "skyblue " }} >
                            <i className="far fa-clock"></i>
                            <h5 className="bold text-dark p-4"><i className="fa fa-clock-o mr-1" ></i>Time remaining: {this.state.time.m} minutes {this.state.time.s} seconds</h5>
                        </div>
                    </Col>
                </Row>
                <Row >
                <Col md={4} className="order-md-2">
                <Card>
                    <CardHeader ><CardTitle className="d-flex justify-content-between"><span>Special Instructions</span><i  id="toggler" style={{fontSize:"25px"}} role="button" className="fa fa-angle-down align-self-center lg  mt-1"/> </CardTitle></CardHeader>
                    {/* fa fa-angle-down */}
                    <UncontrolledCollapse toggler="#toggler" target="toggler" >
                                
                                    <CardBody>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                                        similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                                        dignissimos esse fuga! Minus, alias.
                                </CardBody>
                            
                    </UncontrolledCollapse>
                    </Card>
                </Col>
                 <Col md={8} className="order-md-1">   
                <Formik
                    initialValues={this.state.fields}
                    enableReinitialize
                    // validationSchema={uploadHomeworkSchema}
                    onSubmit={this.onSubmit}>
                        {({errors, touched,values}) => {
                            return(
                    <Form>
                        <Row className="mt-2">
                            <Col >
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col md={4}>
                                                <div><h6 >Tax Applicable<span className="text-danger">*</span></h6></div>
                                                <h6>(Tax Deducted/Collected At Source From)</h6>
                                            </Col>
                                            <Col md={8}>
                                                <FormGroup>
                                                    <Field
                                                        name="iscompany"
                                                        render={({ field }) => (
                                                            <>
                                                                <Label className="d-block" >
                                                                    <div className="radio-item d-inline">
                                                                        <input
                                                                            {...field}
                                                                            id="Company"
                                                                            value="Company"
                                                                            checked={field.value === "Company"}
                                                                            name="iscompany"
                                                                            type="radio"
                                                                        />
                                                                    </div> (0020) Company Deductees
                                                               </Label>
                                                                <Label>
                                                                    <div className="radio-item d-inline">
                                                                        <input
                                                                            {...field}
                                                                            id="non-company"
                                                                            value="Non-company"
                                                                            checked={field.value === "Non-company"}
                                                                            name="iscompany"
                                                                            type="radio"
                                                                        />
                                                                    </div> (0021) Non-Company Deductees
                                                              </Label>
                                                            </>
                                                        )}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col >
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col md={4}>
                                                <div><h6 >Type Of Payment<span className="text-danger">*</span></h6></div>
                                            </Col>
                                            <Col md={8}>
                                                <FormGroup >
                                                    <Field
                                                        name="type_of_payment"
                                                        render={({ field }) => (
                                                            <>
                                                                <Label className="d-block" >
                                                                    <div className="radio-item d-inline">
                                                                        <input
                                                                            {...field}
                                                                            id="payable"
                                                                            value="regular"
                                                                            checked={field.value === "regular"}
                                                                            name="type_of_payment"
                                                                            type="radio"
                                                                        />
                                                                    </div> (200) TDS/TCS Payable by Taxpayer
                                                                </Label>
                                                                <Label className="d-block" >
                                                                    <div className="radio-item d-inline">
                                                                        <input
                                                                            {...field}
                                                                            id="non-payable"
                                                                            value="non-regular"
                                                                            checked={field.value === "non-regular"}
                                                                            name="type_of_payment"
                                                                            type="radio"
                                                                        />
                                                                    </div> (200) TDS/TCS Payable by Taxpayer
                                                                </Label>
                                                            </>
                                                        )}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <div><h6 >Nature Of Payment<span className="text-danger">*</span></h6></div>
                                            </Col>
                                            <Col md={8}>
                                                <FormGroup>
                                                <Field 
                                                        name="select_hero">
                                                    {({field: {value}, form: {setFieldValue}}) => {
                                                        return (
                                                            <Select
                                                                name="select_hero"
                                                                className="outline-0 border-0"
                                                                isSearchable={true}
                                                                options={this.state.options}
                                                                value={this.state.options.find(item=>item.value===value)}
                                                                onChange={
                                                                    (e)=>{
                                                                        setFieldValue('select_hero',e.value)
                                                                        
                                                                    }   
                                                                }
                                                            />  
                                                        )
                                                    }}
                                                </Field>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col >
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col md={4}>
                                                <div><h6 >Mode Of Payment<span className="text-danger">*</span></h6></div>
                                            </Col>
                                            <Col md={8}>
                                                <FormGroup row >
                                                    <Col md={4} className="d-flex align-items-center">
                                                    <Field
                                                        name="payment_mode"
                                                        render={({ field,form: {setFieldValue} }) => (
                                                            <>
                                                                <Label >
                                                                    <div className="radio-item d-inline">
                                                                        <input
                                                                            {...field}
                                                                            id="debit"
                                                                            value="debit"
                                                                            checked={field.value === "debit"}
                                                                            name="payment_mode"
                                                                            onChange={(e)=>{
                                                                                let value=e.target.value
                                                                                setFieldValue('payment_mode',value)
                                                                                if(value==='debit'){
                                                                                    this.setState({
                                                                                        isDebitcard:false,
                                                                                        isNetBanking:true,
                                                                                        debitOptions:this.state.options,
                                                                                        selectedOption2:null
                                                                                        
                                                                                    })
                                                                                }
                                                                            }}
                                                                            type="radio"
                                                                        />
                                                                    </div> Debit-Card</Label>
                                                            </>
                                                        )}
                                                    />
                                                    </Col>
                                                    <Col>
                                                    <Field
                                                        name="select_payment_debit">
                                                        {({ field: { value }, form: { setFieldValue } }) => {
                                                            return (
                                                                <Select
                                                                    name="select_payment_debit"
                                                                    className="outline-0 border-0"
                                                                    isSearchable={true}
                                                                    isDisabled={this.state.isDebitcard}
                                                                    options={this.state.options}
                                                                    value={this.state.selectedOption}
                                                                    onChange={
                                                                        (e) => {
                                                                            setFieldValue('select_payment_debit', e.value)
                                                                            this.setState({
                                                                                selectedOption:e,
                                                                            })
                                                                        }
                                                                    }
                                                                    
                                                                />
                                                            )
                                                        }}
                                                    </Field> 
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                            </Col>
                                            <Col md={8}>
                                                <FormGroup row >
                                                    <Col md={4} className="d-flex align-items-center">
                                                        <Field
                                                            name="payment_mode"
                                                            render={({ field ,form: {setFieldValue} }) => (
                                                                <>
                                                                    <Label >
                                                                        <div className="radio-item d-inline">
                                                                            <input
                                                                                {...field}
                                                                                id="netbanking"
                                                                                value="netbanking"
                                                                                checked={field.value === "netbanking"}
                                                                                name="payment_mode"
                                                                                type="radio"
                                                                                onChange={(e)=>{
                                                                                    let value = e.target.value
                                                                                    setFieldValue('payment_mode',value)
                                                                                    if (value === 'netbanking') {
                                                                                        this.setState({
                                                                                            isDebitcard: true,
                                                                                            isNetBanking: false,
                                                                                            netOptions:this.state.options,
                                                                                            selectedOption:null    
                                                                                        })
                                                                                    }
                                                                                }
                                                                            }
                                                                            />
                                                                        </div> Net-Banking</Label>
                                                                </>
                                                            )}
                                                        />
                                                    </Col>
                                                    <Col>
                                                    <Field
                                                        name="select_payment_net">
                                                        {({ field: { value }, form: { setFieldValue } }) => {
                                                            return (
                                                                <Select
                                                                    
                                                                    name="select_payment_net"
                                                                    className="outline-0 border-0"
                                                                    isSearchable={true}
                                                                    options={this.state.options}
                                                                    isDisabled={this.state.isNetBanking}
                                                                    value={this.state.selectedOption2}
                                                                    onChange={
                                                                        (e) => {
                                                                            setFieldValue('select_payment_net', e.value)
                                                                            this.setState({
                                                                                    selectedOption2:e,
                                                                            })
                                                                        }
                                                                    }
                                                                />
                                                            )
                                                        }}
                                                    </Field> 
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                                <Row className="mt-3">
                                <Col>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col md={4}>
                                                <div><h6 >Tax Deduction Account No*<span className="text-danger">*</span></h6></div>
                                            </Col>
                                            <Col md={8}>
                                                <FormGroup >
                                                <Field className="form-control" name="tex_deduction_acc_no" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <div><h6 >Assesment Year<span className="text-danger">*</span></h6></div>
                                            </Col>
                                            <Col md={8}>
                                                <FormGroup>
                                                <Field 
                                                        name="ass_year">
                                                    {({field: {value}, form: {setFieldValue}}) => {
                                                        return (
                                                            <Select
                                                                name="ass_year"
                                                                isSearchable={true}
                                                                options={this.state.years}
                                                                value={this.state.selectedTime}
                                                                placeholder={"Assesment Year"}
                                                                onChange={
                                                                    (e)=>{
                                                                        setFieldValue('ass_year',e.value)
                                                                        this.setState({
                                                                            selectedTime:e
                                                                        })
                                                                    }   
                                                                }
                                                            />  
                                                        )
                                                    }}
                                                </Field>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row> 
                        <Row className="mt-3">
                                <Col >
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col md={4}>
                                                <div><h6 >Flat/Door/Block No<span className="text-danger">*</span></h6></div>
                                            </Col>
                                            <Col md={8}>
                                                <FormGroup >
                                                <Field  className="form-control" name="block_no" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <div><h6 >Premises/Building/Village</h6></div>
                                            </Col>
                                            <Col md={8}>
                                                <FormGroup >
                                                <Field className="form-control" name="building" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <div><h6 >Road/Street/Lane</h6></div>
                                            </Col>
                                            <Col md={8}>
                                                <FormGroup >
                                                <Field className="form-control" name="road" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <div><h6 >Area/Locality</h6></div>
                                            </Col>
                                            <Col md={8}>
                                                <FormGroup >
                                                <Field className="form-control" name="area" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <div><h6 >City/District<span className="text-danger">*</span></h6></div>
                                            </Col>
                                            <Col md={8}>
                                                <FormGroup >
                                                <Field className="form-control" name="city" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <div><h6 >State<span className="text-danger">*</span></h6></div>
                                            </Col>
                                            <Col md={8}>
                                                <FormGroup>
                                                <Field 
                                                    name="state">
                                                    {({field: {value}, form: {setFieldValue}}) => {
                                                        return (
                                                            <Select
                                                                name="state"
                                                                isSearchable={true}
                                                                options={this.state.indianStates}
                                                                placeholder={"State"}
                                                                value={this.state.indianStates.find(item=>item.value===value)}
                                                                onChange={
                                                                    (e)=>{
                                                                        setFieldValue('state',e.value)
                                                                    }   
                                                                }
                                                            />  
                                                        )
                                                    }}
                                                </Field>
                                                {errors['state'] && touched['state'] && (
                                                                        <div className="d-block invalid-feedback">
                                                                            {errors['state']}
                                                                        </div>)}
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <div><h6 >Pin Code<span className="text-danger">*</span></h6></div>
                                            </Col>
                                            <Col md={8}>
                                                <FormGroup >
                                                <Field  type="number" className="form-control  ss" name="pincode" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <div><h6 >Email</h6></div>
                                            </Col>
                                            <Col md={8}>
                                                <FormGroup >
                                                <Field className="form-control" name="email" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <div><h6 >Mobile No.</h6></div>
                                            </Col>
                                            <Col md={8}>
                                                <FormGroup >
                                                <input type={"number"} className="form-control input-pin ss" name="mobile_no" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>  
                        <Row>
                            <Col>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <Button color="success" className="lg" size="lg" type="submit">Proceed</Button>
                                            <Button color="danger"  size="lg ml-2"  type="reset">Clear</Button>
                                            <Button color="warning"  size="lg ml-2" onClick={()=>{this.props.history.push('/')}}>Go Back</Button>
                                            <Link to={`${match.url}/jaivin`}><Button color="warning"  size="lg ml-2" >third</Button></Link>
                                        </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                                </Col>
                            </Row>
                            </Col>
                        </Row>
                    </Form>)}}
                </Formik>
                </Col>
             
                </Row>
                
            </Container>
        )
    }
}
export default Etax