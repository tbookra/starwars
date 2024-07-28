import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { setHero } from "./features/hero/heroSlice";
import useClassSetter from "./custom_hooks/useClassSetter";
import Card from "./app/components/Card";
import "./App.css";

const baseUrl = "https://swapi.dev/api/people/?search=";


function App() {
  const hero = useSelector((state) => state.hero.heroName);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [starDetails, setStarDetails] = useState(null);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const { className,height } = useClassSetter(starDetails);
  const handleSend = async () => {
    const res = await axios.get(`${baseUrl}${inputValue}`);
    setStarDetails(res.data.results[0]);
    dispatch(setHero(inputValue));
  };
  
  return (
    <div className="App">
      <div className="inputSection">
        <p>{hero}</p>
        <p>{starDetails?.hair_color}</p>
        <input type="text" onChange={handleChange} value={inputValue} />
        <button onClick={handleSend}>send</button>
      </div>
      <Card  className={className} name={starDetails?.name} height={height} />
    </div>
  );
}

export default App;
