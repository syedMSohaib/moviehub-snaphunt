import React, { Component } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ActionCreator, ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { Routes, Route } from "react-router-dom"
import { IAction } from '../interfaces/action.interface';
import { IAppState } from '../reducers/reducer';
import { MovieActionCreators } from '../utilities/movie-action.creators';
import Header from './Header/Header';
import './Main.css';
import Home from './Home/Home';
import Listing from './Listing/Listing';
import MovieDetail from './MovieDetail/MovieDetail';
import ApiService from '../services/api.service';
import { withRouter } from "../utilities/withRouter";

interface IMainProps {
  isLoading: boolean;
  message: string;
  data?: any,
  top?: any,
  dispatchFetchTopMovies?: ActionCreator<IAction>;
}

class Main extends Component<IMainProps> {

  constructor(props: any) {
    super(props)
    this.state = {
      movies: [],
      genres: [],
      text: '',
    }
    this.fetchGenre = this.fetchGenre.bind(this);
    this.inputSearch = this.inputSearch.bind(this);
  }

  componentDidMount(): void {
    console.log(this.props);
    // this.props.dispatchFetchTopMovies()
    this.fetchGenre();

  }

  public fetchGenre = async () => {
    let result = await ApiService.fetchGenres();
    this.setState({
      genres: result.data
    })
  }

  inputSearch(data: any) {
    this.setState({
      text: data,
    })
  }

  public render(): JSX.Element {
    
    return (
      <div className="app-container">
          <Header inputSearch={this.inputSearch}  />

          <Routes>
            <Route path="/" element={ <Home dispatchFetchTopMovies={this.props.dispatchFetchTopMovies} movies={this.props.top || []}  /> } />
            <Route path="movies" element={ <Listing text={this.state.text} /> } />
            <Route path="movies/:id" element={ <MovieDetail  genres={this.state.genres || []} /> } />
          </Routes>

        <footer>
          <div className="container-fluid">
              <div className="row no-gutters justify-content-center">
                  <div className="col-xl-12">
                      <div className="row">
                          <div className="col-lg-6 mb-lg-0 mb-2">
                              <p className="footer-text text-lg-left text-center">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua
                              </p>
                          </div>
                          <div className="col-lg-6">
                              <div className="d-flex align-items-center justify-content-center flex-md-row flex-column">
                                  <p className="copyright mr-md-4">Copyright @ Snapmoviehub 2022</p>
                                  <ul className="footer-socials mt-md-0 mt-2">
                                      <li>
                                          <a href="#">
                                              <i className="fa-brands fa-facebook-f"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                              <i className="fa-brands fa-linkedin-in"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                              <i className="fa-brands fa-twitter"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                              <i className="fa-brands fa-instagram"></i>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<IMainProps, any, IAppState> = (state: IAppState): IMainProps => {
  return {
    isLoading: state.isLoading,
    message: state.message,
    top: state.data,
  };
};

const mapDispatchToProps = (dispatch: any): ActionCreatorsMapObject<IAction> => {
  return bindActionCreators<IAction, ActionCreatorsMapObject<IAction>>(
    {
      dispatchFetchTopMovies: MovieActionCreators.fetchTopMovies
    },
    dispatch
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
