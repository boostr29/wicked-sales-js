import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    fetch(`api/products/${this.props.params.productId}`)
      .then(res => res.json())
      .then(data => this.setState({ product: data[0] }))
      .catch(err => this.setState({ message: err.message }));
  }

  setView(ev) {
    this.props.setView('catalog', {});
  }

  render() {
    if (!this.state.product) return null;
    return (
      <div className="py-5 bg-light vh-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card my-4 px-3 py-4 box-shadow">
                <div className="row px-3">
                  <div className="d-inline col-12 pt-2 pb-4" onClick={this.setView}>
                    <button className="btn btn-secondary btn-sm">
                                            back to catalog
                    </button>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <img className="w-100" src={this.state.product.image} />
                  </div>
                  <div className="col-12 col-md-6 col-lg-8">
                    <h1>{this.state.product.name}</h1>
                    <p>${(this.state.product.price / 100).toFixed(2)}</p>
                    <p className="py-2">{this.state.product.shortDescription}</p>
                  </div>
                  <div className="col py-4">
                    <p>{this.state.product.longDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
