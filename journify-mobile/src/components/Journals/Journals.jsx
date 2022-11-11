import React from 'react';
import Single from './Single-View/Single';
import newJ from '../../assets/images/journify-new-journal.png';
import placeholder from '../../assets/images/placeholder-image.jpg';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import './Journals.css'

// import required modules
import { Navigation } from "swiper";

const Journals = () =>
{
  return (
    <section id="journals">
        <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView='auto'
            spaceBetween={30}
        >
            <SwiperSlide>
                <a href="#upload">
                    <div class="journal card bg-light width18">
                        <img class="card-img-top img-preview" src={newJ} alt="A stylized pencil writing on a textured white background."/>
                        <div class="card-body">
                            <h2 class="card-title">A new journey...</h2>
                        </div>
                    </div>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a href="click for single journal">
                    <div class="journal card bg-light width18">
                        <img class="card-img-top img-preview" src={placeholder} alt=""/>
                        <div class="card-body">
                            <h2 class="card-title">My Example Journal</h2>
                        </div>
                    </div>
                </a>
            </SwiperSlide>
        </Swiper>
        <Single/>
    </section>
  )
}

export default Journals;