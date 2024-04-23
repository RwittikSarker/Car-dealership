const db = require('../services/db');

const signupModel = {
    signup: async (req, res) => {
        const input_customer = [
            'INSERT IGNORE INTO User (username, password) SELECT "'+ req.body.username +'", "' + req.body.password + '" FROM dual WHERE NOT EXISTS (SELECT 1 FROM User WHERE username = "'+ req.body.username + '");',
            'SET @next_id = (SELECT MAX(ID) FROM User);',
            'INSERT IGNORE INTO Customers (ID, Name, Email, Cart_number) VALUES (@next_id, "'+ req.body.name +'", "'+ req.body.email +'", 0);'
        ]
        input_customer.forEach(element => {
            try {
                const results = db.query(element);
                return results;
            } catch (err) {
                throw err;
            }
        });
    }
}

module.exports = signupModel;