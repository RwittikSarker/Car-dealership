const databaseModel = require('../models/databaseModel');

const databaseController = {
    createDB: async (req, res) => {
        try {
            const database = await databaseModel.createDB();
        } catch(err) {
            console.error('Error creating database:', err);
        }
    },

    useDB: async (req, res) => {
        try {
            const database = await databaseModel.useDB();
        } catch(err) {
            console.error('Error using database:', err);
        }
    },

    createSchema: async (req, res) => {
        try {
            const database = await databaseModel.createSchema();
        } catch(err) {
            console.error('Error creating Schema:', err);
        }
    },

    inputAdmin: async (req, res) => {
        try {
            const database = await databaseModel.inputAdmin();
        } catch(err) {
            console.error('Error creating Admin:', err);
        }
    },

    inputSalesPerson: async (req, res) => {
        try {
            const database = await databaseModel.inputSalesPerson();
        } catch(err) {
            console.error('Error creating Sales_Person:', err);
        }
    },
    
    inputCars: async (req, res) => {
        try {
            const database = await databaseModel.inputCars();
        } catch(err) {
            console.error('Error inputting cars:', err);
        }
    }
}

module.exports = databaseController;