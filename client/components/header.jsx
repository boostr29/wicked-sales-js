import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">I am baby palo santo humblebrag pok pok jean shorts. Fanny pack cronut succulents affogato beard intelligentsia pitchfork squid fixie waistcoat listicle before they sold out meh. Locavore williamsburg humblebrag sustainable cronut unicorn brooklyn paleo 8-bit mumblecore jianbing hammock. Chia kickstarter locavore plaid intelligentsia. Live-edge portland iceland meditation, artisan fanny pack poutine. Butcher pop-up thundercats wayfarers occupy af. Portland cold-pressed yr truffaut iceland woke.</p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white">Follow on Twitter</a></li>
                  <li><a href="#" className="text-white">Like on Facebook</a></li>
                  <li><a href="#" className="text-white">Email me</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <strong>$ Wicked Sales</strong>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
