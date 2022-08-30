import { ActionType } from '../enumerations/action-type';
import { IAction } from '../interfaces/action.interface';

export class MovieActionCreators {

  public static fetchTopMovies(): IAction {
    return {
      type: ActionType.FetchTopMovies,
      payload: null
    };
  }

  public static fetchMovies(): IAction {
    return {
      type: ActionType.FetchMovies,
      payload: null
    };
  }

  public static fetchGenres(): IAction {
    return {
      type: ActionType.FetchGenre,
      payload: null
    };
  }

  public static fetchMovie(): IAction {
    return {
      type: ActionType.FetchMovie,
      payload: null
    };
  }

  public static testApiStart(): IAction {
    return {
      type: ActionType.ApiTestStart,
      payload: null
    };
  }

  public static testApiFinish(message: string): IAction {
    return {
      type: ActionType.ApiTestFinish,
      payload: message
    };
  }

  public static testApiFail(): IAction {
    return {
      type: ActionType.ApiTestFail,
      payload: null
    };
  }
}
