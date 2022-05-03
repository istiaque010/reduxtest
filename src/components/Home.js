import React from "react";


function Home(props)
{
  console.warn("Home:",props)
    return(
        <div>
            
            <h1>Home component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="images/phone.PNG"/>
                </div>
                <div className="txt-wrapper item">
                   <span>i-Phone</span>
                   <span>1000-USD</span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={()=>props.addToCartHandler({price:1000, name:'i phone 11 pro'})}
                    
                    >Add to Cart</button>

<button 
                    onClick={()=>props.removeToCartHandler({})}
                    
                    >Remove Cart</button>
                    
                </div>
            </div>
        </div>
    )
}
export default Home;
