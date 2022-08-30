import { ITestResponse } from '../../../shared/api.schemas';
import { Constants } from '../constants/constants';
import axios from 'axios';
import knexConfig from '../knexfile';
import knex from 'knex';

// import { attachPaginate } from 'knex-paginate'

const instance = knex(knexConfig[process.env.NODE_ENV]);


// https://image.tmdb.org/t/p/original/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg

export class MovieController {

  public async fetchGenre(): Promise<ITestResponse> {

    let data = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key='+Constants.API_KEY+'&language=en-US');

    const genres: ITestResponse = {
      message: 'success',
      data: data.data.genres,
    };

    return Promise.resolve(genres);
  }

  public async fetchTopMovies(): Promise<ITestResponse> {
    const movies = await instance('movies').orderBy("id", 'desc').limit(6)

    const response: ITestResponse = {
      message: 'success',
      data: movies
    };

    return Promise.resolve(response);
  }



  public async index(req: any): Promise<ITestResponse> {

    let reqData = req.query;

    let pagination: any = {
      total: '',
      per_page: '',
      offset: '',
      to: '',
      last_page: '',
      current_page: '',
      from: '',
      data: '',
    };
    let per_page = reqData.per_page || 9;
    let page: number = req.query.text ? 1 : (reqData.current_page || 1);
    if (page < 1) page = 1;
    let offset = (page - 1) * per_page;

    await Promise.all([
      instance("movies").count('* as count').first(),
      instance("movies").offset(offset).limit(per_page).modify(function(queryBuilder) {
        if (req.query.text) {
            console.log('here', req.query.text)
            queryBuilder.whereRaw(`title LIKE '%${req.query.text.toLowerCase()}%'`);
        }
      })

    ]).then(([total, rows]) => {
        var count = total.count;
        var rows = rows;
        pagination.total = count;
        pagination.per_page = per_page;
        pagination.offset = offset;
        pagination.to = offset + rows.length;
        pagination.last_page = Math.ceil(count / per_page);
        pagination.current_page = page;
        pagination.from = offset;
        pagination.data = rows;
        return pagination;
    });

    const response: ITestResponse = {
      message: 'success',
      data: pagination
    };

    return Promise.resolve(response);
  }

}
