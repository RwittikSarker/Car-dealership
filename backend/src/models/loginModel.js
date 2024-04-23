const db = require('../services/db');

const loginModel = {
    login: async (req, res) => {
        const sql = 'SELECT ID FROM user WHERE username = "'+ req.body.username + '" AND password = "' + req.body.password + '";';
        try {
            const results = await db.query(sql);
            const userID = results[0].ID;
            return userID;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = loginModel;