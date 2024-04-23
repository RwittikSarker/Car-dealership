const db = require('../services/db');

const sql_Tables = [
    'Create table if not exists User (ID INT AUTO_INCREMENT Primary Key, username VARCHAR(30), password VARCHAR(20), Unique (username));',
    'Create table if not exists Customers (ID INT Primary Key, Name VARCHAR(50), Email VARCHAR(200), Cart_number INT, FOREIGN KEY (ID) REFERENCES User(ID));',
    'Create table if not exists Sales_Person (ID INT Primary Key, Name VARCHAR(50), Sales_history VARCHAR(500), Commission INT, FOREIGN KEY (ID) REFERENCES User(ID));',
    'Create table if not exists Admin (ID INT Primary Key, FOREIGN KEY (ID) REFERENCES User(ID));',
    'Create table if not exists Cars (VIN INT Primary Key, Model VARCHAR(150), Repair_history VARCHAR(100), Mileage INT, Manufacture_Year INT, Brand VARCHAR(50), Color VARCHAR(20), C_ID INT, FOREIGN KEY (C_ID) REFERENCES Customers(ID));',
    'Create table if not exists Cart (Cart_Number INT Primary Key, C_ID INT, Quantity INT, Buy_Rent VARCHAR(4));',
    'Create table if not exists Car_name (Cart_Number INT, Car_name VARCHAR(50), FOREIGN KEY (Cart_Number) REFERENCES Cart(Cart_Number));',
    'Create table if not exists VIN (Cart_Number INT, VIN INT, Unique (VIN), FOREIGN KEY (Cart_Number) REFERENCES Cart(Cart_Number));',
    'ALter TABLE Customers ADD COLUMN IF NOT EXISTS C_Phone_Number JSON;'
]

const input_admin = [
    'INSERT IGNORE INTO User (username, password) SELECT "admin", "password1" FROM dual WHERE NOT EXISTS (SELECT 1 FROM User WHERE username = "admin");',   
    'INSERT IGNORE INTO Admin (ID) SELECT ID FROM User WHERE username = "admin";'
]

const input_sales_person = [
    'INSERT IGNORE INTO User (username, password) SELECT "salesperson1", "password123" FROM dual WHERE NOT EXISTS (SELECT 1 FROM User WHERE username = "salesperson1");',
    'SET @next_id = (SELECT MAX(ID) FROM User);',
    'INSERT IGNORE INTO Sales_Person (ID, Name, Sales_history, Commission) VALUES (@next_id, "Arifur", "", 0);',
    'INSERT IGNORE INTO User (username, password) SELECT "salesperson2", "password123" FROM dual WHERE NOT EXISTS (SELECT 1 FROM User WHERE username = "salesperson2");',
    'SET @next_id = (SELECT MAX(ID) FROM User);',
    'INSERT IGNORE INTO Sales_Person (ID, Name, Sales_history, Commission) VALUES (@next_id, "Leon", "", 0);',
    'INSERT IGNORE INTO User (username, password) SELECT "salesperson3", "password123" FROM dual WHERE NOT EXISTS (SELECT 1 FROM User WHERE username = "salesperson3");',
    'SET @next_id = (SELECT MAX(ID) FROM User);',
    'INSERT IGNORE INTO Sales_Person (ID, Name, Sales_history, Commission) VALUES (@next_id, "Tahiat", "", 0);',
    'INSERT IGNORE INTO User (username, password) SELECT "salesperson4", "password123" FROM dual WHERE NOT EXISTS (SELECT 1 FROM User WHERE username = "salesperson4");',
    'SET @next_id = (SELECT MAX(ID) FROM User);',
    'INSERT IGNORE INTO Sales_Person (ID, Name, Sales_history, Commission) VALUES (@next_id, "Nabil", "", 0);',
    'INSERT IGNORE INTO User (username, password) SELECT "salesperson5", "password123" FROM dual WHERE NOT EXISTS (SELECT 1 FROM User WHERE username = "salesperson5");',
    'SET @next_id = (SELECT MAX(ID) FROM User);',
    'INSERT IGNORE INTO Sales_Person (ID, Name, Sales_history, Commission) VALUES (@next_id, "Anika", "", 0);',
    'INSERT IGNORE INTO User (username, password) SELECT "salesperson6", "password123" FROM dual WHERE NOT EXISTS (SELECT 1 FROM User WHERE username = "salesperson6");',
    'SET @next_id = (SELECT MAX(ID) FROM User);',
    'INSERT IGNORE INTO Sales_Person (ID, Name, Sales_history, Commission) VALUES (@next_id, "Anadi", "", 0);'
]

const input_cars = [
    'INSERT IGNORE INTO Cars (VIN, Model, Repair_history, Mileage, Manufacture_Year, Brand, Color) VALUES (1234567890, "Toyota Corolla", "", 50000, 2019, "Toyota", "Blue");',
    'INSERT IGNORE INTO Cars (VIN, Model, Repair_history, Mileage, Manufacture_Year, Brand, Color) VALUES (9876543210, "Honda Civic", "", 40000, 2018, "Honda", "Red");'
]

const databaseModel = {
    createDB: () => {
        const sql = 'Create Database if not exists Car_dealership;';
        try {
            const results = db.query(sql);
            return results;
        } catch (err) {
            throw err;
        }
    },

    useDB: () => {
        const sql = 'Use Car_dealership;';
        try {
            const results = db.query(sql);
            return results;
        } catch (err) {
            throw err;
        }
    },

    createSchema: () => {
        sql_Tables.forEach(element => {
            try {
                const results = db.query(element);
                return results;
            } catch (err) {
                throw err;
            }
        });
    },

    inputAdmin: () => {
        input_admin.forEach(element => {
            try {
                const results = db.query(element);
                return results;
            } catch (err) {
                throw err;
            }
        });
    },

    inputSalesPerson: () => {
        input_sales_person.forEach(element => {
            try {
                const results = db.query(element);
                return results;
            } catch (err) {
                throw err;
            }
        });
    },

    inputCars: () => {
        input_cars.forEach(element => {
            try {
                const results = db.query(element);
                return results;
            } catch (err) {
                throw err;
            }
        });
    }
}

module.exports = databaseModel;