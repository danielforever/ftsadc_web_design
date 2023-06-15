let request = require('supertest');
let app = require('../index.js');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

describe('GET /', function () {
    it('respond with hello world', function (done) {
        // navigate to root and check the the response is "hello world"
        request(app).get('/').expect('hello world', done);
    });
});

/*
* Test the POST route
*/
describe('POST /users', () => {
    it('it should not POST a user without roles field', (done) => {
        let user = {
            username: "testuser",
            password: "asdnoQW!!34",
            email: "testemail@abc.com",
        }
      chai.request(app)
          .post('/users')
          .send(user)
          .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('All fields are required');
            done();
          });
    });

    it('it should not POST a user without a valid edu email address', (done) => {
        let user = {
            username: "testuser",
            password: "asdnoQW!!34",
            email: "testemail@abc.com",
            roles: [
                "Employee"
            ]
        }
      chai.request(app)
          .post('/users')
          .send(user)
          .end((err, res) => {
                res.should.have.status(409);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('This is not a valid edu email address');
            done();
          });
    });

    it('it should POST a user ', (done) => {
        let user = {
            username: "testuser1",
            password: "asdnoQW!!34",
            email: "23123test24@umd.edu",
            roles: [
                "Employee"
            ]
        }
          chai.request(app)
          .post('/users')
          .send(user)
          .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql(`New user ${user.username} created`);
            done();
          });
    });

    it('it should not POST a user with a duplicate username', (done) => {
        let user = {
            username: "testuser1",
            password: "asdnoQW!!34",
            email: "23123test25@umd.edu",
            roles: [
                "Employee"
            ]
        }
      chai.request(app)
          .post('/users')
          .send(user)
          .end((err, res) => {
                res.should.have.status(409);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Duplicate username');
            done();
          });
    });

    it('it should not POST a user with a duplicate email', (done) => {
        let user = {
            username: "testuser2",
            password: "asdnoQW!!34",
            email: "23123test24@umd.edu",
            roles: [
                "Employee"
            ]
        }
      chai.request(app)
          .post('/users')
          .send(user)
          .end((err, res) => {
                res.should.have.status(409);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Duplicate email');
            done();
          });
    });

});

/*
* Test the GET route
*/
describe('GET /users', function () {
    it('it should GET all the users', function (done) {
        this.timeout(15000);
        chai.request(app)
            .get('/users')
            .end((err, res) => {
                res.should.have.status(200); // Response code
                res.body.should.be.a('array'); // Data type
                done();
            });
    });
});

var user = {
    _id: "",
    username: "testuser1",
}

describe('GET /users/username & GET /users/id', function () {
    it('it should GET testuser1 by username', function (done) {
        this.timeout(15000);
        chai.request(app)
            .get('/users/username')
            .send(user)
            .end((err, res) => {
                user._id = res.body._id; // pass id for the next test
                res.should.have.status(200); // Response code
                res.body.should.be.a('object'); // Data type
                res.body.username.should.be.eql('testuser1'); // Verify user name
                done();
            });
    });

    it('it should GET testuser1 by id', function (done) {
        this.timeout(15000);
        chai.request(app)
            .get('/users/id')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200); // Response code
                res.body.should.be.a('object'); // Data type
                res.body.username.should.be.eql('testuser1'); // Verify user name
                done();
            });
    });
});

/*
* Test the DELETE route
*/
// describe('DELETE /users', () => {
//     it('it should delete the "testuser1" user', (done) => {
//       chai.request(app)
//           .delete('/users')
//           .send(user)
//           .end((err, res) => {
//             console.log(`Username: ${user.username}`)
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             res.body.should.have.property('message').eql(`Username ${user.username} with ID ${user._id} deleted`);
//             done();
//           });
//     });

// });