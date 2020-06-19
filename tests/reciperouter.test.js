//reference only
const app = require('./app');

const request = require('supertest');



describe('Routes', () => {
    xtest('/people should return person page', (done) => {
        request(app)
            .get('/people')
            .expect(200)
            .expect('content-type', /json/)
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });

    xtest('It should respond the GET method at root request', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('content-type', /html/)
            .end((err, res) => {
                if (err) throw err;
                done()
            })

    });

    xtest('It should fail if the get request is invalid.', (done) => {
        request(app)
            .get('/hello')
            .expect(404)
            .expect('content-type', /html/)
            .end((err, res) => {
                if (err) throw err;
                done()
            })
    })
});