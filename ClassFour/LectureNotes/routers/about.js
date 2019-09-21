const express  = require('express');

const router = express.Router();

const aboutRouter = router.use((req, res, next) => {
    console.log('Using about router');
    next();
});

aboutRouter.route('/mongo')
    .get((req, res) => {
        res.render('about/mongo')
    })
aboutRouter.route('/node')
    .get((req, res) => {
        res.render('about/node')
    })
    
module.exports = aboutRouter;