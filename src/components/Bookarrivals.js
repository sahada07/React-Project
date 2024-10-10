import React from "react";
import productArrivals from "../Database/ArrivalsBooksData";
import { Pagination,Autoplay,Navigation } from "swiper/modules";
import { Swiper,SwiperSlide } from "swiper/react";
import Arrival from "./Arrival";

const Bookarrivals=()=>{
  let allArrivals=productArrivals.map((arrive)=>{
    return(<SwiperSlide key={arrive.id}>
  <Arrival key={arrive.id}
    name={arrive.name}
    image={arrive.image}
    price={arrive.price}/>
  </SwiperSlide>)
  })

  const [data,setData] = React.useState([...allArrivals])

  return(
    
    <div>
   
    <section className="arrivals" id ="arrivals">
    <h1 className="heading"> <span> new arrivals </span></h1>
         
         
    
         <div className=" swiper arrivals-slider">
           
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




export default Bookarrivals;



