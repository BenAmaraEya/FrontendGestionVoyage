import React from "react";
import '../styles/home.css';
import Fanslove from "../components/fanslove/fanslove";
import ImagesGallery from "../components/image-gallery/ImagesGallery";
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4'; // Mettez le chemin correct vers votre vidéo
import Subtitle from './../shared/Subtitles';
import worldImg from '../assets/images/world.png';
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import experience from "../assets/images/experience.png"
import FeaturefTourList from "../components/Featured-tours/FeatuedTourList";
const Home = () => {
    return <>
        <section className="hero-section">
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-center">
                                <Subtitle subtitle={"Know Before you go"} />
                                <img src={worldImg} alt="World" style={{ width: '2.3rem', height: '2.3rem' }} />
                            </div>
                            <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-color)', lineHeight: '2rem' }}>
                                Traveling opens the door to creating memories. Explore the world and let yourself be swept away by adventure, as every destination you explore holds a unique experience that will be etched in your memory forever.
                            </p>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box" style={{ height: '350px' }}>
                            <img src={heroImg} alt="Hero Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-4" style={{ height: '350px' }}>
                            <video src={heroVideo} controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                            </video>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-5" style={{ height: '350px' }}>
                            <img src={heroImg02} alt="Hero Image 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </Col>
                    <SearchBar/>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg="3">
                        <h5 className="services__subtitles">
                            What we serve?
                        </h5>
                        <h2 className="services__title"> We offer our best services</h2>
                    </Col>
                    <Col>
                    <ServiceList /></Col>
                </Row>
            </Container>
        </section>
        {/*******************          /*/}
        <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <Subtitle  subtitle={'Explore'}/>
                        <h2 className="featured__tour-title">
                            Our feature tours
                        </h2>
                    </Col>
                    <FeaturefTourList />
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="experinece__content">
                            <Subtitle  subtitle={'Experience'}/>
                            <h2> With our all experience  <br/> we will  serve you</h2>
                            <p> abcd</p>
                        </div>
                        <div className="counter__wrapper 
                        d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successfull Trip</h6>
                            </div>
                           
                            <div className="counter__box">
                                <span>2k+</span>
                                <h6>Regular Clients</h6>
                            </div>
                           
                            <div className="counter__box">
                                <span>15</span>
                                <h6>Years experience</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="experience__img">
                            <img src={experience}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Gallery'}/>
                        <h2 className="gallery__title">Visit our customers tour gallery </h2>
                    </Col>
                    <Col lg='12'>
                        <ImagesGallery/>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Fans Love'}/>
                        <h2 className="love__title">
                            What our fans say about us
                        </h2>
                    </Col>
                    <Col lg='12'>
                        <Fanslove/>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    
};

export default Home;
