import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/Nfts/bighead.svg';

import Arrow from '../assets/Arrow.svg'

const Container = styled.div`
width: 25vw;
height: 55vh;

.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};
    font-family: 'Akaya Telivigala', cursive;
    border-radius: 20px;
    font-size: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
}

.swiper-button-prev{
    color: ${props => props.theme.text};
    left: 0;
    width: 4rem;
    top: 60%;
        transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }
}
`

const Carousel = () => {
  return (
    <Container>
      <Swiper
      autoplay={{
        delay:2000,
        disableOnInteraction:false,
      }}
      pagination={{
        type:'fraction',
      }}
        scrollbar={{
            draggable:true
        }}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        

        className="mySwiper"
      >
        <SwiperSlide>?</SwiperSlide>
        <SwiperSlide>?</SwiperSlide>
        <SwiperSlide>?</SwiperSlide>
        <SwiperSlide>?</SwiperSlide>
        <SwiperSlide>?</SwiperSlide>
        <SwiperSlide>?</SwiperSlide>
        <SwiperSlide>?</SwiperSlide>
        <SwiperSlide>?</SwiperSlide>
        <SwiperSlide>?</SwiperSlide>
        <SwiperSlide>?</SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel