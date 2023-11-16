import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';


@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
   use(req: Request, res: Response, next: NextFunction) {
      const token = req.headers.authorization?.replace('Bearer ', '');

      if (!token) {
         throw res.status(401).json({ message: 'Unauthorized - Token not provided' });
      }

      const yourPublicKey = 'test';

      jwt.verify(token, yourPublicKey, (err) => {
         if (err) {
            console.error('JWT verification failed:', err.message);
            throw res.status(401).json({ message: 'Unauthorized - Invalid token' });
         }

         next();
      });
   }
}
