import User from '../models/User';

class UserController {
    async store(req, res) {
        const userExists = await User.findOne({ where: { email: req.body.email } });
        if(userExists){
            return res.status(400).json({ error: 'User already exists.' });
        }
        const {name, email, provider} = await User.create(req.body);
        return res.json({
            name,
            email,
            provider
        });
     /* const user = await User.create(req.body);
      return res.json(user); */
    }
}

export default new UserController();
