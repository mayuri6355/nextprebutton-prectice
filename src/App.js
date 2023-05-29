
import React from "react";
const App = () => {
  const [count, setCount] = React.useState(0);

  const components = [
    <div>
      <h2><b>Q:1 What Is Your Hobby</b></h2>
      <input type="radio"/>Music
      <input type="radio"/>Cricket
      <input type="radio"/>Dance
    </div>,
    <div>
      <h2><b>Q:2 Where Is Your City</b></h2>
        <input type="radio"/>Navsari
        <input type="radio"/>Surat
        <input type="radio"/>Baroda
    </div>,

    <div>
      <h2><b>Q:3 What is your Name</b></h2>
      <input type="radio"/>Mayuri
      <input type="radio"/>Resu
      <input type="radio"/>Pratik
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