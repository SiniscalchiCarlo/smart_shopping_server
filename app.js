const express = require('express');
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/.well-known', express.static('.well-known'));