import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  // state to store the fetched images
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Load the images
  useEffect(() => {
    const photosUrl =
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    fetch(photosUrl)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  // favorite
  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(updatedArr);
  }

  // cart
  function addToCart(newItem) {
    setCartItems((prevState) => [...prevState, newItem]);
  }

  return (
    <Context.Provider
      value={{ allPhotos, cartItems, toggleFavorite, addToCart }}
    >
      {" "}
      {children}{" "}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
