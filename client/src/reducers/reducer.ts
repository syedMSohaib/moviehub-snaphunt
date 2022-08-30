import { MovieActionCreators } from './../utilities/movie-action.creators';
import { ActionType } from '../enumerations/action-type';
import { IAction } from '../interfaces/action.interface';
import ApiService from '../services/api.service';
import { store } from '../store';

export interface IAppState {
  isLoading: boolean;
  message: string;
  data: any,
}

const defaultState: IAppState = {
  isLoading: false,
  message: null,
  data: null,
};

const reducer = (state: IAppState = defaultState, action: IAction): IAppState => {

  // TODO: this is naive handling of async action
  const dispatchFinish = (message: string): void => {
    store.dispatch(MovieActionCreators.testApiFinish(message));
  };

  const dispatchFail = (): void => {
    store.dispatch(MovieActionCreators.testApiFail());
  };

  switch (action.type) {

    case ActionType.FetchTopMovies:
      ApiService.fetchTopMovies().then(dispatchFinish).catch(dispatchFail);
      return {
        ...state,
        message: null,
        data: null,
        isLoading: true
      };

    case ActionType.FetchMovies:
        ApiService.fetchMovies().then(dispatchFinish).catch(dispatchFail);
        return {
          ...state,
          message: null,
          data: null,
          isLoading: true
      };

    case ActionType.ApiTestStart:
      ApiService.testApi().then(dispatchFinish).catch(dispatchFail);

      return {
        ...state,
        message: null,
        isLoading: true
      };

    case ActionType.ApiTestFinish:
      return {
        ...state,
        message: action.payload.message,
        data: action.payload.data,
        isLoading: false
      };

    case ActionType.ApiTestFail:

      return {
        ...state,
        message: null,
        isLoading: false
      };

      default: return {
      ...state
    };
  }
};

export default reducer;
