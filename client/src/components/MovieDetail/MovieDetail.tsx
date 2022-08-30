import React, { Component } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ActionCreator, ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { IAction } from '../../interfaces/action.interface';
import { IAppState } from '../../reducers/reducer';
import { MovieActionCreators } from '../../utilities/movie-action.creators';
import './MovieDetail.css';
import { withRouter } from "../../utilities/withRouter";

interface MovieDetailProps {
  isLoading: boolean;
  message: string;
  data?: any,
  dispatchFetchMovieDetail?: ActionCreator<IAction>;
  genres?: Array<Object>;
  params?: any,

}

class MovieDetail extends Component<MovieDetailProps> {

  constructor(props: any) {
    super(props);
    this.state = {
    }
    this.renderGenre = this.renderGenre.bind(this);
  }

  componentDidMount(): void {
    console.log(this.props);
    this.props.dispatchFetchMovieDetail(this.props.params.id);
  }

  renderGenre(){
    // return;
    if(!this.props.data) return;

    console.log(this.props.data);

    try {
      const gid = JSON.parse(this.props.data.genre_ids) || [];

      console.log(gid, this.props.data.genre_ids);

      const filter = this.props.genres.filter(item => gid.includes(item.id));

      console.log('filter', filter);

      return (
        <>
          {
            filter.map((item, _) => <span key={_}>
                {item.name }
            </span>)
          }

        </>
      )
    }catch(e) {
      window.location.reload()
    }



  }

  public render(): JSX.Element {

    const { data } = this.props;

    if(!data) return (<>No detail</>);

    // console.log(data);

    return (
      <>
          <section className="site-spacing">
              <div className="container">

                <div className="col-12">
                  <img src={'https://image.tmdb.org/t/p/original/' + data.backdrop_path } className="movieImage img-fluid" alt="" />
                </div>

                <div className="col-12">
                  <h2 className="bannerHeading">Movie information hub</h2>

                  <div className="genres-container mt-3">
                    {
                      this.renderGenre()      
                      // (this.props.genres.filter(it => JSON.parse(data.genre_ids) || [].includes(it.id))).map((item, _) => <span key={_}>
                      //     {item.name }
                      // </span>)
                    }
                  </div>

                  <p className='mt-4'>
                    { data.overview }
                  </p>

                  <h2 className="bannerHeading">Cast</h2>

                  <small>Cast is static as i forgot to add cast schema in node :( </small>

                  {/* Static Cast - forgot to add cast schema in node */}

                  <div className="cast-container">
                      <div className="row mt-3">
                          <div className="col-md-4 mb-3">
                            <div className="d-flex">
                              <img className='actor-img' src="https://www.themoviedb.org/t/p/w276_and_h350_face/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg"></img>
                              <div className="descp ml-3">
                                <p className='actor-name'>Chris Hemsworth</p>
                                <p className='actor-as'>Thor Odinson</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 mb-3">
                            <div className="d-flex">
                              <img className='actor-img' src="https://www.themoviedb.org/t/p/w276_and_h350_face/qCpZn2e3dimwbryLnqxZuI88PTi.jpg"></img>
                              <div className="descp ml-3">
                                <p className='actor-name'>Christian Bale</p>
                                <p className='actor-as'>Gorr</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 mb-3">
                            <div className="d-flex">
                              <img className='actor-img' src="https://www.themoviedb.org/t/p/w276_and_h350_face/fycqdiiM6dsNSbnONBVVQ57ILV1.jpg"></img>
                              <div className="descp ml-3">
                                <p className='actor-name'>Tessa Thompson</p>
                                <p className='actor-as'>King Valkyrie</p>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 mb-3">
                            <div className="d-flex">
                              <img className='actor-img' src="https://www.themoviedb.org/t/p/w276_and_h350_face/tQeioTj98JxIXldV9yDSUXNt3KY.jpg"></img>
                              <div className="descp ml-3">
                                <p className='actor-name'>Taika Waititi</p>
                                <p className='actor-as'>Korg / Old Kronan God (voice)</p>
                              </div>
                            </div>
                           </div>

                           <div className="col-md-4 mb-3">
                            <div className="d-flex">
                              <img className='actor-img' src="https://www.themoviedb.org/t/p/w276_and_h350_face/mqKHKayGsEK3TOZDHs3eUAhCP6V.jpg"></img>
                              <div className="descp ml-3">
                                <p className='actor-name'>Natalie Portman</p>
                                <p className='actor-as'>Jane Foster / The Mighty Thor</p>
                                </div>
                              </div>
                          </div>

                          <div className="col-md-4 mb-3">
                            <div className="d-flex">
                              <img className='actor-img' src="https://www.themoviedb.org/t/p/w276_and_h350_face/hO8ADSA0sKnO3VkPjwA7MZE7r5W.jpg"></img>
                              <div className="descp ml-3">
                                <p className='actor-name'>Jaimie Alexander</p>
                                <p className='actor-as'>Sir</p>
                              </div>
                            </div>
                        </div>

                      </div>
                  </div>

               </div>
               </div>
          </section>
      </>
    );
  }
}

const mapStateToProps: MapStateToProps<MovieDetailProps, any, IAppState> = (state: IAppState): MovieDetailProps => {
  return {
    isLoading: state.isLoading,
    message: state.message,
    data: state.data,
  };
};


const mapDispatchToProps = (dispatch: any): ActionCreatorsMapObject<IAction> => {
  return bindActionCreators<IAction, ActionCreatorsMapObject<IAction>>(
    {
      dispatchFetchMovieDetail: MovieActionCreators.fetchMovie,
    },
    dispatch
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetail));
