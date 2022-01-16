import React, { Dispatch, useEffect } from "react";
// import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import UseStorage from "./UseStorage";
import "./Form.css";
import { Images } from "../interfaces/images-inteface";

// type ProgressProps = {
//   image: Dispatch<Images>;
//   setImage: Dispatch<Images>;
// };

// const ProgressBar: React.FC<ProgressProps> = ({ image, setImage }) => {
const ProgressBar = ({ image }: { image: any }) => {
  const { url, progress } = UseStorage(image);

  console.log(url, progress);

//   useEffect(() => {
//     if (url) {
//       // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//       setImage(null!);
//     }
//   }, [url]);

  return <div className="progress-bar" style={{ width: progress + "%" }} />;
};

export default ProgressBar;
