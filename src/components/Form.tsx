import React, { useState } from "react";
import { Images } from "../interfaces/images-inteface";
import "./Form.css";

interface Event<T = EventTarget> {
  target: T;
}

const Form = () => {
  const [image, setImage] = useState<Images | null | any>(null);
  const [error, setError] = useState<string | null>(null);

  const Types = ["image/png", "image/jpg", "image/svg", "image/webp"];

  function myEventListener(event: Event<HTMLInputElement>) {
    const selectedImg = event.target.files && event.target.files[0];
    console.log(selectedImg);

    if (selectedImg && Types.includes(selectedImg.type)) {
      setImage(selectedImg);
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
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Form;
