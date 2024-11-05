import React from 'react'
import './product.css'
import { Col, Container, Row } from 'react-bootstrap'
import Product1 from '../../../assets/product1.jpg'
import Product2 from '../../../assets/product2.jpg'
import Product3 from '../../../assets/product3.jpg'

function Product() {
  return (
    <div className='product'>
        <Container>
            <Row>
                <Col className='productHead'>
                    <a href="#">All Course</a>
                    <a href="#">Graphics & Multimedia</a>
                    <a href="#">Web & Software</a>
                    <a href="#">Digital Marketing</a>
                    <a href="#">3D Animation & Visualization</a>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <div className='thumb'>
                        <img src={Product1}></img>
                        <p>All Course</p>
                        <h3>Professional Graphic Design</h3>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='thumb'>
                        <img src={Product2}></img>
                        <p>All Course</p>
                        <h3>Professional Motion Graphics</h3>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='thumb'>
                        <img src={Product3}></img>
                        <p>All Course</p>
                        <h3>Professional UI/UX Design</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Product