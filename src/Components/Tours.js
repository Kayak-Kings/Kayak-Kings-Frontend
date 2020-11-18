import React, { Component } from 'react'
import {
  CardGroup, 
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button
} from 'reactstrap';

class Tours extends Component{
  render(){
    return(
      <div>
        <CardGroup>
          <Card>
            <CardImg top width="150%" src='https://via.placeholder.com/150' alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <Button>Book This Tour</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="150%" src='https://via.placeholder.com/150' alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Book This Tour</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="150%" src='https://via.placeholder.com/150' alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button>Book This Tour</Button>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    )
  }
}

export default Tours