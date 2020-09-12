import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
      .catch(err => this.setState({ message: err.message }));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row">
            {
              this.state.products.map(product => {
                return <ProductListItem key={product.id} product={product}/>;
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
