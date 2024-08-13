const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const { signup } = require('../routes/signup');
const { userValidationRules, validate } = require('../middlewares/validators');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/signup', userValidationRules(), validate, signup);

describe('POST /signup', () => {
  it('should return a success message with masked password', async () => {
    const res = await request(app)
      .post('/signup')
      .send({
        email: 'test@example.com',
        phone: '123-456-7890',
        birthday: '12/12/1980',
        password: 'asdf1234'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'User has successfully signed up!');
    expect(res.body.user).toHaveProperty('email', 'test@example.com');
    expect(res.body.user).toHaveProperty('phone', '123-456-7890');
    expect(res.body.user).toHaveProperty('birthday', '12/12/1980');
    expect(res.body.user).toHaveProperty('password', '●●●●●●●●●●●');
  });

 
});
