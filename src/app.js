// 'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

 const app = express();
const router = express.Router();

//conecta ao banco
mongoose.connect('mongodb+srv://admin:admin@cluster0.dvf4k.azure.mongodb.net/teste', { useUnifiedTopology: true,useNewUrlParser: true } )
// mongoose.connect('mongodb://admin:admin@cluster0.dvf4k.azure.mongodb.net') 


//carrega os modelsclear

const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//carrega as rotas

const indexRoute = require('./routes/index-route')
const productRoute = require('./routes/product-route')
const customerRoute = require('./routes/customer-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);

module.exports = app;