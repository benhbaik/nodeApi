module.exports = function(app, express) {
    var apiRouter = express.Router();
    var knex = require('../../db/knex');
    var mock_contact = require('/contact_data');

    apiRouter.route('/contact')
        .post(function(req, res) {
            res.status(201).json(
              mock_contact
              // {
              //   "content": {
              //     "addresses": [
              //       {
              //         "address1": "999 18th St.",
              //         "address2": "St. 600",
              //         "city": "Denver",
              //         "contactId": "string",
              //         "countryCode": "US",
              //         "createdDate": "2018-05-18T18:38:28.563Z",
              //         "id": "string",
              //         "postalCode": "80206",
              //         "preferred": false,
              //         "stateProvince": "CO",
              //         "type": "string",
              //         "updatedDate": "2018-05-18T18:38:28.563Z"
              //       }
              //     ],
              //     "attributes": {
              //       "additionalProp1": "string",
              //       "additionalProp2": "string",
              //       "additionalProp3": "string"
              //     },
              //     "createdDate": "2018-05-18T18:38:28.563Z",
              //     "emails": [
              //       {
              //         "contactId": "string",
              //         "createdDate": "2018-05-18T18:38:28.563Z",
              //         "emailAddress": "jon.fishman@maine.gov",
              //         "id": "string",
              //         "preferred": false,
              //         "updatedDate": "2018-05-18T18:38:28.563Z"
              //       }
              //     ],
              //     "id": "string",
              //     "name1": "Jim Davis",
              //     "name2": "5th floor",
              //     "phoneNumbers": [
              //       {
              //         "contactId": "string",
              //         "countryCode": "1",
              //         "createdDate": "2018-05-18T18:38:28.563Z",
              //         "extension": "x5150",
              //         "id": "string",
              //         "phoneNumber": "303-555-1234",
              //         "preferred": false,
              //         "type": "string",
              //         "updatedDate": "2018-05-18T18:38:28.563Z"
              //       }
              //     ],
              //     "type": "Agency User",
              //     "updatedDate": "2018-05-18T18:38:28.563Z"
              //   },
              //   "error": {
              //     "message": "string",
              //     "status": 0
              //   },
              //   "requestId": "string"
              // }
            );
        })
        .get(function(req, res) {
          knex('contact')
          .then(function(data) {
            res.status(201).json(JSON.parse(data[0]));
          })
          .catch(function(err) {
            console.log(err);
          });
            // res.status(201).json({
            //     "content": {
            //       "addresses": [
            //         {
            //           "address1": "999 18th St.",
            //           "address2": "St. 600",
            //           "city": "Denver",
            //           "contactId": "string",
            //           "countryCode": "US",
            //           "createdDate": "2018-05-18T17:20:49.992Z",
            //           "id": "string",
            //           "postalCode": "80206",
            //           "preferred": false,
            //           "stateProvince": "CO",
            //           "type": "string",
            //           "updatedDate": "2018-05-18T17:20:49.992Z"
            //         }
            //       ],
            //       "attributes": {
            //         "additionalProp1": "string",
            //         "additionalProp2": "string",
            //         "additionalProp3": "string"
            //       },
            //       "createdDate": "2018-05-18T17:20:49.992Z",
            //       "emails": [
            //         {
            //           "contactId": "string",
            //           "createdDate": "2018-05-18T17:20:49.992Z",
            //           "emailAddress": "jon.fishman@maine.gov",
            //           "id": "string",
            //           "preferred": false,
            //           "updatedDate": "2018-05-18T17:20:49.992Z"
            //         }
            //       ],
            //       "id": "string",
            //       "name1": "Jim Davis",
            //       "name2": "5th floor",
            //       "phoneNumbers": [
            //         {
            //           "contactId": "string",
            //           "countryCode": "1",
            //           "createdDate": "2018-05-18T17:20:49.992Z",
            //           "extension": "x5150",
            //           "id": "string",
            //           "phoneNumber": "303-555-1234",
            //           "preferred": false,
            //           "type": "string",
            //           "updatedDate": "2018-05-18T17:20:49.992Z"
            //         }
            //       ],
            //       "type": "Agency User",
            //       "updatedDate": "2018-05-18T17:20:49.992Z"
            //     },
            //     "error": {
            //       "message": "string",
            //       "status": 0
            //     },
            //     "requestId": "string"
            //   });
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
