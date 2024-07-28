import { useState, useEffect } from "react";

const useCardFeatures = (starDetails) => {
  const [height, setHeight] = useState(0);
  const [className, setClassName] = useState("general")
  
  useEffect(()=>{
    if(starDetails?.gender === "male"){
      setClassName(`${starDetails?.hair_color.replace(", ","_")}`)
      
    } else {
      setClassName(`${starDetails?.eye_color}`)
    }
    setHeight(starDetails?.height)
  },[starDetails])

  return {
    className,
    height,
  };
};
export default useCardFeatures;
