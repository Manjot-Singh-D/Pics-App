import React, { useState } from "react";
import "./ImageList.css";
import copy from "copy-to-clipboard";

function ImageList({ images }) {
  const [imgURL, setimgURL] = useState("");
  const Copytext = () => {
    copy(imgURL);
  };
  const onImageClick = (url) => {
    setimgURL(url);
    Copytext();
  };
  return (
    <div className="imageList">
      {images.map((image) => {
        return (
          <img
            className="image"
            key={image.id}
            src={image.urls.regular}
            alt={image.description}
            onDoubleClick={() => onImageClick(image.urls.regular)}
          />
        );
      })}
    </div>
  );
}

export default ImageList;
