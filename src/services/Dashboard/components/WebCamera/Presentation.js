import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
const videoConstraints = {
  width: 150,
  height: 300,
  facingMode: "user",
};
const Presentation = () => {
  const [image, setImage] = useState(null);
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    console.log(imageSrc);
  }, [webcamRef]);
  return (
    <div>
      <h1>WEB CAMERA</h1>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <RadioButtonUncheckedIcon
        className="Webcam_button"
        onClick={capture}
        fontSize="large"
      />
      <img src={image} alt="" />
    </div>
  );
};

export default Presentation;
