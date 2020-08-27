import React from 'react';
import '../componentStyles/itemCard.css';

function ItemCard() {
  return (
    <div className="productCard">
      <div className="productImageContainer">
        <div className="productImage">
          <div className="imageContainer">
            <img className="image"
            src="https://secure.img1-ag.wfcdn.com/im/86278188/resize-h310-w310%5Ecompr-r85/4957/49577025/Kiril+Duvet+Cover+Set.jpg" />
          </div>
          <div className="favButtonContainer">
            favorites button
          </div>
        </div>
      </div>
      <div className="productInfo">
        <div className="productTitle">
          <span>title</span>
        </div>
        <div className="productPrice">
          <span>price</span>
        </div>
        <div className="productReviews">
          <span>number of reviews(optional)</span>
        </div>
      </div>
    </div>
  )
}

export default ItemCard;
