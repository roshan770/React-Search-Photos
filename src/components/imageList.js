import React from "react";
import ImageCard from "./imageCard";
import "./imageList.css";

const ImageList = (props) => {
  console.log(props.image);
  const image = props.image.map((img) => {
    return <ImageCard key={img.id} image={img} />;
  });
  return <div className="image-list">{image}</div>;
};

export default ImageList;
