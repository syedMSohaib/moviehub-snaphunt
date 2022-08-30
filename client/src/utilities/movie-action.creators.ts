import { ActionType } from '../enumerations/action-type';
import { IAction } from '../interfaces/action.interface';


const getURLParameter = (name: string, location:string, second = false): string => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  const results = regex.exec(location)
  if (second && results === null) {
    return getURLParameter(second, location)
  }
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' ')).replace(/\+/g, ' ')
}



export class MovieActionCreators {

  public static fetchTopMovies(): IAction {
    return {
      type: ActionType.FetchTopMovies,
      payload: null
    };
  }

  public static fetchMovies(): IAction {

    const page_no = getURLParameter('page', window.location.href) || 1
    const text = getURLParameter('text', window.location.href) || ''

    return {
      type: ActionType.FetchMovies,
      payload: {
        page_no: page_no,
        text: text
      }
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
      payload: {
        id: arguments[0]
      }
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
