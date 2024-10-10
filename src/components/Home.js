import React from 'react';
import productHome from '../Database/homeProductsData'; 
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 

const Home = () => {
    const allHomeProducts = productHome.map((home) => (
        <SwiperSlide key={home.id}>
            <div className="swiper-wrapper">
                <img 
                    src={home.image} 
                    alt={`${home.name} picture`} 
                    style={{
                        width: '100%',
                        maxWidth: '200px', 
                        height: 'auto',
                        objectFit: 'contain'
                    }}
                />
                <h3 style={{
                    fontSize: '1rem',
                    marginTop: '10px',
                    color: '#333'
                }}>{home.name}</h3>
            </div>
        </SwiperSlide>
    ));

    return (
        <section className="home" id="home">
            <div className="row">
                <div className="content">
                    <h3>Upto 75% off</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam dolorum, quaerat, dolores et iure sunt porro odit id a blanditiis repellat placeat quia voluptatum ducimus cum nobis magnam minus.</p>
                    <a href="Product.html" className="btn">Shop now</a>
                </div>
            
                <div className="swiper books-slider">
                    <div className="swiper-wrapper">
                        <Swiper
                            spaceBetween={10}
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                450: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                        > 
                            {allHomeProducts}
                        </Swiper>
                    </div>
                    <img src="/images/bookimages/BookShelf.jpg" className="stand" alt="stand"/> 
                </div>
            </div>
        </section>
    );
};

export default Home;