import React, { Component } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ActionCreator, ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { Routes, Route } from "react-router-dom"
import { IAction } from '../interfaces/action.interface';
import { IAppState } from '../reducers/reducer';
import { TestActionCreators } from '../utilities/test-action.creators';
import Header from './Header/Header';
import './Main.css';
import Home from './Home/Home';
import Listing from './Listing/Listing';
import MovieDetail from './MovieDetail/MovieDetail';

interface IMainProps {
  isLoading: boolean;
  message: string;
  dispatchApiTestStart?: ActionCreator<IAction>;
}

class Main extends Component<IMainProps> {

  public onPingClick = () => {
    this.props.dispatchApiTestStart();
  }

  public render(): JSX.Element {
    return (
      <div className="app-container">
        <Header />
        <div className="header">
          <div className="header-row">
            <div>
              <h1>ts-node-template <span>by Kovaja</span></h1>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="movies" element={ <Listing/> } />
          <Route path="movies/:id" element={ <MovieDetail/> } />
        </Routes>

        <div className="content">
          <div style={{ textAlign: 'center' }}>
            <button className="pure-button" type="button" onClick={this.onPingClick}>PING</button>
            <p>{this.props.isLoading ? 'LOADING...' : null}</p>
            <p>{this.props.message}</p>
          </div>
        </div>

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
    message: state.testMessage
  };
};

const mapDispatchToProps = (dispatch: any): ActionCreatorsMapObject<IAction> => {
  return bindActionCreators<IAction, ActionCreatorsMapObject<IAction>>(
    {
      dispatchApiTestStart: TestActionCreators.testApiStart
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
