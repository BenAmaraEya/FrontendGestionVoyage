import React from "react";
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Fanslove = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        autoplaySpeed:2000,
        responive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
            
        ]
    };

    return (
        <Slider {...settings}>
            <div className="fanslove py-4 px-3">
                <p>Some content here...</p>
            
            <div className="d-flex align-items-center gap-4 mt-3">
    <img src={ava01} className="w-25 h-25 rounded-2" alt="Ahmed" />
    <div>
        <h5 className="mb-0 mt-3">Ahmed</h5>
        <p>Customer</p>
    </div>
    </div>
</div>
<div className="fanslove py-4 px-3">
                <p>Some content here...</p>
            
            <div className="d-flex align-items-center gap-4 mt-3">
    <img src={ava02} className="w-25 h-25 rounded-2" alt="Ahmed" />
    <div>
        <h5 className="mb-0 mt-3">Maram Bk</h5>
        <p>Customer</p>
    </div>
    </div>
</div>       
<div className="fanslove py-4 px-3">
                
            <p>Some content here...</p>
            
            <div className="d-flex align-items-center gap-4 mt-3">
    <img src={ava03} className="w-25 h-25 rounded-2" alt="Ahmed" />
    <div>
        <h5 className="mb-0 mt-3">Moamed</h5>
        <p>Customer</p>
    </div>
    </div>
</div>
            {/* Repeat the above structure for other testimonials */}
        </Slider>
    );
};

export default Fanslove;
