import {useState} from "react";

const App = () => {
  const [count,setCount]=useState(0)
  const [gender, setGender] =useState("music");

  function onChangeValue(event) {
    setGender(event.target.value);

  }

  const components = [
    <div>
      <h2><b>Q:1 What Is Your Hobby</b></h2>
      <input type="radio" value="music"  onChange={onChangeValue} checked={gender === "music"} />Music
      <input type="radio" value="cricket"  onChange={onChangeValue} checked={gender === "cricket"}/>Cricket
      <input type="radio" value="dance"  onChange={onChangeValue} checked={gender === "dance"}/>Dance
    </div>,
    <div>
      <h2><b>Q:2 Where Is Your City</b></h2>
        <input type="radio" value="navsari"  onChange={onChangeValue} checked={gender === "navsari"}/>Navsari
        <input type="radio" value="surat"  onChange={onChangeValue} checked={gender === "surat"}/>Surat
        <input type="radio" value="baroda"  onChange={onChangeValue} checked={gender === "baroda"}/>Baroda
    </div>,

    <div>
      <h2><b>Q:3 What is your Name</b></h2>
      <input type="radio"value="Mayuri"  onChange={onChangeValue} checked={gender === "Mayuri"}/>Mayuri
      <input type="radio" value="Resu"  onChange={onChangeValue} checked={gender === "Resu"}/>Resu
      <input type="radio" value="Pratik"  onChange={onChangeValue} checked={gender === "Pratik"}/>Pratik
    </div>,
  ]

  return<div>
    {
      // render component from our components array
      components[count]
    }

    {/* show previous button if we are not on first element */}
    {count > 0 && <button onClick={() => setCount(count-1 )}>prev</button>}

    {/* hide next button if we are at the last element */}
    {count < components.length - 1 && <button onClick={() => setCount(count + 1)}>next</button>}
  </div>
}
export  default App;