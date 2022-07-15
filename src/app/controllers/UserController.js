import User from '../models/User';

class UserController {
    async store(req, res) {
        const userExists = await User.findOne({ where: { email: req.body.email } });
        if (userExists) {
            return res.status(400).json({ error: 'User already exists.' });
        }
        const { name, email, provider } = await User.create(req.body);
        return res.json({
            name,
            email,
            provider
        });
        /* const user = await User.create(req.body);
         return res.json(user); */
    }
    async update(req, res) {
        const { email, oldPassword } = req.body;
        const user = await User.findByPk(req.userId);
        if (email !== user.email) {
            const userExists = await User.findOne({ where: { email } });
            if (userExists) {
                return res.status(400).json({ error: 'User already exists.' });
            }
        }
        if (oldPassword && !(await user.checkPassword(oldPassword))) {
            return res.status(401).json({ error: 'Password does not match' })
        }
        const { name, provider } = await user.update(req.bory);
        return res.json({
            name,
            provider
        })
    }
}

export default new UserController();
