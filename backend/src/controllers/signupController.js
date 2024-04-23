const databaseModel = require('../models/databaseModel');
const signupModel = require('../models/signupModel');

const signupController = {
    signup: async (req, res) => {
        try {
            const signup = await signupModel.signup(req);
            res.status(200).json(signup);
        } catch(err) {
            console.error('Error signing up:', err);
            res.status(500).send({ message: 'Error signing up' });
        }
    }
}

module.exports = signupController;