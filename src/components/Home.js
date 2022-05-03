import React from "react";

function Home()
{
    return(
        <div>
            <div className="add-to-cart">
                <img src="images/carts.png"></img>
            </div>
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
                    <button>Add to Cart</button>
                    
                </div>
            </div>
        </div>
    )
}
export default Home;
