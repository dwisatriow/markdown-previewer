import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="container">
      <div className="row no-gutters d-flex justify-content-md-start justify-content-lg-center">
          <header id="app-header" className="my-5 my-lg-4">
            <h1>Markdown Previewer</h1>
          </header>
      </div>
    </div>
  )
}

export default Header;