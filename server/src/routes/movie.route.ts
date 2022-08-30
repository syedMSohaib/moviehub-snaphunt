import { Request, Response, Router } from 'express';
import { MovieController } from '../controllers/movie.controller';
import { handleApiResponse, handleApiError } from '../utilities/api';

export class MovieRoute {
  private controller: MovieController;

  constructor(router: Router) {
    this.controller = new MovieController();

    const subRouter = Router();

    router.use('/movies', subRouter);

    subRouter.get('/', this.fetchMovies.bind(this));

    subRouter.get('/genre', this.fetchGenre.bind(this));

    subRouter.get('/top', this.fetchTopMovies.bind(this));


  }

  private fetchGenre(req: Request, res: Response): void {
    this.controller.fetchGenre()
      .then(handleApiResponse(res))
      .catch(handleApiError(res));
  }

  private fetchTopMovies(req: Request, res: Response): void {
    this.controller.fetchTopMovies()
      .then(handleApiResponse(res))
      .catch(handleApiError(res));
  }

  private fetchMovies(req: Request, res: Response): void {
    this.controller.index(req)
      .then(handleApiResponse(res))
      .catch(handleApiError(res));
  }




}
