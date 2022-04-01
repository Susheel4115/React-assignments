import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="arrow"> {this.props.arrow} </h1>
        <h2 className="name">
          {this.props.name}
          <br />
          <span>114442</span>
        </h2>
        <button className="btn">print</button>
      </div>
    );
  }
}

export default Header;
