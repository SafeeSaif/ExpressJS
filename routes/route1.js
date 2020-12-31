const express = require('express');
const router = express.Router();


module.exports = (app) => {
    const route1Controller = require('../controllers/route1Controller');

    app.get('/', route1Controller.function1);
}
