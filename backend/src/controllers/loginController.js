const loginModel = require('../models/loginModel');

const loginController = {
    login: async (req, res) => {
        try {
            const login = await loginModel.login(req);
            res.status(200).json(login);
        } catch(err) {
            console.error('Error loggin in:', err);
            res.status(500).send({ message: 'Error loggin in' });
        }
    }
}

module.exports = loginController;