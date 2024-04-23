const userModel = require('../models/userModel');

const userController = {
    getUsers: async (req, res) => {
        try {
            const users = await userModel.findAll();
            res.status(200).json(users);
        } catch (err) {
            console.error('Error fetching users:', err);
            res.status(500).send({ message: 'Error fetching users' });
        }
    },

    getUser: async (req, res) => {
        try {
            const user = await userModel.findById(parseInt(req.params.id));
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).send('User not found');
            }
        } catch (err) {
            console.error('Error fetching user:', err);
            res.status(500).send({ message: 'Error fetching user' });
        }
    },

    createUser: async (req, res) => {
        try {
            const newUser = await userModel.create(req.body);
            res.status(201).json(newUser);
        } catch (err) {
            console.error('Error adding user:', err);
            res.status(500).send({ message: 'Error adding user' });
        }
    },

    updateUser: async (req, res) => {
        try {
            const updatedUser = await userModel.update(parseInt(req.params.id), req.body);
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.status(404).send('User not found');
            }
        } catch (err) {
            console.error('Error updating user:', err);
            res.status(500).send({ message: 'Error updating user' });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = await userModel.remove(parseInt(req.params.id));
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).send('User not found');
            }
        } catch (err) {
            console.error('Error deleting user:', err);
            res.status(500).send({ message: 'Error deleting user' });
        }
    }
};

module.exports = userController;
