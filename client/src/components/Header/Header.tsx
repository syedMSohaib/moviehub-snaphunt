import React from 'react';
import './Header.css';

export default function Header(): JSX.Element {
  return (
    <section id="navBar">
        <div className="container-fluid p-0">
            <div className="row no-gutters justify-content-center">
                <div className="col-xl-11">
                    <nav className="navbar navbar-light justify-content-between">
                        <a className="navbar-brand" href="/">
                            <img src="/images/logo.png" alt="logo" className="navbarBrand" />
                        </a>
                        <div className="searchbox">
                            <input type="text" name="search" id="nav_search" placeholder="Search title" />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </section>

  );
}
