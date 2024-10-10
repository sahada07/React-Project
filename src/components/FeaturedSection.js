import React from "react";
import productFeatured from "../Database/featuredBooksData";
import BookCard from "./BookCard";
import { Pagination,Autoplay,Navigation } from "swiper/modules";
import { Swiper,SwiperSlide } from "swiper/react";


const FeaturedSection = ()=> {


    let allFeaturedBooks = productFeatured.map((featured)=>
        { return (<SwiperSlide key={featured.id}>
        <BookCard key ={featured.id} 
          name={featured.name} 
          image={featured.image} 
          price={featured.price}/>
          </SwiperSlide>
          )
})
      
        const [data, setData] = React.useState([...allFeaturedBooks]);
    



    return(
    
 <div>

 <section className="featured" id ="featured">
 <h1 className="heading"> <span> featured books </span></h1>
      
      
 
      <div className=" swiper featured-slider">
        
      <div className="swiper-wrapper">
        <Swiper
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay:9500,
          disableOnInteraction:false,
        }}

        navigation={true}
        modules={[Autoplay,Pagination,Navigation]}
        className="mySwiper"
        breakpoints={{
          0:{
            slidesPerView:1,
          },

          450:{
            slidesPerView:2,
          },

          768:{
            slidesPerView:3,
          },

          1024:{
            slidesPerView:4,
          },



        }}
        
        > 
        {data} 
        </Swiper>
        </div>
          
  
           <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div> 
  
      </div>
  
  

  </section>


  
  </div>
 
     
       
   
    
  
    
    )
}
 export default FeaturedSection;