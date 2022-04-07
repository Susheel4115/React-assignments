import React from "react";

class ProductList extends React.Component {
  render() {
    return (
      <div className="product">
        <p className="square">🟫</p>
        <img
          src={this.props.image}
          alt="description of something"
          className="image"
        />
        <div className="wrapper">
          <h2>Boltaart Bosbessen</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            molestiae obcaecati, suscipit nam unde similique facere libero.
          </p>
        </div>
        <h1 className="arrow2">></h1>
      </div>
    );
  }
}

export default ProductList;
