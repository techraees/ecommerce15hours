import { useState } from "react";
import ImageResizer from "react-image-file-resizer";

const imageResizer = () => {
  const [image, setImage] = useState("");
  const fileHandler = (e) => {
    try {
      ImageResizer.imageFileResizer(
        e.target.files[0],
        200,
        200,
        "JPEG",
        100,
        0,
        (uri) => {
          setImage(uri);
        },
        "base64",
        400,
        50
      );
      console.log(image);
    } catch (error) {
      throw new Error(error);
    }
  };
  console.log(image);
  return (
    <div>
      <input type="file" name="file" id="file" onChange={fileHandler} />
      <img src={image} alt="" />
    </div>
  );
};

export default imageResizer;
