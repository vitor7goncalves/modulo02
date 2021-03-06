import {Router} from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
const routes = new Router();
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/',(req, res) =>{
    return res.json({message: 'Storm Wizard'});
})
routes.use(authMiddleware);
routes.put('/users', UserController.update);
//module.exports = routes;
export default routes;
