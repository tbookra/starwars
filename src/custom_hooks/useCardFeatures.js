import { useState, useEffect } from "react";

const useCardFeatures = (obj) => {
  const [height, setHeight] = useState("");
  const [textColor, setTextColor] = useState("black");
  useEffect(() => {
    setHeight(obj?.height);
    if (obj?.gender === "male") {
      setTextColor(obj?.hair_color === "blond" ? "yellow" : obj?.hair_color);
    } else {
      setTextColor(obj?.eye_color);
    }
  }, [obj]);
  return {
    height: `${height}px`,
    textColor,
  };
};
export default useCardFeatures;
