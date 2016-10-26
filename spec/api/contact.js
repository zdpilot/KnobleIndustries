/**
 * Created by yeoman generator-makrina 0.3.0 on 17/10/2016.
 */
var request = require('supertest');
var app = require('../../app');
var getToken = require('../helpers/get-token');

describe('Routing: API contact with real transport', function() {
  this.timeout(5000);
  it('should send an email', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        request(app)
          .post('/api/contact')
          .set({cookie: res.headers['set-cookie']})
          .send({
            _csrf: getToken(res.headers['set-cookie']),
            name: 'Knoble test',
            email: 'spec/index.js',
            subject: '[TEST]',
            message: 'Test OK'
          })
          .expect(200)
          .end(done);
      });
  });
});
