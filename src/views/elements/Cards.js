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
            <CardImg src="https://moneylife-staging-docker.s3-ap-southeast-1.amazonaws.com/media/L1.png" top width="100%" alt="laptop" />
            <CardBody>
              <CardTitle>Lesson 1</CardTitle>
              <CardText>
                Setting up your MoneyLiFETM Sponsor Account
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg src="https://moneylife-staging-docker.s3-ap-southeast-1.amazonaws.com/media/L1.png" top width="100%" alt="laptop" />
            <CardBody>
              <CardTitle>Lesson 4</CardTitle>
              <CardText>
                Powerful Financial Coaching Questions (BONUS)
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <CardImg src={laptopImage} top width="100%" alt="laptop" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
         <Card>
            <CardImg src={laptopImage} top width="100%" alt="laptop" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default CardsPage;
