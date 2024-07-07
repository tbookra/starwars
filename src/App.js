import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { setHero } from "./features/hero/heroSlice";
import useCardFeatures from "./custom_hooks/useCardFeatures";
import Card  from "./app/components/Card";
import "./App.css";

const baseUrl = "https://swapi.dev/api/people/?search=";

function App() {
  const hero = useSelector((state) => state.hero.heroName);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [cardDetails, setCardDetails] = useState(null);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSend = async () => {
    console.log(`${baseUrl}${inputValue}`);
    const res = await axios.get(`${baseUrl}${inputValue}`);
    setCardDetails(res.data.results[0])
    dispatch(setHero(inputValue));
  };
  const {height, textColor} = useCardFeatures(cardDetails)
console.log("cardDetails",cardDetails);
console.log("height",height);
console.log("textColor",textColor);
  return (
    <div className="App">
      <div className="inputSection">

      <p>{hero}</p>
     
      <input type="text" onChange={handleChange} value={inputValue} />
      <button onClick={handleSend}>send</button>
      </div>
      <Card height={height} textColor={textColor} name={cardDetails?.name} />
      {/* <div  style={{
        height: height,
        width: "350px",
        backgroundColor: "red",
        color: "black"

      }} >
        <p>name:</p>
        <p>{cardDetails?.name}</p>
      </div> */}
    </div>
  );
}

export default App;
