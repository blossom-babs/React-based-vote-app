import React from "react";
// import image
import Image from "../src/assets/background.png";
// import styles
import "./styles/style.scss";
// import components
import Voting from "./components/Voting";

const styleImage = {
  background: `url(${Image})`,
};

console.log(Image);
function App() {
  return (
    <div className="home" style={styleImage}>
      <Voting />
    </div>
  );
}

export default App;
