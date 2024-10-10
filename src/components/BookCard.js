import React from "react";
// import { Pagination,Autoplay,Navigation } from "swiper/modules";
// import { Swiper,SwiperSlide } from "swiper/react";


const BookCard = ({id,name, image, price})=> {
    return(
    
      
 <div>
 
      
      
{/*   
      <div className=" swiper featured-slider">
  
          <div className="swiper-wrapper"> */}
    
  
          <div className="swiper-slide swiper-slide swiper-slide box">
               <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>
            
  
            <div className="image">
            <img src={image} alt='${name}picture'/>
            </div>
            <div className="content">
              <h3 className="name">{name}</h3>

  
              <div className="price">${price}<span>${price}</span></div>
              <a href="#" className="btn"> add to cart</a>
  
            </div>
  
            </div>
 
          </div>
  
 
  //     </div>
  
  
  // </div>
  
     
       
   
    
  
    
    )
}
 export default BookCard;