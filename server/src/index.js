import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { request } from 'http';
const server = express();
const port = 8080;
server.use(cors());
server.use(bodyParser.json());

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

function create_quote(req, res) {

  // Connect to database
  server.getConnection(function(err, connection) {
    if(err) {
      connection.release();
      res.json({"code": 100, "status": "Error in database connection"});
      return;
    }

    // SQL query
    let sql ="INSERT INTO quotes (status, mobile, email, quote_data) VALUES (?, ?, ?, ?) ";
      // Assign data to variables
        let status = request.body.relationship;
        let mobile = request.body.phone;
        let email = request.body.email;
        let quote_data = {
          firstName: request.body.firstName,
          middleName: request.body.middleName,
          lastName: request.body.lastName,
          income: request.body.income,
          incomeFrequency: request.body.incomeFrequency,
          occupation: request.body.occupation,
          employer: request.body.employer,
          yearsWithEmployer: request.body.yearsWithEmployer,
          monthsWithEmployer: request.body.monthsWithEmployer,
          dependants: request.body.dependants,
          otherIncome: request.body.otherIncome
        };

        // Initialize values
        let values = [status, mobile, email, quote_data];
        
        console.log("connected as id '" + connection.threadId);
        console.log("here")
        connection.query(sql, values, function(err, result, fields) {
            connection.release();
            if(!err) {
                console.log(result);
            } else console.log(err);
        });    
  
        connection.on('error', function(err){
            res.json({"code": 100, "status": "Error in database connection"});
        })

  })
};

// Post to driva database
router.post('/driva', function(req, res){
  create_quote(req, res);
});
