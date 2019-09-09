const express  = require('express');
const api      = require('./api/index.js');

const router = express.Router();

const apiRouter = router.use((req, res, next) => {
    console.log('Using api router');
    next();
});

apiRouter.route('/users')
    .get((req, res) => {
        res.json(api.users);
    })
apiRouter.route('/messages')
    .get((req, res) => {
        res.send(api.messages)
    })
apiRouter.route('/posts')
    .get((req, res) => {
        res.send(api.posts)
    })
apiRouter.route('/comments')
    .get((req, res) => {
        res.send(api.comments)
    })
    
module.exports = apiRouter;