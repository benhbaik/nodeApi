module.exports = function(app, express) {
    var apiRouter = express.Router();
    var knex = require('../../db/knex');
    var mock_todo = {
        "content": {
          "assignedTo": "string",
          "email": "string",
          "phone": "string",
        },
        "error": {
          "message": "string",
          "status": 0
        },
        "requestId": "string"
      };

    var mock_contact = {
      "content": {
        "email": "string",
        "firstName": "string",
        "lastName": "string",
        "phone": "string",
      },
      "error": {
        "message": "string",
        "status": 0
      },
      "requestId": "string"
    };

    var mock_message = {
      "content": {
        "IntegrationID": "string",
        "EntityType": "string",
        "EntityID": "string",
        "OperationType": "string",
      },
      "error": {
        "message": "string",
        "status": 0
      },
      "requestId": "string"
    };

    apiRouter.route('/contact/:id')
      .get(function(req, res) {
        knex('contact').where('id', req.params.id)
        .then(function(data) {
          res.status(201).json(JSON.parse(data[0].data));
        })
        .catch(function(err) {
          res.send(err);
        });
      });

    apiRouter.route('/contact')
        .post(function(req, res) {
          var mock_contact_string = JSON.stringify(req.body) || JSON.stringify(mock_contact);
          console.log("REQUEST BODY: " + req.body);
          knex('contact').insert({data: mock_contact_string}).returning('*')
          .then(function(data) {
            console.log(data);
            res.status(201).json(
              JSON.parse(data[0].data)
            );
          })
          .catch(function(err) {
            res.send(err);
          });
        })
        .get(function(req, res) {
          knex('contact')
          .then(function(data) {
            var output = [];
            for (var i = 0; i < data.length; i++) {
              try {
                output.push(JSON.parse(data[i].data));
              }
              catch (e) {
                console.log("failed to push ID " + data[i].id);
              }
            }
            res.status(201).json(output);
          })
          .catch(function(err) {
            res.send(err);
          });
        });

        apiRouter.route('/todo/:id')
          .get(function(req, res) {
            knex('todo').where('id', req.params.id)
            .then(function(data) {
              res.status(201).json(JSON.parse(data[0].data));
            })
            .catch(function(err) {
              res.send(err);
            });
          });

        apiRouter.route('/todo')
            .post(function(req, res) {
              var mock_todo_string = req.body || JSON.stringify(mock_todo);
              knex('todo').insert({data: mock_todo_string}).returning('*')
              .then(function(data) {
                console.log(data);
                res.status(201).json(
                  JSON.parse(data[0].data)
                );
              })
              .catch(function(err) {
                res.send(err);
              });
            })
            .get(function(req, res) {
              knex('todo')
              .then(function(data) {
                var output = [];
                for (var i = 0; i < data.length; i++) {
                  try {
                    output.push(JSON.parse(data[i].data));
                  }
                  catch (e) {
                    console.log("failed to push ID " + data[i].id);
                  }
                }
                res.status(201).json(output);
              })
              .catch(function(err) {
                res.send(err);
              });
            });

        apiRouter.route('/message')
            .post(function(req, res) {
              var mock_message_string = req.body || JSON.stringify(mock_message);
              knex('message').insert({data: mock_message_string}).returning('*')
              .then(function(data) {
                console.log(data);
                res.status(201).json(
                  JSON.parse(data[0].data)
                );
              })
              .catch(function(err) {
                res.send(err);
              });
            })
            .get(function(req, res) {
              knex('message')
              .then(function(data) {
                var output = [];
                for (var i = 0; i < data.length; i++) {
                  try {
                    output.push(JSON.parse(data[i].data));
                  }
                  catch (e) {
                    console.log("failed to push ID " + data[i].id);
                  }
                }
                res.status(201).json(output);
              })
              .catch(function(err) {
                res.send(err);
              });
            });

    return apiRouter;
};
