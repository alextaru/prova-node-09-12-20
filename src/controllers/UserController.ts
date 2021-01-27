import { Request, Response } from 'express'
import UserModel from "../models/User";
class UserController {
    async index(req: Request, res: Response) {
      const users = await UserModel.findAll();
      return res.json(users);
    }

    async store(req: Request, res: Response) {
      const {name, username, email, password} = req.body;
      const user = await UserModel.create({
        name,
        username,
        email,
        password
      });
      return res.status(201).json(user);
    }

    async update(req: Request, res: Response) {
      const { id } = req.params;
      const {name, username, email, password} = req.body;
      const user = await UserModel.findByPk(id);
      if(!user){
        return res.status(400).json({ error: 'usuario não encontrado' });
      }
      const userUpdate = await user.update({
        name,
        username,
        email,
        password
      });
      return res.json(userUpdate);
    }

    async destroy(req: Request, res: Response) {
      const { id } = req.params;
      const user = await UserModel.findByPk(id);
      if(!user){
        return res.status(400).json({ error: 'usuario não encontrado' });
      }
      await user.destroy();
      return res.json({ mensagem: 'usuario removido' });
    }
}
  
export default new UserController();