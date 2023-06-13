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
    it('it should not POST a user without pages field', (done) => {
        let user = {
            username: "testuser",
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
                res.body.length.should.be.eql(4); // The number of users
                done();
            });
    });
});

describe('GET /users/username & GET /users/id', function () {
    let user = {
        _id: "",
        username: "testuser1",
    }
    it('it should GET a user by username', function (done) {
        this.timeout(15000);
        chai.request(app)
            .get('/users/username')
            .send(user)
            .end((err, res) => {
                user._id = res.body._id;
                res.should.have.status(200); // Response code
                res.body.should.be.a('object'); // Data type
                res.body.username.should.be.eql('testuser1'); // Verify user name
                done();
            });
    });

    it('it should GET a user by id', function (done) {
        this.timeout(15000);
        chai.request(app)
            .get('/users/id')
            .send(user)
            .end((err, res) => {
                user._id = res.body._id;
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
describe('DELETE /users', () => {
    it('it should delete the "testuser1" user', (done) => {
        let user = {
            username: "testuser1",
        }
      chai.request(app)
          .delete('/users')
          .send(user)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql(`Username: ${user.username} deleted`);
            done();
          });
    });

});