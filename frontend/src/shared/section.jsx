import React from "react";
import './section.css'
import { Container, Row ,Col } from "reactstrap";
const section =({title})=>{
    return (
        <section className="section">
            <Container>
                <Row>
                    <Col lf='12'>
                        <h1>{title}</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};
export default section;
