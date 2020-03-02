const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../index');

chai.use(chaiHttp);
const { expect } = chai;


module.exports = {
    chai,
    expect,
    app,
    sinon
}