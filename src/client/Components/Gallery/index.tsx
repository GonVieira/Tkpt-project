import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { StyledGalleryBody, StyledImgContainer } from "./StyledComponents";

const Gallery = () => {
  let images = [];

  for (let i = 0; i < 500; i++) {
    images.push(
      <StyledImgContainer>
        <LazyLoadImage
          alt="foto ganda fixe"
          height="300"
          width="500"
          loading="lazy"
          src={"https://picsum.photos/2000/1200?random=" + i}
        ></LazyLoadImage>
      </StyledImgContainer>
    );
  }

  return (
    <>
      <StyledGalleryBody>
        {images}
      </StyledGalleryBody>
    </>
  );
};

export default Gallery;
