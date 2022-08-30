import React from 'react';
import './Home.css';
import Banner from "../Banner/Banner";
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom';

export interface HomeProps {
    movies: Array<Object>;
}

export default function Home(props: HomeProps): JSX.Element {

    if(!props.movies) return (
        <>
            <section className="site-spacing">
                <div className="container">
                  <div className="col-12 text-center">
                      No movies found
                  </div>
              </div>
          </section>
        </>
      )

    return (
    <>
        <Banner />

        <section className="site-spacing">
            <div className="container">
                <div className="row">
                    {
                        props && props.movies ? props.movies.map((item, _) => <MovieCard item={item} key={_}/> ) : "No top movies found"
                    }
                </div>
                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <Link type="button" to="movies" className="grey-button">View All</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
