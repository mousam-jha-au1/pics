import React, { useContext, useState } from "react";
import { Context } from "../PicsContext";

function Image({ photo }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems } = useContext(Context);

  function favoriteIcon() {
    if (photo.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(photo.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(photo.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    const existsInCart = cartItems.some((item) => item.id === photo.id);
    if (existsInCart) {
      return <i className="ri-shopping-cart-fill cart"></i>;
    } else if (hovered) {
      return (
        <i
          className="ri-shopping-cart-line cart"
          onClick={() => addToCart(photo)}
        ></i>
      );
    }
  }

  return (
    <div
      className="image"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={photo.url} alt="pics-gallery" />

      {favoriteIcon()}
      {cartIcon()}
    </div>
  );
}

export default Image;
