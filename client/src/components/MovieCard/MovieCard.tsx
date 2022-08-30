
import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

export interface MovieCardProps {
  item: Object;
}

export default function MovieCard(props: MovieCardProps): JSX.Element {
  return (
    <div className="col-lg-4 col-md-6 col-12">
        <div className="movie-card">
            <img src={'https://image.tmdb.org/t/p/original/' + props.item.poster_path } className="movieImage img-fluid" alt="" />
            <Link to={'/movie/' + props.item.id } className="movieTitleLink">
                <h4 className="movie-title">{props.item?.title}</h4>
            </Link>
            <p className="movie-short-description">
              {props.item?.overview}
            </p>
        </div>
    </div>
  );
}
