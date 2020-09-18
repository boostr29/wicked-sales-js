import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <strong>$ Wicked Sales</strong>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
