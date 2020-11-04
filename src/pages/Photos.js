import React, { useContext } from "react";
import { Context } from "../PicsContext";
import Image from "../components/Image";

function Photos() {
  const { allPhotos } = useContext(Context);
  console.log(allPhotos);
  return (
    <div>
      <h2>Photos</h2>
      {allPhotos.map((photo) => (
        <Image key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

export default Photos;
