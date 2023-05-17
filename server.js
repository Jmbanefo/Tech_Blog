const path = require('path'); 
const express = require('express');
const session = require('expression-session'); 
const handleBrs = require('express-handlebars');
consthelpers = require('./utils/helpers')
const routes = require('./controllers'); 


const SequelizeStore = require('connect-session-sequalize')(session.Store); 
