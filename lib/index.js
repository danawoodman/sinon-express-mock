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
    accepts: _sinon2.default.spy(),
    acceptsCharsets: _sinon2.default.spy(),
    acceptsEncodings: _sinon2.default.spy(),
    acceptsLanguages: _sinon2.default.spy(),
    body: {},
    flash: _sinon2.default.spy(),
    get: _sinon2.default.spy(),
    is: _sinon2.default.spy(),
    params: {},
    query: {},
    session: {}
  }, options);
};

// Returns a new mock response for use in testing.
var mockRes = exports.mockRes = function mockRes() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return Object.assign({
    append: _sinon2.default.spy(),
    attachement: _sinon2.default.spy(),
    clearCookie: _sinon2.default.spy(),
    cookie: _sinon2.default.spy(),
    download: _sinon2.default.spy(),
    end: _sinon2.default.spy(),
    format: {},
    get: _sinon2.default.spy(),
    headersSent: _sinon2.default.spy(),
    json: _sinon2.default.spy(),
    jsonp: _sinon2.default.spy(),
    links: _sinon2.default.spy(),
    locals: {},
    location: _sinon2.default.spy(),
    redirect: _sinon2.default.spy(),
    render: _sinon2.default.spy(),
    send: _sinon2.default.spy(),
    sendFile: _sinon2.default.spy(),
    sendStatus: _sinon2.default.spy(),
    set: _sinon2.default.spy(),
    status: _sinon2.default.spy(),
    type: _sinon2.default.spy(),
    vary: _sinon2.default.spy()
  }, options);
};