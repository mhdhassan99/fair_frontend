import React from 'react';
import '../componentStyles/itemCard.css';

function ItemCard(props) {
    console.log(props)
  return (
    <div className="productCard">
      <div className="productImageContainer">
        <div className="productImage">
          <div className="imageContainer">
            <img className="image" alt="" src={props.item.productImages[0]} />
          </div>
          
            <div className="favButton">favorites button</div>
    
        </div>
      </div>
      <div className="productInfo">
        <div className="productTitle">
          <span>{props.item.product.title}</span>
        </div>
        <div className="productPrice">
          <span>{props.item.product.price}</span>
        </div>
        <div className="productReviews">
          <span>number of reviews(optional)</span>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
