import React, { useState } from "react";
import { Images } from "../interfaces/images-inteface";
import ProgressBar from "./ProgressBar";
import "./Form.css";

interface Event<T = EventTarget> {
  preventDefault: any;
  target: T;
}

const Form = () => {
  const [image, setImage] = useState<Images | null | any>(null);
  const [error, setError] = useState<string | null>(null);

  const Types = ["image/png", "image/jpeg", "image/svg", "image/webp"];

  function myEventListener(event: Event<HTMLInputElement>) {
    event.preventDefault();
    const selectedImg = event.target.files && event.target.files[0];
    console.log(selectedImg);

    if (selectedImg && Types.includes(selectedImg.type)) {
      setImage(selectedImg);
      setError("");
    } else {
      setImage(null);
      setError("Please select an image file like png or jpg or svg or webp");
    }
  }

  return (
    <div className="form-container">
      <form className="formulaire">
        Ajouter une image
        <input type="file" onChange={myEventListener} />
        <div>{error && <div className="error">{error}</div>}</div>
        {image && <div>{image.name} </div>}
        {/* {image && <ProgressBar image={image} setImage={setImage} />} */}
        {image && <ProgressBar image={image} />}
      </form>
    </div>
  );
};

export default Form;
