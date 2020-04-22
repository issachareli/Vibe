import React, { Component } from 'react';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, CardImg, CardHeader, CardBody } from 'reactstrap';
import ModalVideo from 'react-modal-video'
import ReactDOM from 'react-dom'


class TabsPage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      isOpen: false,
      isOpen2: false,
      
    }
    this.openModal = this.openModal.bind(this)
    this.openModal1 = this.openModal1.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }
    openModal1 () {
    this.setState({isOpen2: true})
  }
  
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              href="#"
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              Getting Started
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}
            >
              Marketing
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
              <div className="mb-4 m-t"><h4>How to use your MoneyLiFE Sponsor’s Portal (4 Lessons)</h4></div>
              </Col>
        <Col md={4}>
        <Card>
                 <a href="https://www.youtube.com/watch?v=FQYl0o12fxY&t=8s" target="_blank" class="custom-card">
 <CardImg src="https://moneylife-staging-docker.s3-ap-southeast-1.amazonaws.com/media/L1.png" top width="100%" alt="laptop" />
            </a>
              <CardBody>
              <CardTitle><b>Lesson 1</b></CardTitle>
              <CardText>
                Setting up your MoneyLiFETM Sponsor Account
              </CardText>
              <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='FQYl0o12fxY' onClose={() => this.setState({isOpen: false})} />
        <Button color="primary"onClick={this.openModal}>Watch now</Button>
            </CardBody>
          </Card>
          <Card>      
          <a href="https://www.youtube.com/watch?v=Lfegw-NHAHI&t=28s" target="_blank" class="custom-card">
            <CardImg src="https://moneylife-staging-docker.s3-ap-southeast-1.amazonaws.com/media/L4.png" top width="100%" alt="laptop" />
                 </a> <CardBody>
              <CardTitle><b>Lesson 4</b></CardTitle>
              <CardText>
                Powerful Financial Coaching Questions (BONUS)
              </CardText>
<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='Lfegw-NHAHI' onClose={() => this.setState({isOpen: false})} />
        <Button color="primary"onClick={this.openModal1}>Watch now</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
                     <a href="https://www.youtube.com/watch?v=dE8yF5zHrr0&t=2s" target="_blank" class="custom-card">
                     <CardImg src="https://moneylife-staging-docker.s3-ap-southeast-1.amazonaws.com/media/L2.png" top width="100%" alt="laptop" />
             </a>
              <CardBody>
              <CardTitle><b>Lesson 2</b></CardTitle>
              <CardText>
                How to create a MoneyLiFE™ Questionnaire
              </CardText>
<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='dE8yF5zHrr0' onClose={() => this.setState({isOpen: false})} />
        <Button color="primary"onClick={this.openModal}>Watch now</Button>
          </CardBody>
          </Card>
        </Col>
        <Col md={4}>
         <Card>
                    <a href="https://www.youtube.com/watch?v=pDLCJfLbzUo&t=20s" target="_blank" class="custom-card">
            <CardImg src="https://moneylife-staging-docker.s3-ap-southeast-1.amazonaws.com/media/L3.png" top width="100%" alt="laptop" />
            </a>
            <CardBody>
              <CardTitle><b>Lesson 3</b></CardTitle>
              <CardText>
                Understanding the MoneyLiFE™ Report
              </CardText>
<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='pDLCJfLbzUo' onClose={() => this.setState({isOpen: false})} />
        <Button color="primary"onClick={this.openModal}>Watch now</Button>
            </CardBody>
          </Card>
   
        </Col>
      </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
              <div className="mb-4 m-t"><h4>Marketing videos to help you introduce MoneyLiFE™.</h4></div>
              </Col>
        <Col md={4}>
        <Card>
                <a href="https://www.youtube.com/watch?v=t4abJJxqAKs" target="_blank" class="custom-card">
            <CardImg src="https://moneylife-staging-docker.s3-ap-southeast-1.amazonaws.com/media/L5.png" top width="100%" alt="laptop" />
            </a>
<CardBody>
              <CardTitle><b>Marketing Video 1</b></CardTitle>
              <CardText>
                Introducing the MoneyLiFE™ Profile!
              </CardText>
<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='t4abJJxqAKs' onClose={() => this.setState({isOpen: false})} />
        <Button color="primary"onClick={this.openModal}>Watch now</Button>
            </CardBody>
                </Card> 
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default TabsPage;
