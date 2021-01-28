import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { TokenJwtInterface } from '../interfaces/TokenJwtInterface'

const public_key = process.env.SECRET_KEY || 'jwtsecretkey'

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.sendStatus(401);
  }
  const token = authorization.replace('Bearer', '').trim();
  try {
    const data = jwt.verify(token, public_key);
    const { idUser } = data as TokenJwtInterface;
    req.body.userId = idUser;
    next();
  } catch {
    return res.sendStatus(401);
  }
}