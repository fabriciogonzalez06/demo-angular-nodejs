const api = require('express').Router();
const Category = require('../controllers/categoryController').CategoryController;


api.get('/getCategories', Category.getCategories);
api.post('/newCategory', Category.newCategory);

module.exports = {
    api
}