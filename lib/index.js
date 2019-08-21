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
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var ret = {};
  return Object.assign(ret, {
    accepts: _sinon2.default.stub().returns(ret),
    acceptsCharsets: _sinon2.default.stub().returns(ret),
    acceptsEncodings: _sinon2.default.stub().returns(ret),
    acceptsLanguages: _sinon2.default.stub().returns(ret),
    body: {},
    flash: _sinon2.default.stub().returns(ret),
    get: _sinon2.default.stub().returns(ret),
    header: _sinon2.default.stub().returns(ret),
    is: _sinon2.default.stub().returns(ret),
    params: {},
    query: {},
    session: {}
  }, options);
};

// Returns a new mock response for use in testing.
var mockRes = exports.mockRes = function mockRes() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var ret = {};
  return Object.assign(ret, {
    append: _sinon2.default.stub().returns(ret),
    attachment: _sinon2.default.stub().returns(ret),
    clearCookie: _sinon2.default.stub().returns(ret),
    cookie: _sinon2.default.stub().returns(ret),
    download: _sinon2.default.stub().returns(ret),
    end: _sinon2.default.stub().returns(ret),
    format: {},
    get: _sinon2.default.stub().returns(ret),
    headersSent: _sinon2.default.stub().returns(ret),
    json: _sinon2.default.stub().returns(ret),
    jsonp: _sinon2.default.stub().returns(ret),
    links: _sinon2.default.stub().returns(ret),
    locals: {},
    location: _sinon2.default.stub().returns(ret),
    redirect: _sinon2.default.stub().returns(ret),
    render: _sinon2.default.stub().returns(ret),
    send: _sinon2.default.stub().returns(ret),
    sendFile: _sinon2.default.stub().returns(ret),
    sendStatus: _sinon2.default.stub().returns(ret),
    set: _sinon2.default.stub().returns(ret),
    status: _sinon2.default.stub().returns(ret),
    type: _sinon2.default.stub().returns(ret),
    vary: _sinon2.default.stub().returns(ret),
    write: _sinon2.default.stub().returns(ret),
    writeHead: _sinon2.default.stub().returns(ret)
  }, options);
};