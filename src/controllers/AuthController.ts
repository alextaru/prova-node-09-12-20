import { Request, Response } from 'express'
import UserModel from "../models/User"
import bcrypt from 'bcryptjs'
import JwtHelper from "../helpers/JwtHelper";

class AuthController {
    async authenticate(req: Request, res: Response) {
      const { email, password } = req.body;
      const user = await UserModel.findOne({where:{email}});
      const isValidPassword = await bcrypt.compare(password, user.password)
      if (!user || !isValidPassword) return res.sendStatus(401)
      const token = JwtHelper.encode(user.id);
      return res.json({ token });
    }
}
  
export default new AuthController();