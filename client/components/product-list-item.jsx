import React from 'react';

class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.setView = this.setView.bind(this);
  }

  setView(ev) {
    const productId = parseInt(ev.currentTarget.getAttribute('id'));
    this.props.click('details', { productId });
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 box-shadow" id={this.props.product.productId} onClick={this.setView}>
          <img className="card-img-top" src={this.props.product.image}/>
          <div className="card-body">
            <h5>{this.props.product.name}</h5>
            <p>${(this.props.product.price / 100).toFixed(2)}</p>
            <p className="card-text">{this.props.product.shortDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
