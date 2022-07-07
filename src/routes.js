import {Router} from 'express';
import UserController from './app/controllers/UserController';
const routes = new Router();
routes.post('/users', UserController.store);
routes.get('/',(req, res) =>{
    return res.json({message: 'Storm Wizard'});
})
//module.exports = routes;
export default routes;
