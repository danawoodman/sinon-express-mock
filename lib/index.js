'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockRes = exports.mockReq = undefined;

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns a new mock request for use in testing.
var mockReq = exports.mockReq = function mockReq() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return Object.assign({
    session: {},
    params: {},
    body: {},
    query: {},
    flash: _sinon2.default.spy()
  }, options);
};

// Returns a new mock response for use in testing.
var mockRes = exports.mockRes = function mockRes() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return Object.assign({
    json: _sinon2.default.spy(),
    redirect: _sinon2.default.spy(),
    render: _sinon2.default.spy(),
    sendStatus: _sinon2.default.spy(),
    locals: {}
  }, options);
};