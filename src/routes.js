import {Router} from 'express';
const routes = new Router();
routes.get('/',(req, res) =>{
    return res.json({message: 'Storm Wizard'});
})
//module.exports = routes;
export default routes;