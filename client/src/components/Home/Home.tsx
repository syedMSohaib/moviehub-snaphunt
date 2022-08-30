import React from 'react';
import './Home.css';
import Banner from "../Banner/Banner";

export default function Home(): JSX.Element {
  return (
    <>
        <Banner />

        <section className="site-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="movie-card">
                            <img src="images/placeholder.jpeg" className="movieImage img-fluid" alt="">
                            <a href="#" className="movieTitleLink">
                                <h4 className="movie-title">Movie Title</h4>
                            </a>
                            <p className="movie-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit........</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="movie-card">
                            <img src="images/placeholder.jpeg" className="movieImage img-fluid" alt="">
                            <a href="#" className="movieTitleLink">
                                <h4 className="movie-title">Movie Title</h4>
                            </a>
                            <p className="movie-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit........</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="movie-card">
                            <img src="images/placeholder.jpeg" className="movieImage img-fluid" alt="">
                            <a href="#" className="movieTitleLink">
                                <h4 className="movie-title">Movie Title</h4>
                            </a>
                            <p className="movie-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit........</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="movie-card">
                            <img src="images/placeholder.jpeg" className="movieImage img-fluid" alt="">
                            <a href="#" className="movieTitleLink">
                                <h4 className="movie-title">Movie Title</h4>
                            </a>
                            <p className="movie-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit........</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="movie-card">
                            <img src="images/placeholder.jpeg" className="movieImage img-fluid" alt="">
                            <a href="#" className="movieTitleLink">
                                <h4 className="movie-title">Movie Title</h4>
                            </a>
                            <p className="movie-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit........</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="movie-card">
                            <img src="images/placeholder.jpeg" className="movieImage img-fluid" alt="">
                            <a href="#" className="movieTitleLink">
                                <h4 className="movie-title">Movie Title</h4>
                            </a>
                            <p className="movie-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit........</p>
                        </div>
                    </div>

                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        <button type="button" className="grey-button center-button">View All</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
