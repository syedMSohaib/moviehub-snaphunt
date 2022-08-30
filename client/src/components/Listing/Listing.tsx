import React, { Component } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { ActionCreator, ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { IAction } from '../../interfaces/action.interface';
import { IAppState } from '../../reducers/reducer';
import { MovieActionCreators } from '../../utilities/movie-action.creators';
import MovieCard from '../MovieCard/MovieCard';
import './Listing.css';

interface ListingProps {
  isLoading: boolean;
  message: string;
  data?: any,
  dispatchFetchMovies?: ActionCreator<IAction>;
}

class Listing extends Component<ListingProps> {

  constructor(props: any) {
    super(props)
  }

  componentDidMount(): void {
    this.props.dispatchFetchMovies();
  }


  public render(): JSX.Element {

    const { data } = this.props;

    console.log(data?.data);

    if(!data) return (
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
          <section className="site-spacing">
              <div className="container">
                <div className="col-12 text-center">
                  <h1 className="bannerHeading">Movie information hub</h1>
                </div>


                  <div className="row">
                      {
                          data && data.data ? data.data.map((item: any, _) => <MovieCard item={item} key={_}/> ) : "No movies found"
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
}

const mapStateToProps: MapStateToProps<ListingProps, any, IAppState> = (state: IAppState): ListingProps => {
  return {
    isLoading: state.isLoading,
    message: state.message,
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch: any): ActionCreatorsMapObject<IAction> => {
  return bindActionCreators<IAction, ActionCreatorsMapObject<IAction>>(
    {
      dispatchFetchMovies: MovieActionCreators.fetchMovies
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
