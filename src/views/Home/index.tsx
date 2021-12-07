import { observable } from 'mobx';
import * as React from 'react';
import { RouterProps } from 'react-router-dom';
import { Button, Card, CardText, CardTitle, Col, FormGroup, Input, InputGroup, Label, Row, Container, Form, InputGroupText } from 'reactstrap';
import { Navigate } from "react-router-dom";
import { inject } from 'mobx-react';
import { AppState } from '../..';
import NumberFormat from 'react-number-format';
import '../../App.css';

interface State {
    isGenerated: boolean
}

@inject("IncomeStore")
class Home extends React.Component<AppState & RouterProps, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isGenerated: false
        }
    }

    @observable incomeInfo: incomeInfoModel;
    @observable breakdownInfo: breakdownInfoModel;

    handleSubmit = (e: any) => {
        e.preventDefault();
        var country = e.target.country.value;
        var year = e.target.year.value;
        var taxIncome = Math.round(parseInt(e.target.taxIncome.value.replace(/,/gi, '')));
        var tax = 0;
        const breakdown1 = 0;
        var breakdown2 = 0;
        var breakdown3 = 0;
        var breakdown4 = 0;
        var breakdown5 = 0;

        // Tax calculator
        if (taxIncome <= 18200) {
            tax = 0;
            breakdown2 = 0;
            breakdown3 = 0;
            breakdown4 = 0;
            breakdown5 = 0;

        } else if (taxIncome >= 18201 && taxIncome <= 45000) {
            tax = Math.round((taxIncome - 18200) * 0.19)
            breakdown2 = tax;
            breakdown3 = 0;
            breakdown4 = 0;
            breakdown5 = 0;
        } else if (taxIncome >= 45001 && taxIncome <= 120000) {
            tax = Math.round((5092 + (taxIncome - 45000) * 0.325));
            breakdown2 = 5092;
            breakdown3 = tax - 5092;
            breakdown4 = 0;
            breakdown5 = 0;
        } else if (taxIncome >= 120001 && taxIncome <= 180000) {
            tax = Math.round((29467 + (taxIncome - 120000) * 0.37));
            breakdown2 = 5092;
            breakdown3 = 24375;
            breakdown4 = tax - 29467;
            breakdown5 = 0;
        } else if (taxIncome >= 180001) {
            tax = Math.round((51667 + (taxIncome - 18000) * 0.45));
            breakdown2 = 5092;
            breakdown3 = 24375;
            breakdown4 = 22200;
            breakdown5 = tax - 51667;
        }

        this.props.IncomeStore.incomeInfo = {
            country: country,
            year: year,
            taxIncome: taxIncome,
            tax: tax
        }

        this.props.IncomeStore.breakdownInfo = {
            breakdown1: breakdown1,
            breakdown2: breakdown2,
            breakdown3: breakdown3,
            breakdown4: breakdown4,
            breakdown5: breakdown5,
        }

        this.setState({
            isGenerated: true
        })
    }

    render() {
        if (this.state.isGenerated) {
            return <Navigate to={"/result"} />
        }

        return (
            <div className="animated fadeIn" style={{ height: '100%' }}>
                <Container className="wrapper h-100" style={{ height: '100%' }} >
                    <Row style={{ height: '100%', padding: '60px 80px' }}>
                        <Col>
                            <Card
                                className="text-center card1"
                                style={{ backgroundImage: "url(/images/Background.svg)", border: 'none', borderRadius: '0' }}
                            >
                                <CardTitle className="card-title">
                                    Tax-o-tron
                                </CardTitle>
                                <CardText className="card-subtitle">
                                    The free and simple online tax calculator.
                                </CardText>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card2" style={{ height: '100%', paddingLeft: '16px', paddingRight: '16px', border: '0' }}>
                                <CardTitle className="heading-2">
                                    Caculate you tax
                                </CardTitle>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Input
                                            className="input-content"
                                            placeholder="Fields marked with * are mandatory"
                                            invalid
                                            disabled
                                            style={{
                                                backgroundColor: '#FFFFFF',
                                                border: '2px solid #8477C9',
                                                boxSizing: 'border-box',
                                                boxShadow: '0px 4px 8px #E7E7FF',
                                                borderRadius: '5px'
                                            }}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="country" className="label">
                                            Select your country of residence *                                                    </Label>
                                        <Input
                                            id="country"
                                            name={"country"}
                                            type="select"
                                            className="input-content"
                                        >
                                            <option>
                                                Australia
                                            </option>
                                            <option>
                                                New Zealand
                                            </option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="year" className="label">
                                            Select an income year *                                                    </Label>
                                        <Input
                                            id="year"
                                            name="year"
                                            type="select"
                                            className="input-content"
                                        >
                                            <option>
                                                2020 - 2021
                                            </option>
                                            <option>
                                                2019 - 2020
                                            </option>
                                            <option>
                                                2018 - 2019
                                            </option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="taxIncome" className="label">
                                            Enter your total taxable income for the income year *                                                    </Label>
                                        <InputGroup className="input-content">
                                            <InputGroupText>
                                                $
                                            </InputGroupText>
                                            <NumberFormat
                                                id="taxIncome"
                                                name="taxIncome"
                                                placeholder="Amount"
                                                thousandSeparator={true}
                                            />
                                            <InputGroupText>
                                                .00
                                            </InputGroupText>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup className="text-center">
                                        <Button
                                            type="submit"
                                            style={{
                                                backgroundColor: '#8477c9',
                                                boxShadow: '0px 4px 8px #e7e7ff',
                                                borderRadius: '5px',
                                                width: '100%'
                                            }}
                                        >
                                            Calculate
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div >
        )
    }
}

export interface incomeInfoModel {
    country: string,
    year: string,
    taxIncome: number,
    tax: number
}

export interface breakdownInfoModel {
    breakdown1: Number,
    breakdown2: Number,
    breakdown3: Number,
    breakdown4: Number,
    breakdown5: Number
}

export default Home;
