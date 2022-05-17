import React, { useEffect, useState } from "react";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ModalImage from "react-modal-image";
import "./App.css";
import Form from "../Form/Form";
import { GetImagesAPI } from "../../apiService";

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    GetImagesAPI().then((data) => setImages(data));
  }, []);

  return (
    <div className="app">
      <div className="mainContainer">
        {images &&
          images.map((img) => (
            <div key={img.id} className="imgContainer">
              <LazyLoadComponent //with lazyloadImage and lazyloadComponent we can load images as we scroll down
                //as we do not need all the images at once,
                //by doing this we will save lot of http requests, therefore it is more performant
                className="mainImg"
                data-testid="img-test"
              >
                <ModalImage //ModalImage to review full size images
                  small={`${img.url}.jpg`}
                  large={`${img.url}.jpg`}
                  alt={img.alt_description}
                  hideDownload={true}
                  hideZoom={true}
                  className="modal-image"
                />
              </LazyLoadComponent>

              <LazyLoadImage
                src={`${img.user.profile_image}.webp`}
                alt={img.user.bio}
                height={80}
                width={80}
                className="thumbnail"
              />
            </div>
          ))}
      </div>
      <Form />
    </div>
  );
};

export default App;
