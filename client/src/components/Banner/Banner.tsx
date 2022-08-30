import React from 'react';
import './Banner.css';


export default function Header(): JSX.Element {
  return (
    <section id="mainBanner" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="bannerHeading">Movie information hub</h1>
                    <p className="bannerText">We provide a list of your favourite movies and information about the cast.</p>
                </div>
            </div>
        </div>
    </section>


  );
}
