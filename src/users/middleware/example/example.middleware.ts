import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new HttpException("No authorization token", HttpStatus.FORBIDDEN);
    }
    if (authorization === "sanusi")
      next();
    else
      throw new HttpException("invalid authorization token", HttpStatus.FORBIDDEN);
  }
}
