import sinon from 'sinon'

// Returns a new mock request for use in testing.
export const mockReq = (options = {}) => {
  const ret = {};
  return Object.assign(ret, {
    accepts: sinon.stub().returns(ret),
    acceptsCharsets: sinon.stub().returns(ret),
    acceptsEncodings: sinon.stub().returns(ret),
    acceptsLanguages: sinon.stub().returns(ret),
    body: {},
    flash: sinon.stub().returns(ret),
    get: sinon.stub().returns(ret),
    is: sinon.stub().returns(ret),
    params: {},
    query: {},
    session: {},
  }, options)
}

// Returns a new mock response for use in testing.
export const mockRes = (options = {}) => {
  const ret = {};
  return Object.assign(ret, {
    append: sinon.stub().returns(ret),
    attachement: sinon.stub().returns(ret),
    clearCookie: sinon.stub().returns(ret),
    cookie: sinon.stub().returns(ret),
    download: sinon.stub().returns(ret),
    end: sinon.stub().returns(ret),
    format: {},
    get: sinon.stub().returns(ret),
    headersSent: sinon.stub().returns(ret),
    json: sinon.stub().returns(ret),
    jsonp: sinon.stub().returns(ret),
    links: sinon.stub().returns(ret),
    locals: {},
    location: sinon.stub().returns(ret),
    redirect: sinon.stub().returns(ret),
    render: sinon.stub().returns(ret),
    send: sinon.stub().returns(ret),
    sendFile: sinon.stub().returns(ret),
    sendStatus: sinon.stub().returns(ret),
    set: sinon.stub().returns(ret),
    status: sinon.stub().returns(ret),
    type: sinon.stub().returns(ret),
    vary: sinon.stub().returns(ret),
  }, options)
}
