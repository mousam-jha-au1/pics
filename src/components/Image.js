import React from "react";

function Image({ photo: { url } }) {
  return (
    <div>
      <img src={url} />
    </div>
  );
}

export default Image;
