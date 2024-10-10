import React from "react";
import productArrivals from "../Database/ArrivalsBooksData";

const Arrival =({id,name,image,price})=>{
  return(
    <div>
        <section class="arrivals" id="arrivals">




           <div class="swiper-wrapper">

                 <div class="swiper-slide swiper-slide swiper-slide box">
                   <div class="image">
                        <img src={image} alt="book"/>
                     </div>
                     <div class="content">
                         <h3>{name}</h3>
                         <div class="price">{price}<span>{price}</span></div>
                         
                         <div class="stars">
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i>
                           <i class="fas fa-star"></i> 
                           <i class="fas fa-star-half-alt"></i>
                          </div>
                     </div>
                    
                   </div>

    </div>
    



</section>

</div>


  )
}

export default Arrival