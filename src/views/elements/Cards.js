import React, { Component } from 'react';
import {
  Row,
  Button,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap';
import laptopImage from '../../assets/images/laptop.jpeg';

class CardsPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col md={4}>
        <Card>
            <CardImg href="https://www.youtube.com/watch?v=FQYl0o12fxY&t=8s" target="_blank" src="https://moneylife-staging-docker.s3-ap-southeast-1.amazonaws.com/media/L1.png" top width="100%" alt="laptop" />
            <CardBody>
              <CardTitle><b>Lesson 1</b></CardTitle>
              <CardText>
                Setting up your MoneyLiFETM Sponsor Account
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg src="https://moneylife-staging-docker.s3-ap-southeast-1.amazonaws.com/media/L4.png" top width="100%" alt="laptop" />
            <CardBody>
              <CardTitle><b>Lesson 4</b></CardTitle>
              <CardText>
                Powerful Financial Coaching Questions (BONUS)
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <CardImg src="https://moneylife-staging-docker.s3-ap-southeast-1.amazonaws.com/media/L2.png" top width="100%" alt="laptop" />
            <CardBody>
              <CardTitle><b>Lesson 2</b></CardTitle>
              <CardText>
                How to create a MoneyLiFE™ Questionnaire.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
         <Card>
            <CardImg src="https://moneylife-staging-docker.s3-ap-southeast-1.amazonaws.com/media/L3.png" top width="100%" alt="laptop" />
            <CardBody>
              <CardTitle><b>Lesson 3</b></CardTitle>
              <CardText>
                Understanding the MoneyLiFETM Report
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default CardsPage;
