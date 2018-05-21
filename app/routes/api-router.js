module.exports = function(app, express) {
    var apiRouter = express.Router();
    var knex = require('../../db/knex');
    var mock_contact = {
      "content": {
        "addresses": [
          {
            "address1": "999 18th St.",
            "address2": "St. 600",
            "city": "Denver",
            "contactId": "string",
            "countryCode": "US",
            "createdDate": "2018-05-18T18:38:28.563Z",
            "id": "string",
            "postalCode": "80206",
            "preferred": false,
            "stateProvince": "CO",
            "type": "string",
            "updatedDate": "2018-05-18T18:38:28.563Z"
          }
        ],
        "attributes": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "createdDate": "2018-05-18T18:38:28.563Z",
        "emails": [
          {
            "contactId": "string",
            "createdDate": "2018-05-18T18:38:28.563Z",
            "emailAddress": "jon.fishman@maine.gov",
            "id": "string",
            "preferred": false,
            "updatedDate": "2018-05-18T18:38:28.563Z"
          }
        ],
        "id": "string",
        "name1": "Jim Davis",
        "name2": "5th floor",
        "phoneNumbers": [
          {
            "contactId": "string",
            "countryCode": "1",
            "createdDate": "2018-05-18T18:38:28.563Z",
            "extension": "x5150",
            "id": "string",
            "phoneNumber": "303-555-1234",
            "preferred": false,
            "type": "string",
            "updatedDate": "2018-05-18T18:38:28.563Z"
          }
        ],
        "type": "Agency User",
        "updatedDate": "2018-05-18T18:38:28.563Z"
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
          var mock_contact_string = req.body || JSON.stringify(mock_contact);
          knex('contact').insert({data: mock_contact_string}).returning('*')
          .then(function(data) {
            console.log(data);
            res.status(201).json(
              JSON.parse(data[0].data);
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

        apiRouter.route('/todo')
            .post(function(req, res) {
                res.status(201).json({
                    "content": {
                      "id": "string",
                      "action": "string",
                      "additionalDocumentIds": [
                        "string"
                      ],
                      "assignedTo": "string",
                      "bestTimeToBeReached": "string",
                      "createdDate": "2018-05-18T18:52:02.453Z",
                      "description": "string",
                      "dueDate": "2018-05-18T18:52:02.453Z",
                      "emailAddress": "string",
                      "lobId": "string",
                      "lobType": "string",
                      "otherDetailsOrComments": "string",
                      "phoneNumber": "string",
                      "policyId": "string",
                      "policyNumber": "string",
                      "priority": "string",
                      "status": "string",
                      "type": "string",
                      "updatedDate": "2018-05-18T18:52:02.453Z"
                    },
                    "error": {
                      "message": "string",
                      "status": 0
                    },
                    "requestId": "string"
                  });
            });

    return apiRouter;
};
