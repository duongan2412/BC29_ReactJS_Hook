import React from 'react'
import { Carousel as CarouselAntd } from 'antd';

const contentStyle = {
    // height: '160px',
    // color: '#fff',
    // lineHeight: '160px',
    // textAlign: 'center',
    // background: '#364d79',
    width: "100%",
    height: "550px",
    objectFit: "cover"
};

export default function Carousel() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <CarouselAntd afterChange={onChange}>
            <div>
                <img src="./images/MinionsTROG_banner.jpg" alt="..." />
            </div>
            <div>
                <img src="./images/ThorLoveAndThunder_banner.jpg" alt="..." />
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </CarouselAntd>
    );
};

