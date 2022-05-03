import React from "react";


function Header(props)
{
  console.warn("Header:",props)
    return(
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="images/carts.png"></img>
            </div>
          
        </div>
    )
}
export default Header;
