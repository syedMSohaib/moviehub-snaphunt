import React, { Component } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { ActionCreator, ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { IAction } from '../../interfaces/action.interface';
import { IAppState } from '../../reducers/reducer';
import { MovieActionCreators } from '../../utilities/movie-action.creators';
import MovieCard from '../MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './Listing.css';

interface ListingProps {
  isLoading: boolean;
  message: string;
  data?: any,
  dispatchFetchMovies?: ActionCreator<IAction>;
}

class Listing extends Component<ListingProps> {

  constructor(props: any) {
    super(props);
    this.state = {
      // currentPage: 1,
    }

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount(): void {
    this.props.dispatchFetchMovies();
  }

  handlePageClick(selected: any): void {
    // console.log(selected);
    this.setState({
      currentPage: selected.selected,
    });
    const page = ++selected.selected;
    window.history.pushState({}, undefined, `/movie?page=${page}`);
    setTimeout(() => {
      this.props.dispatchFetchMovies();
    }, 1000)
    // this.setState({
    //   currentPage: ++selected.selected
    // }, () => {
    //   this.props.dispatchFetchMovies( ++selected.selected);
    // })
  }

  public render(): JSX.Element {

    const { data } = this.props;

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
                          <ReactPaginate
                            nextLabel="next >"
                            forcePage={this.state.currentPage}
                            onPageChange={this.handlePageClick}
                            // onPageChange={ (selected) => this.setState({currentPage: ++selected.selected  }, () => {
                            //   this.props.dispatchFetchMovies(1);
                            // }) }
                            // onPageChange={ (selected) => window.history.pushState({}, undefined, `/movie?page=${++selected.selected}`) }
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={data.total}
                            previousLabel="< previous"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                          />

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
      dispatchFetchMovies: MovieActionCreators.fetchMovies,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
