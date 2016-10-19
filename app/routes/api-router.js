module.exports = function(app, express) {

    var apiRouter = express.Router();
    var User = require('../models/userModel.js');

    // app.use(function(req, res, next) {
    //     console.log('/api middleware');
    //     next();
    // });

    apiRouter.route('/users')
        .post(function(req, res) {

            var user = new User();

            user.username = req.body.username;
            user.password = req.body.password;

            user.save(function(err) {
                if (err) {
                    if (err.code == 11000) {
                        return res.json({
                            success: false,
                            message: 'A user with that username already exists.'
                        });
                    } else {
                        return res.send(err);
                    }
                }
                res.json({
                    message: 'User created!'
                });
            });

        })
        .get(function(req, res) {

            User.find(function(err, users) {
                if (err) res.status(400).json(err);
                else if (users) res.status(201).json(users);
            });

        })
        // .put(function(req, res) {
        //
        // })
        // .delete(function(req, res) {
        //
        // });


    apiRouter.route('/users/:id')
        .get(function(req, res) {

            User.find({
                _id: req.params.id
            }, function(err, user) {
                if (err) res.status(400).json(err);
                else if (user) res.status(201).json(user);
            });

        })
        .put(function(req, res) {

            User.findById(req.params.id, function(err, user) {
                if (err) res.status(400).json(err);

                if (req.body.username) user.username = req.body.username;
                if (req.body.password) user.password = req.body.password;

                 user.save(function(err) {
                     if (err) res.status(400).json(err);
                     res.status(201).json({message: 'User updated.'});
                 });
            });

        })
        .delete(function(req, res) {

            User.findOneAndRemove({
                _id: req.params.id
            }, function(err) {
                if (err) res.status(400).json(err);
                 res.status(201).json({message: 'User deleted.'});
            });

        });

    return apiRouter;
};
