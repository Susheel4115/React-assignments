import React from "react";

class Orderinfo extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="column">
          <h2>Status</h2>
          <p>🟢Online</p>
        </div>
        <div className="column">
          <h2>Door</h2>
          <p>Mark</p>
        </div>
        <div className="column">
          <h2>Time</h2>
          <p>10:30(30-09-2022)</p>
        </div>
      </div>
    );
  }
}

export default Orderinfo;
