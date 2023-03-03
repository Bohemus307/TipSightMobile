import { createContext, useState } from "react";

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [imageData, setImageData] = useState({
    previewImage: null,
    base64Image: null,
  });

  return (
    <ImageContext.Provider value={{ imageData, setImageData }}>
      {children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageProvider };
