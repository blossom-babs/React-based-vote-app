import React from "react";
import Housemate from "./Housemate";

function Voting() {
  return (
    <div className="voting">
      {" "}
      <section className="voting__box">
        {" "}
        <h1 className="voting__box--title">My Available Votes</h1>{" "}
        <h2 className="voting__box--votes">30, 000</h2>{" "}
        <div className="voting__box--progressbar">
          {" "}
          <div className="progress length-80"></div>{" "}
        </div>{" "}
      </section>{" "}
      <Housemate />{" "}
    </div>
  );
}

export default Voting;
