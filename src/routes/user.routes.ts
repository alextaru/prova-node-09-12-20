import { Router } from "express";
import UserController from "../controllers/UserController";
import AuthMiddleware from "../middlewares/AuthMiddleware";

const routes = Router();

routes.get('/', AuthMiddleware, UserController.index);
routes.post('/', UserController.store);
routes.put('/:id', AuthMiddleware, UserController.update);
routes.delete('/:id', AuthMiddleware, UserController.destroy);

export default routes