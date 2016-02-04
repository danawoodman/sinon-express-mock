import sinon from 'sinon'

// Returns a new mock request for use in testing.
export const mockReq = (options = {}) => {
  return Object.assign({
    accepts: sinon.spy(),
    acceptsCharsets: sinon.spy(),
    acceptsEncodings: sinon.spy(),
    acceptsLanguages: sinon.spy(),
    body: {},
    flash: sinon.spy(),
    get: sinon.spy(),
    is: sinon.spy(),
    params: {},
    query: {},
    session: {},
  }, options)
}

// Returns a new mock response for use in testing.
export const mockRes = (options = {}) => {
  return Object.assign({
    append: sinon.spy(),
    attachement: sinon.spy(),
    clearCookie: sinon.spy(),
    cookie: sinon.spy(),
    download: sinon.spy(),
    end: sinon.spy(),
    format: {},
    get: sinon.spy(),
    headersSent: sinon.spy(),
    json: sinon.spy(),
    jsonp: sinon.spy(),
    links: sinon.spy(),
    locals: {},
    location: sinon.spy(),
    redirect: sinon.spy(),
    render: sinon.spy(),
    send: sinon.spy(),
    sendFile: sinon.spy(),
    sendStatus: sinon.spy(),
    set: sinon.spy(),
    status: sinon.spy(),
    type: sinon.spy(),
    vary: sinon.spy(),
  }, options)
}
