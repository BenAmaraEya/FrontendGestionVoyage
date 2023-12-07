import React from "react";
import './footer.css'
import { Container,Row, Col, ListGroup,ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo.png'
const quick_Link =[
    {
        path:"/home",
        display:"Home",
    },
    {
        path:"/about",
        display:"About",
    },
    {
        path:"/tours",
        display:"Tours",
    },
];
const quick_Link2 =[
    {
        path:"/gallery",
        display:"Gallery",
    },
    {
        path:"/login",
        display:"Login",
    },
    {
        path:"/register",
        display:"Register",
    },
];
const Footer =()=>{
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='3'>
                 <div className="logo">
                    <img src={logo} />
                    <p>Bonjour</p>
                    <div className="social__links
                    d-flex align-items-center gap-4">
                           <span>
                            <Link to='#'>
                            <i class="ri-youtube-fill"></i>
                            </Link>
                           </span>
                           <span>
                            <Link to='#'>
                            <i class="ri-facebook-circle-fill"></i>
                            </Link>
                           </span>
                           <span>
                            <Link to='#'>
                            <i class="ri-instagram-fill"></i>
                            </Link>
                           </span>
                           <span>
                            <Link to='#'>
                            <i class="ri-twitter-fill"></i>
                            </Link>
                           </span>
                    </div>
                 </div>
                </Col>
                <Col lg='3'>
                       <h5 className="footer__link-title">
                        Discover
                       </h5>
                       <ListGroup className="footer__quick-links">
                        {
                            quick_Link.map((item,index)=>(
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }

                       </ListGroup>
                </Col>
                <Col lg='3'>
                <h5 className="footer__link-title">
                        Quick Links
                       </h5>
                       <ListGroup className="footer__quick-links">
                        {
                            quick_Link2.map((item,index)=>(
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }

                       </ListGroup>
                </Col>
                       <Col lg='3'>
                       <h5 className="footer__link-title">
Contact                       </h5>
                       <ListGroup className="footer__quick-links">
                        {
                            
                                <ListGroupItem  className="ps-0 border-0 
                                d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span>
                                        <i class="ri-map-pin-fill"></i>
                                        
                                        </span>
                                        Adress:
                                    </h6>
                                 <p className="mb-0">Tunisie </p>
                                </ListGroupItem>
                                
                            
}<ListGroupItem  className="ps-0 border-0 
                        d-flex align-items-center gap-3">
                            <h6 className="mb-0 d-flex align-items-center gap-2">
                                <span>
                                <i class="ri-mail-fill"></i>
                                
                                </span>
                                Email
                            </h6>
                         <p className="mb-0">TravelWorld@gmail.com </p>
                        </ListGroupItem>
                        <ListGroupItem  className="ps-0 border-0 
                                d-flex align-items-center gap-3">
                                    <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span>
                                        <i class="ri-phone-fill"></i>
                                        
                                        </span>
                                        Telephone
                                    </h6>
                                 <p className="mb-0">+216 99 999 999 </p>
                                </ListGroupItem>


                       </ListGroup>
                       </Col>
                       <Col lg='12' className="text-center pt-5">
                        <p className="copyright">All rights reserved 2023</p>

                       </Col>
            </Row>
        </Container>
    </footer>
};
export default Footer;
