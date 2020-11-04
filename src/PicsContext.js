import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);

  useEffect(() => {
    const photosUrl =
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    fetch(photosUrl)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);
  console.log(allPhotos);

  return <Context.Provider value={{ allPhotos }}>{children}</Context.Provider>;
}

export { Context, ContextProvider };
