const express = require('express');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');
const { connectDB } = require('./src/services/db');
const databaseController = require('./src/controllers/databaseController'); 

const app = express();
const port = 3000;

connectDB();
databaseController.createDB();
databaseController.useDB();
databaseController.createSchema();
databaseController.inputAdmin();
databaseController.inputSalesPerson();
databaseController.inputCars();

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
