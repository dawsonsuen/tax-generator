import { inject, observer } from 'mobx-react';
import * as React from 'react';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import { Container, Card, CardBody, Row, Col, CardTitle, CardText, Form, FormGroup, Input, Label, InputGroup, InputGroupText, Button, CardSubtitle, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { AppState } from '../..';
import { incomeInfoModel } from '../Home';

interface State {
    incomeInfo: incomeInfoModel
}

@inject("IncomeStore")
@observer
class Result extends React.Component<AppState> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div className="animated fadeIn" style={{ height: '100%' }}>
                <Container className="wrapper h-100" style={{ height: '100%' }}>
                    <Row style={{ height: '100%', padding: '60px 80px' }}>
                        <Col>
                            <Card
                                className="card4"
                                style={{ backgroundColor: 'white', height: '100%', paddingLeft: '16px', paddingRight: '16px', border: 'none', borderRadius: '0' }}>
                                <CardTitle className="heading-2">
                                    Your tax results
                                </CardTitle>
                                <Label for="country" className="label">
                                    Select your country of residence *
                                </Label>
                                <Input
                                    id="country"
                                    name={"country"}
                                    type="select"
                                    disabled={true}
                                    className="input-content"
                                >
                                    <option>
                                        {this.props.IncomeStore.incomeInfo?.country}
                                    </option>
                                </Input>

                                <Label for="year" className="label">
                                    Select an income year *
                                </Label>
                                <Input
                                    id="year"
                                    name="year"
                                    type="select"
                                    disabled={true}
                                    className="input-content"
                                >
                                    <option>
                                        {this.props.IncomeStore.incomeInfo?.year}
                                    </option>
                                </Input>

                                <Label for="taxIncome" className="label">
                                    Enter your total taxable income for the income year *                                                    </Label>
                                <InputGroup className="input-content">
                                    <InputGroupText>
                                        $
                                    </InputGroupText>
                                    <NumberFormat
                                        id="taxIncome"
                                        name="taxIncome"
                                        value={this.props.IncomeStore.incomeInfo?.taxIncome}
                                        thousandSeparator={true}
                                        disabled={true}
                                    />
                                    <InputGroupText>
                                        .00
                                    </InputGroupText>
                                </InputGroup>

                                <Link to="/" className="go-back">Go back to previous screen</Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                className="card4"
                                style={{ height: '100%', backgroundImage: "url(/images/Background.svg)", border: 'none', borderRadius: '0', paddingLeft: '16px', paddingRight: '16px' }}
                            >
                                <CardTitle className="label-white">
                                    Your estimated taxable income is:
                                </CardTitle>
                                <CardText className="text-center" outline={true} style={{ background: 'white', borderRadius: '3px'}}>
                                    <NumberFormat
                                        id="taxIncome"
                                        name="taxIncome"
                                        value={this.props.IncomeStore.incomeInfo?.tax}
                                        thousandSeparator={true}
                                        disabled={true}
                                        prefix={'$'}
                                        suffix={'.00'}
                                        displayType={'text'}
                                        className="card4-income"
                                    />
                                </CardText>

                                <CardSubtitle className="label-white">
                                    Breakdown
                                </CardSubtitle>
                                <ListGroup>
                                    <ListGroupItem>
                                        <ListGroupItemHeading className="label">
                                            Tax bracket
                                        </ListGroupItemHeading>
                                        <ListGroupItemText>
                                            $0 - $18,200
                                            <span style={{ float: 'right' }}>${this.props.IncomeStore.breakdownInfo?.breakdown1}</span>
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <ListGroupItemHeading className="label">
                                            Tax bracket
                                        </ListGroupItemHeading>
                                        <ListGroupItemText>
                                            $18,201 - $45,000
                                            <span style={{ float: 'right' }}>${this.props.IncomeStore.breakdownInfo?.breakdown2}</span>

                                        </ListGroupItemText>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <ListGroupItemHeading className="label">
                                            Tax bracket
                                        </ListGroupItemHeading>
                                        <ListGroupItemText>
                                            $45,001 - $120,000
                                            <span style={{ float: 'right' }}>${this.props.IncomeStore.breakdownInfo?.breakdown3}</span>
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <ListGroupItemHeading className="label">
                                            Tax bracket
                                        </ListGroupItemHeading>
                                        <ListGroupItemText>
                                            $120,001 - $180,000
                                            <span style={{ float: 'right' }}>${this.props.IncomeStore.breakdownInfo?.breakdown4}</span>
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <ListGroupItemHeading className="label">
                                            Tax bracket
                                        </ListGroupItemHeading>
                                        <ListGroupItemText>
                                            $180,001+
                                            <span style={{ float: 'right' }}>${this.props.IncomeStore.breakdownInfo?.breakdown5}</span>
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                </ListGroup>

                            </Card>

                        </Col>
                    </Row>

                </Container>



            </div>
        )
    }
}

export default Result;
